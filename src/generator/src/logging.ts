// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import pino from 'pino';

// Making sure we are compatible with AutoRest.
export type LogLevel = "debug" | "verbose" | "information" | "warning" | "error" | "fatal";

export const logLevels: Record<LogLevel, number> = {
  debug: 10,
  verbose: 20,
  information: 30,
  warning: 40,
  error: 50,
  fatal: 60,
}

export interface Logger {
  level: LogLevel;
  debug: (message: string) => void;
  verbose: (message: string) => void;
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
  fatal: (message: string) => void;
}

let logger: Logger;

export { logger };

export function setupLogger(logFilePath: string, logLevel: LogLevel = "information") {
  const prettyOptions = {
    colorize: false,
    ignore: 'pid,hostname,level',
    translateTime: 'yyyy-mm-dd HH:MM:ss.l',
  };

  const prettyStdout = pino.transport({
    target: 'pino-pretty',
    options: {
      ...prettyOptions,
      colorize: true,
      destination: 1, // stdout
    },
  });

  const prettyStderr = pino.transport({
    target: 'pino-pretty',
    options: {
      ...prettyOptions,
      colorize: true,
      destination: 2, // stderr
    },
  });

  const prettyFile = pino.transport({
    target: 'pino-pretty',
    options: {
      ...prettyOptions,
      destination: logFilePath,
    },
  });

  const pinoLogger = pino(
    {
      level: logLevel,
      customLevels: logLevels, useOnlyCustomLevels: true
    },
    pino.multistream([
      { level: "error", stream: prettyStderr },
      { level: "debug", stream: prettyStdout },
      { stream: prettyFile },
    ])
  );

  logger = {
    level: logLevel,
    debug: (message) => pinoLogger.debug(message),
    verbose: (message) => pinoLogger.verbose(message),
    info: (message) => pinoLogger.information(message),
    warn: (message) => pinoLogger.warning(message),
    error: (message) => pinoLogger.error(message),
    fatal: (message) => pinoLogger.fatal(message),
  };
}

