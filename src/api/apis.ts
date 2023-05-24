export * from "./contractsApi";
import { ContractsApi } from "./contractsApi";
export * from "./defaultApi";
import { DefaultApi } from "./defaultApi";
export * from "./logsApi";
import { LogsApi } from "./logsApi";
export * from "./playersApi";
import { PlayersApi } from "./playersApi";
export * from "./policiesApi";
import { PoliciesApi } from "./policiesApi";
export * from "./projectsApi";
import { ProjectsApi } from "./projectsApi";
export * from "./sessionsApi";
import { SessionsApi } from "./sessionsApi";
export * from "./transactionIntentsApi";
import { TransactionIntentsApi } from "./transactionIntentsApi";
import * as http from "http";

export class HttpError extends Error {
  constructor(
    public response: http.IncomingMessage,
    public body: any,
    public statusCode?: number
  ) {
    super("HTTP request failed");
    this.name = "HttpError";
  }
}

export { RequestFile } from "../model/models";

export const APIS = [
  ContractsApi,
  DefaultApi,
  LogsApi,
  PlayersApi,
  PoliciesApi,
  ProjectsApi,
  SessionsApi,
  TransactionIntentsApi,
];
