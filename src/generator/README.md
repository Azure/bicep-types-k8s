#  Generator

This tool runs Autorest to generate a set of Bicep types from Kubernetes. Bicep is a domain-specific language (DSL) for deploying Azure resources declaratively.

##  Prerequisites

Before running this tool, you need to complete the following steps:

1. **Install Node.js and npm**: Ensure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).
2. **Install dependencies**: Navigate to the project directory and run the following command to install the required dependencies:
   ```sh
   npm install
   ```
3. **Run `kubernetes-ingest` tool**: This tool processes the Kubernetes OpenAPI to make it compatible with Autorest. Follow the instructions in the `kubernetes-ingest` tool's documentation to run it.
4. **Copy the pre-processed OpenAPI**: Copy the pre-processed Kubernetes OpenAPI to the following path:
   ```
   input/specification/kubernetes/resource-manager/kubernetes/2021-01-01-preview/kubernetes.json
   ```

The tools expect a path like `specification/....` and the `readme.md` that provides the autorest configuration.

##  Run

To generate the Bicep types, run the following command:

```sh
npm run generate -- --specs-dir ../../input/ --out-dir ../../generated --kubernetes
```

- `--specs-dir`: Specifies the directory containing the pre-processed OpenAPI specification.
- `--out-dir`: Specifies the output directory where the generated Bicep types will be saved.
- `--kubernetes`: Indicates that the tool should generate types for Kubernetes.

This will generate the Bicep types in the specified output directory.

##  Troubleshooting

If you encounter any issues, please check the following:

- **Prerequisites**: Ensure all prerequisites are met.
- **Paths**: Verify the paths to the OpenAPI specification and output directory are correct.
- **Logs**: Check the console output for any error messages.
- **Issues page**: Check the project's [issues page](https://github.com/Azure/bicep-types-k8s/issues) for known issues and solutions.

If you still need help, feel free to open a new issue on the [issues page](https://github.com/Azure/bicep-types-k8s/issues/new).