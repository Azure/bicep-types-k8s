// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Dictionary } from "lodash";
import { SchemaConverter } from "./converter";
import { KubernetesDescriptor } from "./kubernetes";
import { ProviderDefinition, ResourceDefinition } from "./resources";
import { TypeBuilder } from "./typebuilder";
import { BuiltInTypeKind, ObjectProperty, ObjectPropertyFlags, ObjectType, ResourceType, StringLiteralType, TypeReference } from "bicep-types";

export class KubernetesConverter extends SchemaConverter {
    Convert(builder: TypeBuilder, provider: ProviderDefinition, fullyQualifiedType: string, definitions: ResourceDefinition[]): ResourceType | null {
        function initializeResource(definition: ResourceDefinition, properties: Dictionary<ObjectProperty>) {
            const descriptor = definition.descriptor as KubernetesDescriptor;

            properties[`kind`] = builder.createObjectProperty(
                builder.factory.addStringLiteralType(descriptor.kind), 
                ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, 
                'The resource kind.');

            properties[`apiVersion`] = builder.createObjectProperty(
                builder.factory.addStringLiteralType(gvToApiVersion(descriptor.group, descriptor.version)), 
                ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant, 
                'The api version.');

            properties[`metadata`] = builder.createObjectProperty(
                createMetadata(descriptor.namespaced), 
                ObjectPropertyFlags.Required, 
                'The resource metadata.');
        }

        function createMetadata(namespaced: boolean): TypeReference {
            const properties: Dictionary<ObjectProperty> = {};

            properties[`name`] = builder.createObjectProperty(
                builder.factory.lookupBuiltInType(BuiltInTypeKind.String), 
                ObjectPropertyFlags.DeployTimeConstant | ObjectPropertyFlags.Required, 
                `The name of the resource.`);

            if (namespaced) {
                properties[`namespace`] = builder.createObjectProperty(
                    builder.factory.lookupBuiltInType(BuiltInTypeKind.String), 
                    ObjectPropertyFlags.DeployTimeConstant, 
                    `The namespace of the resource.`);
            }

            properties[`labels`] = builder.createObjectProperty(
                builder.factory.addObjectType(`labels`, {}, builder.factory.lookupBuiltInType(BuiltInTypeKind.String)),
                ObjectPropertyFlags.None,
                `The labels for the resource.`);

            properties[`annotations`] = builder.createObjectProperty(
                builder.factory.addObjectType(`annotations`, {}, builder.factory.lookupBuiltInType(BuiltInTypeKind.String)),
                ObjectPropertyFlags.None,
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