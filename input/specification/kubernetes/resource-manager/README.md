# Kubernetes

> see https://aka.ms/autorest


---

## Getting Started

To build the SDK for Kubernetes, simply [Install AutoRest](https://aka.ms/autorest/install) and in this folder, run:

> `autorest`

To see additional help and options, run:

> `autorest --help`

---

## Configuration

### Basic Information

These are the global settings for the Kubernetes API.

``` yaml
title: Kubernetes
description: Kubernetes
openapi-type: arm
```

### Tag: kubernetes-2021-01-01-preview

These settings apply only when `--tag=kubernetes-2021-01-01-preview` is specified on the command line.

```yaml $(tag) == 'kubernetes-2021-01-01-preview'
input-file:
  - kubernetes/preview/2021-01-01-preview/kubernetes.json
```