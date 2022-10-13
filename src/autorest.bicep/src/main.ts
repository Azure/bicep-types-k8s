// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AutoRestExtension, AutorestExtensionHost, startSession } from "@autorest/extension-base";
import { generateTypes } from "./type-generator";
import { CodeModel, codeModelSchema } from "@autorest/codemodel";
import { writeJson, writeMarkdown } from "bicep-types";
import { getProviderDefinitions as getARMDefinitions, ProviderDefinition } from "./resources";
import { getKubernetesDefinitions } from "./kubernetes"

export async function processRequest(host: AutorestExtensionHost) {
  console.error("ASDIUASDIUH");
  try {
    const session = await startSession<CodeModel>(
      host,
      undefined,
      codeModelSchema
    );
    const start = Date.now();

    const kubernetes = await host.getValue("kubernetes");

    let definitions: ProviderDefinition[] | undefined;
    if (kubernetes){
      definitions = getKubernetesDefinitions(session.model, host);
    } else {
      definitions = getARMDefinitions(session.model, host);
    }

    for (const definition of definitions) {
      const { namespace, apiVersion } = definition;
      const types = generateTypes(host, definition);

      const outFolder = `${namespace}/${apiVersion}`.toLowerCase();

      // write types.json
      host.writeFile({ filename: `${outFolder}/types.json`, content: writeJson(types) });

      // writer types.md
      host.writeFile({ filename: `${outFolder}/types.md`, content: writeMarkdown(types, `${namespace} @ ${apiVersion}`) });
    }

    session.info(`autorest.bicep took ${Date.now() - start}ms`);
  } catch (err) {
    console.error("An error was encountered while handling a request:", err);
    throw err;
  }
}

async function main() {
  const pluginHost = new AutoRestExtension();
  pluginHost.add("bicep", processRequest);
  await pluginHost.run();
}

main();
