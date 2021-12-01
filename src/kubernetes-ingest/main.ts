import { existsSync, readFileSync, rmSync, writeFileSync } from "fs";
import process from "node:process";
import { exit } from "process";
import { SwaggerDoc } from "./swagger";

if (process.argv.length != 4) {
    console.log("usage: npm run generate <input> <output>");
    exit(1);
}

const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

console.log(`reading ${inputFilePath}`);
const content = readFileSync(inputFilePath);
const text = content.toString('utf-8');
const doc = JSON.parse(text) as SwaggerDoc;

for (const pathKey in doc.paths) {
    const path = doc.paths[pathKey];

    const remove: string[] = [];
    for (const methodKey in path) {
        if (methodKey === 'parameters') {
            continue;
        }

        // Only keep the APIs that are for the operations we care about.
        const operation = path[methodKey];
        if ((operation as any)['x-kubernetes-action'] !== 'get' && (operation as any)['x-kubernetes-action'] !== 'put') {
            remove.push(methodKey);
            continue;
        }

        const group = (operation as any)['x-kubernetes-group-version-kind']?.group as string;
        const version = (operation as any)['x-kubernetes-group-version-kind']?.version as string;
        const kind = (operation as any)['x-kubernetes-group-version-kind']?.kind as string;

        const groupVersion = group ? `${group}/${version}` : version;
        console.log(`found kubernetes resource operation ${groupVersion} ${kind}`)

        if (operation.produces !== undefined && operation.produces.length === 1 && operation.produces[0] === '*/*') {
            console.log(`fixing-up produces for ${methodKey} ${pathKey}`);
            operation.produces = [ 'application/json' ];
        }
    }

    for (const key of remove) {
        delete (path as any)[key];
    }
}

console.log(`writing ${outputFilePath}`);
if (existsSync(outputFilePath)) {
    rmSync(outputFilePath);
}

writeFileSync(outputFilePath, JSON.stringify(doc));


