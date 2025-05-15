// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import yargs from "yargs";
import { LogLevel, logLevels, createLogger } from "./logging";
import { resolveInputPath, resolveOutputPath } from "./paths";
import { buildTypeIndexes } from "./type-index";
import { prepareSwaggerFiles } from "./swagger";
import { generateTypes } from "./autorest";
import { readUtf8File } from "./utils/io";

async function parseArgs() : Promise<{ logLevel: LogLevel, waitForDebugger: boolean }> {
  const args = await yargs
    .strict()
    .option("log-level", { type: "string", default: "information", choices: Object.keys(logLevels) })
    .option("wait-for-debugger", { type: "boolean", default: false, desc: "Wait for a C# debugger to be attached before running the Autorest extension" })
    .parseAsync();

  const logLevel = args["log-level"] as LogLevel;
  const waitForDebugger = args["wait-for-debugger"];

  return { logLevel, waitForDebugger };
}

async function getTagsToGenerate() {
  const tagsFilePath = resolveInputPath("tags.txt");
  const tagsFileContent = await readUtf8File(tagsFilePath);

  return tagsFileContent.split(/\r?\n/);
}

(async () => {
  const { logLevel, waitForDebugger } = await parseArgs();
  const summaryLogger = createLogger(resolveOutputPath(`summary.log`), logLevel);

  const tags = await getTagsToGenerate();
  summaryLogger.info(`Starting Kubernetes types generation for ${tags.join(", ")}...`);

  await prepareSwaggerFiles(tags, summaryLogger);
  await generateTypes(tags, waitForDebugger, summaryLogger);
  await buildTypeIndexes(tags, summaryLogger);
})();
