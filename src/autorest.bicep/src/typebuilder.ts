// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Channel, AutorestExtensionHost } from "@autorest/extension-base";
import { ArrayType, BuiltInTypeKind, DiscriminatedObjectType, ObjectTypeProperty, ObjectTypePropertyFlags, ObjectType, StringLiteralType, TypeBaseKind, TypeFactory, TypeReference, UnionType } from "bicep-types";
import { Dictionary, flatMap, keyBy, keys, uniq } from 'lodash';
import { getSerializedName } from "./resources";
import { Schema, ObjectSchema, DictionarySchema, ChoiceSchema, SealedChoiceSchema, ConstantSchema, ArraySchema, PrimitiveSchema, AnySchema, Property, SchemaType, StringSchema } from "@autorest/codemodel";

export class TypeBuilder {
    readonly host: AutorestExtensionHost;
    readonly factory: TypeFactory;
    readonly names: Dictionary<TypeReference>;

    constructor(host: AutorestExtensionHost, factory: TypeFactory, names: Dictionary<TypeReference>) {
        this.host = host;
        this.factory = factory;
        this.names = names;
    }

    private logWarning(message: string) {
        this.host.Message({ Channel: Channel.Warning, Text: message, });
    }

    private logInfo(message: string) {
        this.host.Message({ Channel: Channel.Information, Text: message, });
    }

    private combineAndThrowIfNull<TSchema extends Schema>(putSchema: TSchema | undefined, getSchema: TSchema | undefined) {
        const output = putSchema ?? getSchema;
        if (!output) {
            throw 'Unable to find PUT or GET type';
        }

        return output;
    }

    parseType(putSchema: Schema | undefined, getSchema: Schema | undefined): TypeReference | undefined {
        const combinedSchema = this.combineAndThrowIfNull(putSchema, getSchema);

        // A schema that matches a JSON object with specific properties, such as
        // { "name": { "type": "string" }, "age": { "type": "number" } }
        if (combinedSchema instanceof ObjectSchema) {
            return this.parseObjectType(putSchema as ObjectSchema, getSchema as ObjectSchema, true);
        }

        // A schema that matches a "dictionary" JSON object, such as
        // { "additionalProperties": { "type": "string" } }
        if (combinedSchema instanceof DictionarySchema) {
            return this.parseDictionaryType(putSchema as DictionarySchema, getSchema as DictionarySchema);
        }

        // A schema that matches a single value from a given set of values, such as
        // { "enum": [ "a", "b" ] }
        if (combinedSchema instanceof ChoiceSchema) {
            return this.parseEnumType(putSchema as ChoiceSchema, getSchema as ChoiceSchema);
        }
        if (combinedSchema instanceof SealedChoiceSchema) {
            return this.parseEnumType(putSchema as SealedChoiceSchema, getSchema as SealedChoiceSchema);
        }
        if (combinedSchema instanceof ConstantSchema) {
            return this.parseConstant(putSchema as ConstantSchema, getSchema as ConstantSchema);
        }

        // A schema that matches an array of values, such as
        // { "items": { "type": "number" } }
        if (combinedSchema instanceof ArraySchema) {
            return this.parseArrayType(putSchema as ArraySchema, getSchema as ArraySchema);
        }

        // A schema that matches simple values, such as { "type": "number" }
        if (combinedSchema instanceof PrimitiveSchema) {
            return this.parsePrimaryType(putSchema as PrimitiveSchema, getSchema as PrimitiveSchema);
        }

        // The 'any' type
        if (combinedSchema instanceof AnySchema) {
            return this.factory.lookupBuiltInType(BuiltInTypeKind.Any);
        }

        this.logWarning(`Unrecognized property type: ${combinedSchema.type}. Returning 'any'.`);
        return this.factory.lookupBuiltInType(BuiltInTypeKind.Any);
    }

    parsePropertyFlags(putProperty: Property | undefined, getProperty: Property | undefined) {
        let flags = ObjectTypePropertyFlags.None;

        if (putProperty && putProperty.required) {
            flags |= ObjectTypePropertyFlags.Required;
        }

        if (!putProperty || putProperty.readOnly) {
            flags |= ObjectTypePropertyFlags.ReadOnly;
        }

        if (!getProperty) {
            flags |= ObjectTypePropertyFlags.WriteOnly;
        }

        return flags;
    }

