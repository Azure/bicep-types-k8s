// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import yargs from "yargs";
import { LogLevel, logLevels, createLogger } from "./logging";
import { resolveOutputPath } from "./paths";
import { buildTypeIndexes } from "./type-index";
import { prepareSwaggerFiles } from "./swagger";
import { generateTypes } from "./autorest";

// TODO:
// Currently, we're using a hard-coded list of tags.
// Once the Kubernetes types are published to MAR,
// update this script to dynamically determine which
// tags to generate types for by querying both the
// Kubernetes GitHub repo and MAR.
const tags = [
  "v1.33.0",
  "v1.32.4",
  "v1.31.8",
  "v1.30.12"
  // TODO: Add more releases.
];

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

(async () => {
  const { logLevel, waitForDebugger } = await parseArgs();
  const summaryLogger = createLogger(resolveOutputPath(`summary.log`), logLevel);

  summaryLogger.info(`Starting Kubernetes types generation for ${tags.join(", ")}...`);

  await prepareSwaggerFiles(tags, summaryLogger);
  await generateTypes(tags, waitForDebugger, summaryLogger);
  await buildTypeIndexes(tags, summaryLogger);
})();
