# Generator

This tool runs Autorest to generate a set of Bicep types from Kubernetes.

You will need to run the `kubernetes-ingest` tool as a prerequisite before running this tool. The OpenAPI produced by Kubernetes is not compatible with Autorest by default.

## Prerequisites

Run `npm ci` in this directory to install dependencies and build the AutoRest extension.
Both tools use the published `@azure/bicep-types` npm package; no submodule checkout or separate build of that dependency is required.

Generated resource types use the package's `readableScopes` and `writableScopes` fields.
Kubernetes resources, including the fallback resource type, remain readable and writable at all scopes.

Copy the pre-processed Kubernetes OpenAPI to `input/specification/kubernetes/resource-manager/kubernetes/2021-01-01-preview/kubernetes.json`.

The tools expect a path like `specification/....` and the `readme.md` that provides the autorest configuration.

## Run

Run the tool like:

```sh
npm run generate -- --specs-dir ../../input/ --out-dir ../../generated --kubernetes
```