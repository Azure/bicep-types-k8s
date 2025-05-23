// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SchemaConverter } from "./converter";
import { KubernetesDescriptor } from "./kubernetes";
import { ProviderDefinition, ResourceDefinition } from "./resources";
import { TypeBuilder } from "./typebuilder";
import { ObjectType, ObjectTypeProperty, ObjectTypePropertyFlags, ResourceType } from "bicep-types";

export class KubernetesConverter extends SchemaConverter {
    Convert(builder: TypeBuilder, provider: ProviderDefinition, fullyQualifiedType: string, definitions: ResourceDefinition[]): ResourceType | null {
        function patchObjectTypeProperty(definition: ResourceDefinition, propertyName: string, propertyType: ObjectTypeProperty): ObjectTypeProperty {
            const descriptor = definition.descriptor as KubernetesDescriptor;

            if (propertyName === "kind") {
                propertyType.type = builder.factory.addStringLiteralType(descriptor.kind);
                propertyType.flags = ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.DeployTimeConstant;
            }

            if (propertyName === "apiVersion") {
                propertyType.type = builder.factory.addStringLiteralType(gvToApiVersion(descriptor.group, descriptor.version));
                propertyType.flags = ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.DeployTimeConstant;
            }

            if (propertyName === "metadata") {
                propertyType.flags = ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier;
                const metadataObjectType = builder.factory.lookupType(propertyType.type) as ObjectType;
                metadataObjectType.properties["name"].flags = ObjectTypePropertyFlags.DeployTimeConstant | ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier;

                if (metadataObjectType.properties["namespace"] !== undefined) {
                    metadataObjectType.properties["namespace"].flags = ObjectTypePropertyFlags.DeployTimeConstant | ObjectTypePropertyFlags.Identifier;
                }

                for (const [metadataName, metadataValue] of Object.entries(metadataObjectType.properties)) {
                    if (metadataName.toLowerCase().includes("timestamp") ||
                        metadataValue.description?.toLowerCase().includes("read-only") ||
                        metadataValue.description?.toLowerCase().includes("readonly")) {
                        metadataValue.flags |= ObjectTypePropertyFlags.ReadOnly;
                    }
                }
            }

            return propertyType;
        }

        return this.process(builder, provider, fullyQualifiedType, definitions, undefined, patchObjectTypeProperty);
    }
}

function gvToApiVersion(group: string, version: string): string {
    if (group === '') {
        return version;
    } else {
        return `${group}/${version}`;
    }
}
