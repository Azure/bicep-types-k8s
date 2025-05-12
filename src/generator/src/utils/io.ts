// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { mkdir, readdir, readFile, stat, writeFile as fsWriteFile } from 'fs/promises';
import https from 'https';
import path, { dirname } from "path";

export function downloadFile(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(
          new Error(
            `Failed to download swagger file. Status code: ${res.statusCode}`
          )
        );
        return;
      }

      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
    })
      .on("error", reject);
  });
}

export function readUtf8File(path: string): Promise<string> {
  return readFile(path, { encoding: "utf-8" });
}

export async function writeFile(path: string, data: string): Promise<void> {
  await mkdir(dirname(path), { recursive: true });
  await fsWriteFile(path, data);
}


export async function findFileRecursively(basePath: string, filter: (name: string) => boolean): Promise<string[]> {
  let results: string[] = [];

  for (const subPathName of await readdir(basePath)) {
    const subPath = path.resolve(`${basePath}/${subPathName}`);

    const fileStat = await stat(subPath);
    if (fileStat.isDirectory()) {
      const pathResults = await findFileRecursively(subPath, filter);
      results = results.concat(pathResults);
      continue;
    }

    if (!fileStat.isFile()) {
      continue;
    }

    if (!filter(subPath)) {
      continue;
    }

    results.push(subPath);
  }

  return results;
}
