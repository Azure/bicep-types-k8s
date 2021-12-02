# Generator

This tool runs Autorest to generate a set of Bicep types from Kubernetes.

You will need to run the `kubernetes-ingest` tool as a prerequisite before running this tool. The OpenAPI produced by Kubernetes is not compatible with Autorest by default.

## Prerequisites

Copy the pre-processed Kubernetes OpenAPI to `input/specification/kubernetes/resource-manager/kubernetes/2021-01-01-preview/kubernetes.json`.

The tools expect a path like `specification/....` and the `readme.md` that provides the autorest configuration.

## Run

Run the tool like:

```sh
npm run generate -- --specs-dir ../../input/ --out-dir ../../generated --kubernetes
```