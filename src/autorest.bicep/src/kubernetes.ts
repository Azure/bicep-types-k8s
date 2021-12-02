// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KubernetesConverter } from './kubernetesconverter';
import { CodeModel, HttpResponse, ObjectSchema, Operation, SchemaResponse } from "@autorest/codemodel";
import { Channel, AutorestExtensionHost } from "@autorest/extension-base";
import { ProviderDefinition, ResourceDefinition, ResourceDescriptor, ScopeType } from './resources';

export interface KubernetesDescriptor extends ResourceDescriptor {
    group: string;
    version: string;
    kind: string;
    namespaced: boolean;
}

export function getKubernetesDefinitions(codeModel: CodeModel, host: AutorestExtensionHost): ProviderDefinition[] {
    function logWarning(message: string) {
        host.message({
            Channel: Channel.Warning,
            Text: message,
        })
    }

    const groups: { [gv: string]: GroupVersion } = {};

    // Ignore the groups, they aren't meaningful for this case.
    for (const operationGroup of codeModel.operationGroups) {
        for (const operation of operationGroup.operations) {
            const action = operation.extensions?.['x-kubernetes-action'];
            const gvk = operation.extensions?.['x-kubernetes-group-version-kind'] as GroupVersionKind;
            if (action && gvk) {
                let group = groups[gvKey(gvk)];
                if (!group) {
                    group = { group: gvk.group, version: gvk.version, kinds: {} };
                    groups[gvKey(gvk)] = group;
                }

                let kind = group.kinds[gvk.kind];
                if (!kind) {
                    kind = {};
                    group.kinds[gvk.kind] = kind;
                }

                if (action == 'get') {
                    kind.get = operation;
                } else if (action == 'put') {
                    kind.put = operation;
                }
            }
        }
    }

    const providers: ProviderDefinition[] = [];
    for (const groupKey in groups) {
        const group = groups[groupKey];
        const namespace = group.group === '' ? 'core' : group.group;

        const resources: { [type: string]: ResourceDefinition[] } = {};
        for (const kindKey in group.kinds) {
            const kind = group.kinds[kindKey];

            if (!kind.put) {
                continue;
            }

            const schema = resolveSchema(kind);
            if (!schema) {
                logWarning(`could not rationalize put: ${kindKey}`);
                continue;
            }

            const fullyQualifiedType = `${namespace}/${kindKey}`
            let defintions = resources[fullyQualifiedType];
            if (!defintions) {
                defintions = [];
                resources[fullyQualifiedType] = defintions;
            }

            const descriptor: KubernetesDescriptor = {
                scopeType: ScopeType.Unknown,
                namespace: namespace,
                apiVersion: group.version,
                typeSegments: [kindKey],
                group: group.group,
                version: group.version,
                kind: kindKey,
                namespaced: isNamespaced(kind),
            }
            defintions.push({
                descriptor: descriptor,
                nameParameter: undefined,
                schema: schema,
            });
        }

        const provider : ProviderDefinition = {
            kind: 'kubernetes',
            converter: new KubernetesConverter(),
            namespace: namespace,
            apiVersion: group.version,
            resourcesByType: resources,
        };
        providers.push(provider);
    }

    return providers;
}

// Like an operation, but *cool*
interface CoolOperation {
    gvk: GroupVersionKind;
    get?: Operation;
    put?: Operation;
}

interface GroupVersionKind {
    group: string;
    version: string;
    kind: string;
}

interface GroupVersion {
    group: string;
    version: string;
    kinds: {
        [kind: string]: Kind;
    }
}

interface Kind {
    get?: Operation;
    put?: Operation;
}

function gvKey(gvk: GroupVersionKind): string {
    if (gvk.group == '') {
        return `${gvk.version}`
    } else {
        return `${gvk.group}/${gvk.version}`
    }
}

function gkKey(gvk: GroupVersionKind): string {
    if (gvk.group == '') {
        return `${gvk.kind}`
    } else {
        return `${gvk.group}/${gvk.kind}`
    }
}

function resolveSchema(kind: Kind): ObjectSchema | null {
    if (!kind.get?.responses) {
        return null;
    }

    for (const response of kind.get.responses) {
        if (response.protocol.http instanceof HttpResponse && 
            response instanceof SchemaResponse && 
            response.schema instanceof ObjectSchema) {
          return response.schema;
        }
      }

    return null;
}

function isNamespaced(kind: Kind): boolean {
    if (!kind.get?.parameters) {
        return false
    }

    for (const parameter of kind.get?.parameters) {
        if (parameter.language.default.name === 'namespace') {
            return true;
        }
    }

    return false;
}