# Kubernetes Ingest

This is a tool that can pre-process a Kubernetes OpenAPI document into a form that can be accepted by autorest. 

This tool does two primary things:

- Remove non-resource APIs: Kubernetes' swagger is **very** large and omitting the irrelevant APIs has a significant performance benefit.
- Fixup produces `*/*` to document `application/json` instead: it's not clear if this is a bug in how Kubernetes produces OpenAPI but it Autorest does not accept `*/*`.

## Running the tool

First you need a swagger document. The best way to do this is via one of the documents checked in to Kubernetes.

Here's an example URL: https://github.com/kubernetes/kubernetes/blob/v1.22.4/api/openapi-spec/swagger.json

Alternatively you can access the OpenAPI document from a *live* version of Kubernetes. 

Run:

```sh
kubectl proxy
```

Open the URL: http://127.0.0.1:8001/openapi/v2

Save this file locally because you will need it to run the tool.

## Running the tool

Run:

```sh
npm run generate <path to input swagger> <path to output swagger>
```

You should see a bunch of lines like:

```txt
found kubernetes resource networking.k8s.io/v1 IngressClass
found kubernetes resource networking.k8s.io/v1 IngressClass
found kubernetes resource networking.k8s.io/v1 Ingress
found kubernetes resource networking.k8s.io/v1 Ingress
found kubernetes resource networking.k8s.io/v1 Ingress
found kubernetes resource networking.k8s.io/v1 Ingress
```

Yes there will be duplicates, it is expected.