// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import path from "path";

export const inputDir = path.resolve("../../input");

export const outputDir = path.resolve("../../generated");

export function resolveInputPath(path: string) {
  return `${inputDir}/${path}`;
}

export function resolveOutputPath(path: string) {
  return `${outputDir}/${path}`;
}