    parsePrimaryType(putSchema: PrimitiveSchema | undefined, getSchema: PrimitiveSchema | undefined) {
        const combinedSchema = this.combineAndThrowIfNull(putSchema, getSchema);

        switch (combinedSchema.type) {
            case SchemaType.Boolean:
                return this.factory.lookupBuiltInType(BuiltInTypeKind.Bool);
            case SchemaType.Integer:
            case SchemaType.Number:
            case SchemaType.UnixTime:
                return this.factory.lookupBuiltInType(BuiltInTypeKind.Int);
            case SchemaType.Object:
                return this.factory.lookupBuiltInType(BuiltInTypeKind.Any);
            case SchemaType.ByteArray:
                return this.factory.lookupBuiltInType(BuiltInTypeKind.Array);
            case SchemaType.Uri:
            case SchemaType.Date:
            case SchemaType.DateTime:
            case SchemaType.Time:
            case SchemaType.String:
            case SchemaType.Uuid:
            case SchemaType.Duration:
            case SchemaType.Credential:
                return this.factory.lookupBuiltInType(BuiltInTypeKind.String);
            default:
                this.logWarning(`Unrecognized known property type: "${combinedSchema.type}"`);
                return this.factory.lookupBuiltInType(BuiltInTypeKind.Any);
        }
    }

    createObject(definitionName: string, schema: ObjectSchema, properties: Dictionary<ObjectTypeProperty>, additionalProperties?: TypeReference) {
        if (schema.discriminator) {
            return this.factory.addDiscriminatedObjectType(
                definitionName,
                schema.discriminator.property.serializedName,
                properties,
                {});
        }

        return this.factory.addObjectType(definitionName, properties, additionalProperties);
    }

    getSchemaProperties(schema: ObjectSchema, includeBaseProperties: boolean): Dictionary<Property> {
        const objects = [schema];
        if (includeBaseProperties) {
            for (const parent of schema.parents?.all || []) {
                if (parent instanceof ObjectSchema) {
                    objects.push(parent);
                }
            }
        }

        return keyBy(flatMap(objects, o => o.properties || []), p => p.serializedName);
    }

    *getObjectTypeProperties(putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined, includeBaseProperties: boolean) {
        const putProperties = putSchema ? this.getSchemaProperties(putSchema, includeBaseProperties) : {};
        const getProperties = getSchema ? this.getSchemaProperties(getSchema, includeBaseProperties) : {};

        for (const propertyName of uniq([...keys(putProperties), ...keys(getProperties)])) {
            if ((putSchema?.discriminator?.property && putSchema.discriminator.property === putProperties[propertyName]) ||
                (getSchema?.discriminator?.property && getSchema.discriminator.property === getProperties[propertyName])) {
                continue;
            }

            const putProperty = putProperties[propertyName] as Property | undefined
            const getProperty = getProperties[propertyName] as Property | undefined

            yield { propertyName, putProperty, getProperty };
        }
    }

    flattenDiscriminatorSubTypes(schema: ObjectSchema | undefined) {
        if (!schema || !schema.discriminator) {
            return {};
        }

        const output: Dictionary<ObjectSchema> = {};
        for (const key in schema.discriminator.all) {
            const value = schema.discriminator.all[key];

            if (!(value instanceof ObjectSchema)) {
                throw `Unable to flatten discriminated properties - schema '${getSerializedName(schema)}' has non-object discriminated value '${getSerializedName(value)}'.`;
            }

            if (!value.discriminator) {
                output[key] = value;
                continue;
            }

            if (schema.discriminator.property.serializedName !== value.discriminator.property.serializedName) {
                throw `Unable to flatten discriminated properties - schemas '${getSerializedName(schema)}' and '${getSerializedName(value)}' have conflicting discriminators '${schema.discriminator.property.serializedName}' and '${value.discriminator.property.serializedName}'`;
            }

            const subTypes = this.flattenDiscriminatorSubTypes(value);
            for (const subTypeKey in subTypes) {
                output[subTypeKey] = subTypes[subTypeKey];
            }
        }

        return output;
    }

    *getDiscriminatedSubTypes(putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined) {
        const putSubTypes = this.flattenDiscriminatorSubTypes(putSchema);
        const getSubTypes = this.flattenDiscriminatorSubTypes(getSchema);

        for (const subTypeName of uniq([...keys(putSubTypes), ...keys(getSubTypes)])) {
            yield {
                subTypeName,
                putSubType: putSubTypes[subTypeName],
                getSubType: getSubTypes[subTypeName],
            };
        }
    }

    handlePolymorphicType(discriminatedObjectType: DiscriminatedObjectType, putSchema?: ObjectSchema, getSchema?: ObjectSchema) {
        for (const { putSubType, getSubType } of this.getDiscriminatedSubTypes(putSchema, getSchema)) {
            const combinedSubType = this.combineAndThrowIfNull(putSubType, getSubType);

            if (!combinedSubType.discriminatorValue) {
                continue;
            }

            const objectTypeRef = this.parseObjectType(putSubType, getSubType, false);
            const objectType = this.factory.lookupType(objectTypeRef);
            if (objectType.Type !== TypeBaseKind.ObjectType) {
                this.logWarning(`Found unexpected element of discriminated type '${discriminatedObjectType.Name}'`)
                continue;
            }

            discriminatedObjectType.Elements[combinedSubType.discriminatorValue] = objectTypeRef;

            const description = (putSchema ?? getSchema)?.discriminator?.property.language.default.description;
            objectType.Properties[discriminatedObjectType.Discriminator] = this.createObjectTypeProperty(
                this.factory.addStringLiteralType(combinedSubType.discriminatorValue),
                ObjectTypePropertyFlags.Required,
                description);
        }
    }

