// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import path from "path";
import { buildIndex, CrossFileTypeReference, ObjectTypePropertyFlags, readTypesJson, TypeFactory, TypeFile, TypeSettings, writeIndexJson, writeIndexMarkdown, writeMarkdown, writeTypesJson } from "bicep-types";
import { resolveOutputPath } from "./paths";
import { findFileRecursively, readUtf8File, writeFile } from "./utils/io";
import { Logger } from "./logging";

const baseSettings: Omit<TypeSettings, "version"> = {
  name: "Kubernetes",
  isSingleton: true,
  isPreview: true,
}

async function buildTypeIndex(tag: string, logger: Logger) {
  logger.info(`Building type index for ${tag}...`);

  const baseDir = resolveOutputPath(tag);
  const typesPaths = await findFileRecursively(baseDir, filePath => {
    return path.basename(filePath) === 'types.json';
  });

  const typeFiles: TypeFile[] = [];
  for (const typePath of typesPaths) {
    const content = await readUtf8File(typePath);
    typeFiles.push({
      relativePath: path.relative(baseDir, typePath).replace(/\\/g, '/'),
      types: readTypesJson(content),
    });
  }

  const typeFactory = new TypeFactory();
  const configurationType = typeFactory.addObjectType("KubernetesExtensionConfig", {
    kubeconfig: {
      type: typeFactory.addStringType(/*sensitive*/ true),
      flags: ObjectTypePropertyFlags.Required,
      description: "Base64 encoded kubeconfig file content.",
    },
    namespace: {
      type: typeFactory.addStringType(),
      flags: ObjectTypePropertyFlags.None,
      description: "The namespace to use for all Kubernetes objects within the module. If not set, the namespace within the kubeconfig file will be used.",
    }
  });

  await writeFile(`${baseDir}/types.json`, writeTypesJson(typeFactory.types));
  await writeFile(`${baseDir}/types.md`, writeMarkdown(typeFactory.types));

  const settings = {
    ...baseSettings,
    version: tag.slice(1), // v1.0.0 => 1.0.0
    configurationType: new CrossFileTypeReference("type.json", configurationType.index),
  };

  const index = buildIndex(typeFiles, log => logger.info(log), settings);

  await writeFile(`${baseDir}/index.json`, writeIndexJson(index));
  await writeFile(`${baseDir}/index.md`, writeIndexMarkdown(index));
}

export async function buildTypeIndexes(tags: string[], summaryLogger: Logger) {
  summaryLogger.info(`Building type indexes...`);

  for (const tag of tags) {
    await buildTypeIndex(tag, summaryLogger);
  }
}

