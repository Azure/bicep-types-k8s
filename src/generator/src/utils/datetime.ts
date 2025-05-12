// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
export function getCompactTimestamp() {
  const now = new Date();
  const pad = (x: number) => x.toString().padStart(2, '0');

  return (
    now.getFullYear().toString() +
    pad(now.getMonth() + 1) +
    pad(now.getDate())
  );
}
