// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Parameter } from "@autorest/codemodel";
import { Dictionary } from "lodash";
import { SchemaConverter } from "./converter";
import { ProviderDefinition, ResourceDefinition } from "./resources";
import { TypeBuilder } from "./typebuilder";
import { BuiltInTypeKind, ObjectProperty, ObjectPropertyFlags, ResourceType, StringLiteralType, TypeReference } from "bicep-types";

export class ARMConverter extends SchemaConverter {
    Convert(builder: TypeBuilder, provider: ProviderDefinition, fullyQualifiedType: string, definitions: ResourceDefinition[]): ResourceType | null {
        function nameType(definition: ResourceDefinition): TypeReference | undefined {
            if (!definition.nameParameter) {
                return undefined;
            }

            const name = definition.nameParameter;
            if (definition.nameParameter instanceof String) {
                if (!/^[a-zA-Z0-9]*$/.test(name as string)) {
                    throw new Error(`Unable to process non-alphanumeric name '${name as string}'`);
                }
                return builder.factory.addStringLiteralType(name as string);
            } else {
                return builder.parseType((name as Parameter).schema, undefined);
            }
        }

        function initializeResource(definition: ResourceDefinition, properties: Dictionary<ObjectProperty>) {
            const type = builder.factory.addStringLiteralType(fullyQualifiedType);
            properties[`id`] = builder.createObjectProperty(builder.factory.lookupBuiltInType(BuiltInTypeKind.String), ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, 'The resource id');
            properties[`type`] = builder.createObjectProperty(type, ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, 'The resource type');
            properties[`apiVersion`] = builder.createObjectProperty(builder.factory.addStringLiteralType(provider.apiVersion), ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, 'The resource api version');
            
            const name = nameType(definition)
            if (name !== undefined) {
                properties[`name`] = builder.createObjectProperty(name, ObjectPropertyFlags.Required | ObjectPropertyFlags.DeployTimeConstant, 'The resource name');
            }
        }

        return this.process(builder, provider, fullyQualifiedType, definitions, initializeResource);
    }
}