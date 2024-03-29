// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SchemaConverter } from "./converter";
import { ARMConverter } from "./armconverter";
import { ChoiceSchema, CodeModel, HttpMethod, HttpParameter, HttpRequest, HttpResponse, ImplementationLocation, ObjectSchema, Operation, Parameter, ParameterLocation, Request, Response, SchemaResponse, SealedChoiceSchema, Metadata } from "@autorest/codemodel";
import { Channel, AutorestExtensionHost } from "@autorest/extension-base";
import { keys, Dictionary, values } from 'lodash';
import { success, failure, Result } from './utils';
import { ScopeType } from "bicep-types";

export interface ResourceDescriptor {
  scopeType: ScopeType;
  namespace: string;
  typeSegments: string[];
  apiVersion: string;
  constantName?: string;
}

export interface ProviderDefinition {
  kind: 'arm' | 'kubernetes';
  converter: SchemaConverter;
  namespace: string;
  apiVersion: string;
  resourcesByType: Dictionary<ResourceDefinition[]>;
}

export interface ResourceDefinition {
  descriptor: ResourceDescriptor;
  nameParameter?: Parameter | string;
  schema?: ObjectSchema;
}

const parentScopePrefix = /^.*\/providers\//ig;
const managementGroupPrefix = /^\/providers\/Microsoft.Management\/managementGroups\/{\w+}\/$/i;
const tenantPrefix = /^\/$/i;
const subscriptionPrefix = /^\/subscriptions\/{\w+}\/$/i;
const resourceGroupPrefix = /^\/subscriptions\/{\w+}\/resourceGroups\/{\w+}\/$/i;
const resourceGroupMethod = /^\/subscriptions\/{\w+}\/resourceGroups\/{\w+}$/i;

function trimScope(scope: string) {
  return scope.replace(/\/*$/, '').replace(/^\/*/, '');
}

function isPathVariable(pathSegment: string) {
  return pathSegment.startsWith('{') && pathSegment.endsWith('}');
}

function trimParamBraces(pathSegment: string) {
  return pathSegment.substr(1, pathSegment.length - 2);
}

export function getFullyQualifiedType(descriptor: ResourceDescriptor) {
  return [descriptor.namespace, ...descriptor.typeSegments].join('/');
}

export function isRootType(descriptor: ResourceDescriptor) {
  return descriptor.typeSegments.length === 1;
}

function getHttpRequests(requests: Request[] | undefined) {
  return requests?.map(x => x.protocol.http as HttpRequest).filter(x => !!x) ?? [];
}

function hasStatusCode(response: Response, statusCode: string) {
  const statusCodes = (response.protocol.http as HttpResponse)?.statusCodes;
  if (!statusCodes) {
    return;
  }

  return (statusCodes as string[]).includes(statusCode);
}

function getNormalizedMethodPath(path: string) {
  if (resourceGroupMethod.test(path)) {
    // resource groups are a special case - the swagger API is not defined as a provider API, but they are still deployable in a template as if it was.
    return "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/resourceGroups/{resourceGroupName}";
  }

  return path;
}

export function getSerializedName(metadata: Metadata) { 
  return metadata.language.default.serializedName ?? metadata.language.default.name;
}

function lastElement<T>(input?: T[]) {
  return input?.slice(-1).pop();
}

export function getNameParameter(descriptor: ResourceDescriptor, request: HttpRequest, parameters: Parameter[]): Result<Parameter | string, string> {
  const path = getNormalizedMethodPath(request.path);

  const finalProvidersMatch = lastElement(path.match(parentScopePrefix) ?? undefined);
  if (!finalProvidersMatch) {
    return failure(`Unable to locate "/providers/" segment`);
  }

  const routingScope = trimScope(path.substr(finalProvidersMatch.length));

  // get the resource name parameter, e.g. {fooName}
  let resNameParam = routingScope.substr(routingScope.lastIndexOf('/') + 1);

  if (isPathVariable(resNameParam)) {
    // strip the enclosing braces
    resNameParam = trimParamBraces(resNameParam);

    const param = parameters.filter(p => getSerializedName(p) === resNameParam)[0];
    if (!param) {
      return failure(`Unable to locate parameter with name '${resNameParam}'`);
    }

    return success(param);
  }

  if (!/^[a-zA-Z0-9]*$/.test(resNameParam)) {
    return failure(`Unable to process non-alphanumeric name '${resNameParam}'`);
  }

  return success(resNameParam);
}

