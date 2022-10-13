// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AutorestExtensionHost } from "@autorest/extension-base";
import { TypeBase, TypeFactory, TypeReference } from "bicep-types";
import { Dictionary } from 'lodash';
import { ProviderDefinition } from "./resources";
import { TypeBuilder } from "./typebuilder";

export function generateTypes(host: AutorestExtensionHost, definition: ProviderDefinition): TypeBase[] {
  const factory = new TypeFactory();
  const namedDefinitions: Dictionary<TypeReference> = {};
  const builder = new TypeBuilder(host, factory, namedDefinitions);

  function generateTypes() {
    const converter = definition.converter;
    const resourcesByType = definition.resourcesByType;

    for (const fullyQualifiedType in resourcesByType) {
      const definitions = resourcesByType[fullyQualifiedType];
      const resourceType = converter.Convert(builder, definition, fullyQualifiedType, definitions);
      if (resourceType) {
        factory.addType(resourceType);
      }
    }

    return factory.types;
  }

  return generateTypes();
}