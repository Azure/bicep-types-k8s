// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Dictionary } from "lodash";
import { SchemaConverter } from "./converter";
import { KubernetesDescriptor } from "./kubernetes";
import { ProviderDefinition, ResourceDefinition } from "./resources";
import { TypeBuilder } from "./typebuilder";
import { BuiltInTypeKind, ObjectTypeProperty, ObjectTypePropertyFlags, ResourceType, TypeReference } from "bicep-types";

export class KubernetesConverter extends SchemaConverter {
    Convert(builder: TypeBuilder, provider: ProviderDefinition, fullyQualifiedType: string, definitions: ResourceDefinition[]): ResourceType | null {
        function initializeResource(definition: ResourceDefinition, properties: Dictionary<ObjectTypeProperty>) {
            const descriptor = definition.descriptor as KubernetesDescriptor;

            properties[`kind`] = builder.createObjectTypeProperty(
                builder.factory.addStringLiteralType(descriptor.kind), 
                ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.DeployTimeConstant, 
                'The resource kind.');

            properties[`apiVersion`] = builder.createObjectTypeProperty(
                builder.factory.addStringLiteralType(gvToApiVersion(descriptor.group, descriptor.version)), 
                ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.DeployTimeConstant, 
                'The api version.');

            properties[`metadata`] = builder.createObjectTypeProperty(
                createMetadata(descriptor.namespaced), 
                ObjectTypePropertyFlags.Required, 
                'The resource metadata.');
        }

        function createMetadata(namespaced: boolean): TypeReference {
            const properties: Dictionary<ObjectTypeProperty> = {};

            properties[`name`] = builder.createObjectTypeProperty(
                builder.factory.lookupBuiltInType(BuiltInTypeKind.String), 
                ObjectTypePropertyFlags.DeployTimeConstant | ObjectTypePropertyFlags.Required, 
                `The name of the resource.`);

            if (namespaced) {
                properties[`namespace`] = builder.createObjectTypeProperty(
                    builder.factory.lookupBuiltInType(BuiltInTypeKind.String), 
                    ObjectTypePropertyFlags.DeployTimeConstant, 
                    `The namespace of the resource.`);
            }

            properties[`labels`] = builder.createObjectTypeProperty(
                builder.factory.addObjectType(`labels`, {}, builder.factory.lookupBuiltInType(BuiltInTypeKind.String)),
                ObjectTypePropertyFlags.None,
                `The labels for the resource.`);

            properties[`annotations`] = builder.createObjectTypeProperty(
                builder.factory.addObjectType(`annotations`, {}, builder.factory.lookupBuiltInType(BuiltInTypeKind.String)),
                ObjectTypePropertyFlags.None,
                `The annotations for the resource.`);

            return builder.factory.addObjectType(`metadata`, properties, undefined);
        }

        return this.process(builder, provider, fullyQualifiedType, definitions, initializeResource);
    }
}

function gvToApiVersion(group: string, version: string): string {
    if (group === '') {
        return version;
    } else {
        return `${group}/${version}`;
    }
}