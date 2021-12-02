// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AutoRestExtension, Host, startSession } from "@autorest/extension-base";
import { generateTypes } from "./type-generator";
import { CodeModel, codeModelSchema } from "@autorest/codemodel";
import { writeJson } from './writers/json';
import { writeMarkdown } from "./writers/markdown";
import { getProviderDefinitions as getARMDefinitions, ProviderDefinition } from "./resources";
import { getKubernetesDefinitions } from "./kubernetes"

export async function processRequest(host: Host) {
  try {
    const session = await startSession<CodeModel>(
      host,
      undefined,
      codeModelSchema
    );
    const start = Date.now();

    const kubernetes = await host.GetValue("kubernetes");

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
      host.WriteFile(`${outFolder}/types.json`, writeJson(types));

      // writer types.md
      host.WriteFile(`${outFolder}/types.md`, writeMarkdown(namespace, apiVersion, types));
    }

    session.log(`autorest.bicep took ${Date.now() - start}ms`, "");
  } catch (err) {
    console.error("An error was encountered while handling a request:", err);
    throw err;
  }
}

async function main() {
  const pluginHost = new AutoRestExtension();
  pluginHost.Add("bicep", processRequest);
  await pluginHost.Run();
}

main();
