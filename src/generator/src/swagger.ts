// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { downloadFile, writeFile } from "./utils/io";
import { resolveInputPath } from "./paths";
import { Logger } from "./logging";

interface SwaggerDoc {
  paths: Record<string, Path>;
  definitions: Record<string, Definition>;
}

type Path = Record<string, Operation>;

interface Operation {
  description: string;
  consumes: string[];
  produces: string[];
  ["x-kubernetes-action"]?: string;
  ["x-kubernetes-group-version-kind"]?: {
    group: string;
    version: string;
    kind: string;
  }
}

interface Definition {
  type: string;
  properties?: Record<string, unknown>;
}

function preprocessSwagger(swaggerText: string, summaryLogger: Logger) {
  // Some descritption contains markdown code block with ``` at the end without leading new line, causing
  // the markdown to be rendered incorrectly. This is a workaround to add a new line before the code block.
  swaggerText = swaggerText.replace(/ ```/gm, "\\n\\n```");

  const swaggerDoc = JSON.parse(swaggerText) as SwaggerDoc;

  for (const pathKey in swaggerDoc.paths) {
    const path = swaggerDoc.paths[pathKey];

    const remove: string[] = [];
    for (const methodKey in path) {
      if (methodKey === 'parameters') {
        continue;
      }

      // Only keep the APIs that are for the operations we care about.
      const operation = path[methodKey];
      if (operation['x-kubernetes-action'] !== 'get' && operation['x-kubernetes-action'] !== 'put') {
        remove.push(methodKey);
        continue;
      }

      const group = operation['x-kubernetes-group-version-kind']?.group;
      const version = operation['x-kubernetes-group-version-kind']?.version;
      const kind = operation['x-kubernetes-group-version-kind']?.kind;

      const groupVersion = group ? `${group}/${version}` : version;
      summaryLogger.info(`found kubernetes resource operation ${groupVersion} ${kind}`)

      if (operation.produces !== undefined && operation.produces.length === 1 && operation.produces[0] === '*/*') {
        summaryLogger.info(`fixing-up produces for ${methodKey} ${pathKey}`);
        operation.produces = ['application/json'];
      }
    }

    for (const key of remove) {
      delete path[key];
    }
  }

  return swaggerDoc;
}

export async function prepareSwaggerFiles(tags: string[], summaryLogger: Logger) {
  for (const tag of tags) {
    summaryLogger.info(`Downloading Swagger file for Kubernetes release ${tag}...`);
    const swaggerUrl = `https://raw.githubusercontent.com/kubernetes/kubernetes/${tag}/api/openapi-spec/swagger.json`;
    const swaggerText = await downloadFile(swaggerUrl);

    summaryLogger.info("Preprocessing Swagger file...");
    const swaggerDoc = preprocessSwagger(swaggerText, summaryLogger);

    const swaggerPath = resolveInputPath(`specs/kubernetes-${tag}.json`);

    summaryLogger.info(`Writing Swagger file to ${swaggerPath}...`)
    await writeFile(swaggerPath, JSON.stringify(swaggerDoc));
  }
}
