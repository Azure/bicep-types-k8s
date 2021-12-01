export interface SwaggerDoc {
    paths: [string: Path];
    definitions: [string: Definition];
}

export type Path = [string: Operation]

export interface Operation {
    description: string;
    consumes: string[];
    produces: string[];
}

export interface Response {
}

export interface Definition {
}