export function getProviderDefinitions(codeModel: CodeModel, host: AutorestExtensionHost): ProviderDefinition[] {
  function logWarning(message: string) {
    host.Message({
      Channel: Channel.Warning,
      Text: message,
    })
  }

  function getProviderDefinitions() {
    const apiVersions = codeModel.operationGroups
      .flatMap(group => group.operations
        .flatMap(op => (op.apiVersions ?? []).map(v => v.version)))
      .filter((x, i, a) => a.indexOf(x) === i);

    return apiVersions.flatMap(v => getProviderDefinitionsForApiVersion(v));
  }

  function getProviderDefinitionsForApiVersion(apiVersion: string) {
    const providerDefinitions: Dictionary<ProviderDefinition> = {};
    const operations = codeModel.operationGroups.flatMap(x => x.operations);

    const getOperationsByPath: Dictionary<Operation> = {};
    const putOperationsByPath: Dictionary<Operation> = {};
    operations.forEach(operation => {
      const requests = getHttpRequests(operation.requests);
      const getRequest = requests.filter(r => r.method === HttpMethod.Get)[0];
      if (getRequest) {
        getOperationsByPath[getRequest.path.toLowerCase()] = operation;
      }
      const putRequest = requests.filter(r => r.method === HttpMethod.Put)[0];
      if (putRequest) {
        putOperationsByPath[putRequest.path.toLowerCase()] = operation;
      }
    });

    const resourcesByProvider: Dictionary<ResourceDefinition[]> = {};
    for (const lcPath in putOperationsByPath) {
      const putOperation = putOperationsByPath[lcPath];
      const getOperation = getOperationsByPath[lcPath];

      const putData = getPutSchema(putOperation);
      const getData = getGetSchema(getOperation) ?? putData;
      if (!putData) {
        continue;
      }

      const parseResult = parseMethod(putData.request.path, putData.parameters, apiVersion);
      if (!parseResult.success) {
        logWarning(`Skipping path '${putData.request.path}': ${parseResult.error}`);
        continue;
      }

      for (const descriptor of parseResult.value) {
        const namespace = descriptor.namespace.toLowerCase();

        if (!providerDefinitions[namespace]) {
          providerDefinitions[namespace] = {
            kind: 'arm',
            converter: new ARMConverter(),
            namespace: descriptor.namespace,
            apiVersion,
            resourcesByType: {},
          };
        }

        const nameParameterResult = getNameParameter(descriptor, putData.request, putData.parameters);
        if (!nameParameterResult.success) {
          logWarning(`Skipping path '${putData.request.path}': ${nameParameterResult.error}`);
          continue;
        }

        const resource: ResourceDefinition = {
          descriptor,
          nameParameter: nameParameterResult.value,
          schema: putData.schema ?? getData?.schema
        };

        resourcesByProvider[namespace] = [
          ...(resourcesByProvider[namespace] || []),
          resource
        ];
      }
    }

    for (const namespace of keys(providerDefinitions)) {
      providerDefinitions[namespace].resourcesByType = collapseDefinitions(resourcesByProvider[namespace]);
    }

    return values(providerDefinitions);
  }

  function getGetSchema(operation?: Operation) {
    const responses = operation?.responses ?? [];
    const validResponses = [
      // order 200 responses before default
      ...responses.filter(r => hasStatusCode(r, "200")),
      ...responses.filter(r => hasStatusCode(r, "default")),
    ];

    if (!operation || validResponses.length === 0) {
      return;
    }

    for (const response of validResponses) {
      if (response.protocol.http instanceof HttpResponse && response instanceof SchemaResponse && response.schema instanceof ObjectSchema) {
        return {
          response: response.protocol.http,
          schema: response.schema,
        };
      }
    }

    return {
      response: (validResponses[0].protocol.http as HttpResponse),
    };
  }

  function combineParameters(operation: Operation, request: Request) {
    return [...(operation.parameters || []), ...(request.parameters || [])];
  }

  function getPutSchema(operation?: Operation) {
    const requests = operation?.requests ?? [];
    const validRequests = requests.filter(r => (r.protocol.http as HttpRequest)?.method === HttpMethod.Put);

    if (!operation || validRequests.length === 0) {
      return;
    }

    for (const request of validRequests) {
      const parameters = combineParameters(operation, request);
      const bodyParameter = parameters.filter(p => (p.protocol.http as HttpParameter)?.in === ParameterLocation.Body)[0];

      if (request.protocol.http instanceof HttpRequest && bodyParameter instanceof Parameter && bodyParameter.schema instanceof ObjectSchema) {
        return {
          request: request.protocol.http,
          parameters,
          schema: bodyParameter.schema,
        };
      }
    }

    return {
      request: (validRequests[0].protocol.http as HttpRequest),
      parameters: combineParameters(operation, validRequests[0]),
    };
  }

  function parseMethod(path: string, parameters: Parameter[], apiVersion: string): Result<ResourceDescriptor[], string> {
    path = getNormalizedMethodPath(path);

    const finalProvidersMatch = lastElement(path.match(parentScopePrefix) ?? undefined);
    if (!finalProvidersMatch) {
      return failure(`Unable to locate "/providers/" segment`);
    }

    const parentScope = path.substr(0, finalProvidersMatch.length - "providers/".length);
    const routingScope = trimScope(path.substr(finalProvidersMatch.length));

    const namespace = routingScope.substr(0, routingScope.indexOf('/'));
    if (isPathVariable(namespace)) {
      return failure(`Unable to process parameterized provider namespace "${namespace}"`);
    }

    const parseResult = parseResourceTypes(parameters, routingScope);
    if (!parseResult.success) {
      return parseResult;
    }

    const resNameParam = routingScope.substr(routingScope.lastIndexOf('/') + 1);
    const constantName = isPathVariable(resNameParam) ? undefined : resNameParam;

    const scopeType = getScopeTypeFromParentScope(parentScope);

    const descriptors: ResourceDescriptor[] = parseResult.value.map(type => ({
      scopeType,
      namespace,
      typeSegments: type,
      apiVersion,
      constantName,
    }));

    return success(descriptors);
  }

  function parseResourceTypes(parameters: Parameter[], routingScope: string): Result<string[][], string> {
    const typeSegments = routingScope.split('/').slice(1).filter((_, i) => i % 2 === 0);
    const nameSegments = routingScope.split('/').slice(1).filter((_, i) => i % 2 === 1);

    if (typeSegments.length === 0) {
      return failure(`Unable to find type segments`);
    }

    if (typeSegments.length !== nameSegments.length) {
      return failure(`Found mismatch between type segments (${typeSegments.length}) and name segments (${nameSegments.length})`);
    }

    let resourceTypes: string[][] = [[]];
    for (const typeSegment of typeSegments) {
      if (isPathVariable(typeSegment)) {
        const parameterName = trimParamBraces(typeSegment);
        const parameter = parameters.filter(p =>
          p.implementation === ImplementationLocation.Method &&
          getSerializedName(p) === parameterName)[0];

        if (!parameter) {
          return failure(`Found undefined parameter reference ${typeSegment}`);
        }

        const choiceSchema = parameter.schema;
        if (!(choiceSchema instanceof ChoiceSchema || choiceSchema instanceof SealedChoiceSchema)) {
          return failure(`Parameter reference ${typeSegment} is not defined as an enum`);
        }        

        if (choiceSchema.choices.length === 0) {
          return failure(`Parameter reference ${typeSegment} is defined as an enum, but doesn't have any specified values`);
        }

        resourceTypes = resourceTypes.flatMap(type => choiceSchema.choices.map(v => [...type, v.value.toString()]));
      } else {
        resourceTypes = resourceTypes.map(type => [...type, typeSegment]);
      }
    }

    return success(resourceTypes);
  }

  function getScopeTypeFromParentScope(parentScope: string) {
    if (tenantPrefix.test(parentScope)) {
      return ScopeType.Tenant;
    }

    if (managementGroupPrefix.test(parentScope)) {
      return ScopeType.ManagementGroup;
    }

    if (resourceGroupPrefix.test(parentScope)) {
      return ScopeType.ResourceGroup;
    }

    if (subscriptionPrefix.test(parentScope)) {
      return ScopeType.Subscription;
    }

    if (parentScopePrefix.test(parentScope)) {
      return ScopeType.Extension;
    }

    // ambiguous - without any further information, we have to assume 'all'
    return ScopeType.Unknown;
  }

  function mergeScopes(scopeA: ScopeType, scopeB: ScopeType) {
    // We have to assume any (unknown) scope if either scope is unknown
    // Bitwise OR will not handle this case correctly as 'unknown' is 0.
    if (scopeA == ScopeType.Unknown || scopeB == ScopeType.Unknown) {
      return ScopeType.Unknown;
    }

    return scopeA | scopeB;
  }

  function collapseDefinitionScopes(resources: ResourceDefinition[]) {
    const definitionsByName: Dictionary<ResourceDefinition> = {};
    for (const resource of resources) {
      const name = resource.descriptor.constantName ?? '';
      if (definitionsByName[name]) {
        const curDescriptor = definitionsByName[name].descriptor;
        const newDescriptor = resource.descriptor;

        definitionsByName[name] = {
          ...definitionsByName[name],
          descriptor: {
            ...curDescriptor,
            scopeType: mergeScopes(curDescriptor.scopeType, newDescriptor.scopeType),
          },
        };
      } else {
        definitionsByName[name] = resource;
      }
    }

    return Object.values(definitionsByName);
  }

  function groupByType(resources: ResourceDefinition[]) {
    return resources.reduce((prev, cur) => {
      const key = getFullyQualifiedType(cur.descriptor).toLowerCase();
      prev[key] = [...(prev[key] ?? []), cur];

      return prev;
    }, {} as Dictionary<ResourceDefinition[]>);
  }

  function collapseDefinitions(resources: ResourceDefinition[]) {
    const resourcesByType = groupByType(resources);
    const collapsedResources = Object.values(resourcesByType).flatMap(collapseDefinitionScopes);

    return groupByType(collapsedResources);
  }

  return getProviderDefinitions();
}