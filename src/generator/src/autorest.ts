// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import path from "path";
import os from "os";
import yaml from "js-yaml";
import { spawn } from "child_process";
import { resolveInputPath, resolveOutputPath } from "./paths";
import { writeFile } from "./utils/io";
import { rm } from "fs/promises";
import { createLogger, Logger } from "./logging";

const rootDir = `${__dirname}/../../../`;
const extensionDir = path.resolve(`${rootDir}/src/autorest.bicep/`);
const readmePath = resolveInputPath("readme.md");
const autorestBinary = os.platform() === 'win32' ? 'autorest.cmd' : 'autorest';

export async function generateTypes(tags: string[], waitForDebugger: boolean, summaryLogger: Logger) {
  summaryLogger.info("Clearing output directories...");
  const outputDirs = await clearOutputDirs(tags);

  summaryLogger.info("Generating AutoRest README configuration...");
  await generateAutoRestReadme(tags, outputDirs);

  const autorestLogger = createLogger(resolveOutputPath(`autorest.log`), summaryLogger.level);
  const commonArgs = waitForDebugger ? ['--bicep.debugger', `--level=${autorestLogger.level}`] : [`--level=${autorestLogger.level}`];
  let autoRestArgs = [
      ...commonArgs,
      `--use=@autorest/modelerfour`,
      `--use=${extensionDir}`,
      '--bicep',
      `--level=${autorestLogger.level}`,
      `--multiapi`,
      '--title=none',
      // This is necessary to avoid failures such as "ERROR: Semantic violation: Discriminator must be a required property." blocking type generation.
      // In an ideal world, we'd raise issues in https://github.com/Azure/azure-rest-api-specs and force RP teams to fix them, but this isn't very practical
      // as new validations are added continuously, and there's often quite a lag before teams will fix them - we don't want to be blocked by this in generating types.
      `--skip-semantics-validation`,
      readmePath,
    ];

  summaryLogger.info(`Invoking AutoRest with ${autoRestArgs.join(' ')}`);
  await invokeAutoRest(autoRestArgs, autorestLogger);

  summaryLogger.info(`Invoking AutoRest with ${autoRestArgs.join(' ')}`);
  autoRestArgs = [...commonArgs, '--clear-temp', '--allow-no-input'];
  return await invokeAutoRest(autoRestArgs, autorestLogger);
}

export async function generateAutoRestReadme(tags: string[], outputDirs: string[]) {
  let readmeText = `##Bicep

### Bicep multi-api
\`\`\`yaml $(bicep) && $(multiapi)
${yaml.dump({ 'batch': tags.map(tag => ({ 'tag': tag })) }, { lineWidth: 1000 })}\`\`\`
`;

  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    const outputDir = outputDirs[i];

    readmeText += `### Tag: ${tag} and bicep
\`\`\`yaml $(tag) == '${tag}' && $(bicep)
${yaml.dump({
      'input-file': `specs/kubernetes-${tag}.json`,
      'output-folder': outputDir,
    }, { lineWidth: 1000 })}\`\`\`
`;
  }

  await writeFile(readmePath, readmeText);
}

async function clearOutputDirs(tags: string[]) {
  const outputDirs = tags.map(resolveOutputPath);

  for (const outputDir of outputDirs) {
    await rm(outputDir, { recursive: true, force: true });
  }

  return outputDirs;
}

function invokeAutoRest(args: string[], autoRestLogger: Logger) : Promise<void> {
  return new Promise((resolve, reject) => {

    const child = spawn(autorestBinary, args, {
      cwd: __dirname,
      windowsHide: true,
      shell: true,
    });

    child.stdout.on('data', data => autoRestLogger.info(data.toString()));
    child.stderr.on('data', data => {
      const message = data.toString();
      autoRestLogger.error(message);
      if (message.indexOf('FATAL ERROR') > -1 && message.indexOf('Allocation failed - JavaScript heap out of memory') > -1) {
        reject('Child process has run out of memory');
      }
    });

    child.on('error', err => {
      reject(err);
    });
    child.on('exit', code => {
      if (code !== 0) {
        reject(`Exited with code ${code}`);
      } else {
        resolve();
      }
    });
  });
}
