// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import path from "path";
import os from "os";
import yaml from "js-yaml";
import { logger } from "./logging";
import { spawn } from "child_process";
import { resolveInputPath, resolveOutputPath } from "./paths";
import { writeFile } from "./utils/io";
import { rm } from "fs/promises";

const rootDir = `${__dirname}/../../../`;
const extensionDir = path.resolve(`${rootDir}/src/autorest.bicep/`);
const readmePath = resolveInputPath("readme.md");
const autorestBinary = os.platform() === 'win32' ? 'autorest.cmd' : 'autorest';

export async function generateTypes(tags: string[], waitForDebugger: boolean) {
  const outputDirs = await clearOutputDirs(tags);
  await generateAutoRestReadme(tags, outputDirs);

  let autoRestParams = [
    `--use=@autorest/modelerfour`,
    `--use=${extensionDir}`,
    '--bicep',
    `--level=${logger.level}`,
    `--multiapi`,
    '--title=none',
    // This is necessary to avoid failures such as "ERROR: Semantic violation: Discriminator must be a required property." blocking type generation.
    // In an ideal world, we'd raise issues in https://github.com/Azure/azure-rest-api-specs and force RP teams to fix them, but this isn't very practical
    // as new validations are added continuously, and there's often quite a lag before teams will fix them - we don't want to be blocked by this in generating types.
    `--skip-semantics-validation`,
    readmePath,
  ];

  autoRestParams = applyCommonAutoRestParameters(autoRestParams, waitForDebugger);

  await invokeAutoRest(autoRestParams);
  await clearAutorestTempDir(waitForDebugger);
}

export async function generateAutoRestReadme(tags: string[], outputDirs: string[]) {
  logger.info("Generating AutoRest README configuration...");

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
  logger.info("Clearing output directories...");

  const outputDirs = tags.map(resolveOutputPath);

  for (const outputDir of outputDirs) {
    await rm(outputDir, { recursive: true, force: true });
  }

  return outputDirs;
}

async function clearAutorestTempDir(waitForDebugger: boolean) {
  const autoRestParams = applyCommonAutoRestParameters(['--clear-temp', '--allow-no-input'], waitForDebugger);

  return await invokeAutoRest(autoRestParams);
}

function applyCommonAutoRestParameters(autoRestParams: string[], waitForDebugger: boolean) {
  autoRestParams = autoRestParams.concat([`--level=${logger.level}`])

  if (waitForDebugger) {
    autoRestParams = autoRestParams.concat([
      `--bicep.debugger`,
    ]);
  }

  return autoRestParams;
}

function invokeAutoRest(args: string[]) : Promise<void> {
  return new Promise((resolve, reject) => {
    logger.debug(`Invoking AutoRest with ${args.join(' ')}`);

    const child = spawn(autorestBinary, args, {
      cwd: __dirname,
      windowsHide: true,
      shell: true,
    });

    child.stdout.on('data', data => logger.info(data.toString()));
    child.stderr.on('data', data => {
      const message = data.toString();
      logger.error(message);
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