    parseObjectType(putSchema: ObjectSchema | undefined, getSchema: ObjectSchema | undefined, includeBaseProperties: boolean) {
        const combinedSchema = this.combineAndThrowIfNull(putSchema, getSchema);
        const definitionName = getSerializedName(combinedSchema);

        if (includeBaseProperties && this.names[definitionName]) {
            // if we're building a discriminated subtype, we're going to be missing the base properties
            // so construct the type on-the-fly, and don't cache it globally
            return this.names[definitionName];
        }

        let additionalProperties: TypeReference | undefined;
        if (includeBaseProperties) {
            const putParentDictionary = (putSchema?.parents?.all || []).filter(x => x instanceof DictionarySchema).map(x => x as DictionarySchema)[0];
            const getParentDictionary = (getSchema?.parents?.all || []).filter(x => x instanceof DictionarySchema).map(x => x as DictionarySchema)[0];

            if (putParentDictionary || getParentDictionary) {
                additionalProperties = this.parseType(putParentDictionary?.elementType, putParentDictionary?.elementType);
            }
        }

        const definitionProperties: Dictionary<ObjectTypeProperty> = {};
        const definition = this.createObject(definitionName, combinedSchema, definitionProperties, additionalProperties);
        if (includeBaseProperties) {
            // cache the definition so that it can be re-used
            this.names[definitionName] = definition;
        }

        for (const { propertyName, putProperty, getProperty } of this.getObjectTypeProperties(putSchema, getSchema, includeBaseProperties)) {
            const propertyDefinition = this.parseType(putProperty?.schema, getProperty?.schema);
            if (propertyDefinition !== undefined) {
                const description = (putProperty?.schema, getProperty?.schema)?.language.default?.description;
                const flags = this.parsePropertyFlags(putProperty, getProperty);
                definitionProperties[propertyName] = this.createObjectTypeProperty(propertyDefinition, flags, description);
            }
        }

        if (combinedSchema.discriminator) {
            const discriminatedObjectType = this.factory.lookupType(definition) as DiscriminatedObjectType;

            this.handlePolymorphicType(discriminatedObjectType, putSchema, getSchema);
        }

        return definition;
    }

    parseEnumType(putSchema: ChoiceSchema | SealedChoiceSchema | undefined, getSchema: ChoiceSchema | SealedChoiceSchema | undefined) {
        const combinedSchema = this.combineAndThrowIfNull(putSchema, getSchema);

        if (!(combinedSchema.choiceType instanceof StringSchema)) {
            // we can only handle string enums right now
            return this.parseType(putSchema?.choiceType, getSchema?.choiceType);
        }

        const enumTypes = [];
        for (const enumValue of combinedSchema.choices) {
            const stringLiteralType = this.factory.addStringLiteralType(enumValue.value.toString());
            enumTypes.push(stringLiteralType);
        }

        if (enumTypes.length === 1) {
            return enumTypes[0];
        }

        return this.factory.addUnionType(enumTypes);
    }

    parseConstant(putSchema: ConstantSchema | undefined, getSchema: ConstantSchema | undefined) {
        const combinedSchema = this.combineAndThrowIfNull(putSchema, getSchema);
        const constantValue = combinedSchema.value;

        return this.factory.addStringLiteralType(constantValue.value.toString());
    }

    parseDictionaryType(putSchema: DictionarySchema | undefined, getSchema: DictionarySchema | undefined) {
        const combinedSchema = this.combineAndThrowIfNull(putSchema, getSchema);
        const additionalPropertiesType = this.parseType(putSchema?.elementType, getSchema?.elementType);

        return this.factory.addObjectType(getSerializedName(combinedSchema), {}, additionalPropertiesType);
    }

    parseArrayType(putSchema: ArraySchema | undefined, getSchema: ArraySchema | undefined) {
        const itemType = this.parseType(putSchema?.elementType, getSchema?.elementType);
        if (itemType === undefined) {
            return this.factory.lookupBuiltInType(BuiltInTypeKind.Array);
        }

        return this.factory.addArrayType(itemType);
    }

    createObjectTypeProperty(type: TypeReference, flags: ObjectTypePropertyFlags, description?: string): ObjectTypeProperty {
        return { Type: type, Flags: flags, Description: description?.trim() || undefined };
    }
}