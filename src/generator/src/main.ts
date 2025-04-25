// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import yargs from "yargs";
import { LogLevel, logLevels, setupLogger } from "./logging";
import { resolveOutputPath } from "./paths";
import { buildTypeIndexes } from "./type-index";
import { getCompactTimestamp } from "./utils/datetime";
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

(async () => {
  const args = await yargs
    .strict()
    .option("log-level", { type: "string", default: "information", choices: Object.keys(logLevels) })
    .option("wait-for-debugger", { type: "boolean", default: false, desc: "Wait for a C# debugger to be attached before running the Autorest extension" })
    .parseAsync();

  const logFilePath = resolveOutputPath(`generation${getCompactTimestamp()}.log`);
  const logLevel = args["log-level"] as LogLevel;
  const waitForDebugger = args["wait-for-debugger"];

  setupLogger(logFilePath, logLevel);

  await prepareSwaggerFiles(tags);
  await generateTypes(tags, waitForDebugger);
  await buildTypeIndexes(tags);
})();
