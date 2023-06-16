import localVarRequest from "request";

export * from "./accountResponse";
export * from "./accountsResponse";
export * from "./apiKeyResponse";
export * from "./assetInventory";
export * from "./assetType";
export * from "./contractDeleteResponse";
export * from "./contractResponse";
export * from "./contractsResponse";
export * from "./gas";
export * from "./getProjectResponse";
export * from "./interaction";
export * from "./inventoryResponse";
export * from "./log";
export * from "./playerResponse";
export * from "./playerResponseAccounts";
export * from "./playersResponse";
export * from "./policiesResponse";
export * from "./policyDeleteResponse";
export * from "./policyResponse";
export * from "./policyResponsePolicyRules";
export * from "./policyResponseTransactionIntents";
export * from "./policyRuleResponse";
export * from "./policyRulesResponse";
export * from "./policySchema";
export * from "./prismaJsonValue";
export * from "./projectLogs";
export * from "./projectResponse";
export * from "./projectResponseApikeys";
export * from "./projectsResponse";
export * from "./responseResponse";
export * from "./sessionResponse";
export * from "./sessionResponseTransactionIntents";
export * from "./sessionsResponse";
export * from "./sumGas";
export * from "./transactionIntentResponse";
export * from "./transactionIntentResponseAccount";
export * from "./transactionIntentResponsePlayer";
export * from "./transactionIntentResponsePolicy";
export * from "./transactionIntentsResponse";

import * as fs from "fs";

export interface RequestDetailedFile {
  value: Buffer;
  options?: {
    filename?: string;
    contentType?: string;
  };
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

import { AccountResponse } from "./accountResponse";
import { AccountsResponse } from "./accountsResponse";
import { ApiKeyResponse } from "./apiKeyResponse";
import { AssetInventory } from "./assetInventory";
import { AssetType } from "./assetType";
import { ContractDeleteResponse } from "./contractDeleteResponse";
import { ContractResponse } from "./contractResponse";
import { ContractsResponse } from "./contractsResponse";
import { Gas } from "./gas";
import { GetProjectResponse } from "./getProjectResponse";
import { Interaction } from "./interaction";
import { InventoryResponse } from "./inventoryResponse";
import { Log } from "./log";
import { PlayerResponse } from "./playerResponse";
import { PlayerResponseAccounts } from "./playerResponseAccounts";
import { PlayersResponse } from "./playersResponse";
import { PoliciesResponse } from "./policiesResponse";
import { PolicyDeleteResponse } from "./policyDeleteResponse";
import { PolicyResponse } from "./policyResponse";
import { PolicyResponsePolicyRules } from "./policyResponsePolicyRules";
import { PolicyResponseTransactionIntents } from "./policyResponseTransactionIntents";
import { PolicyRuleResponse } from "./policyRuleResponse";
import { PolicyRulesResponse } from "./policyRulesResponse";
import { PolicySchema } from "./policySchema";
import { PrismaJsonValue } from "./prismaJsonValue";
import { ProjectLogs } from "./projectLogs";
import { ProjectResponse } from "./projectResponse";
import { ProjectResponseApikeys } from "./projectResponseApikeys";
import { ProjectsResponse } from "./projectsResponse";
import { ResponseResponse } from "./responseResponse";
import { SessionResponse } from "./sessionResponse";
import { SessionResponseTransactionIntents } from "./sessionResponseTransactionIntents";
import { SessionsResponse } from "./sessionsResponse";
import { SumGas } from "./sumGas";
import { TransactionIntentResponse } from "./transactionIntentResponse";
import { TransactionIntentResponseAccount } from "./transactionIntentResponseAccount";
import { TransactionIntentResponsePlayer } from "./transactionIntentResponsePlayer";
import { TransactionIntentResponsePolicy } from "./transactionIntentResponsePolicy";
import { TransactionIntentsResponse } from "./transactionIntentsResponse";

/* tslint:disable:no-unused-variable */
let primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
  "any",
];

let enumsMap: { [index: string]: any } = {
  AssetType: AssetType,
  PolicySchema: PolicySchema,
};

let typeMap: { [index: string]: any } = {
  AccountResponse: AccountResponse,
  AccountsResponse: AccountsResponse,
  ApiKeyResponse: ApiKeyResponse,
  AssetInventory: AssetInventory,
  ContractDeleteResponse: ContractDeleteResponse,
  ContractResponse: ContractResponse,
  ContractsResponse: ContractsResponse,
  Gas: Gas,
  GetProjectResponse: GetProjectResponse,
  Interaction: Interaction,
  InventoryResponse: InventoryResponse,
  Log: Log,
  PlayerResponse: PlayerResponse,
  PlayerResponseAccounts: PlayerResponseAccounts,
  PlayersResponse: PlayersResponse,
  PoliciesResponse: PoliciesResponse,
  PolicyDeleteResponse: PolicyDeleteResponse,
  PolicyResponse: PolicyResponse,
  PolicyResponsePolicyRules: PolicyResponsePolicyRules,
  PolicyResponseTransactionIntents: PolicyResponseTransactionIntents,
  PolicyRuleResponse: PolicyRuleResponse,
  PolicyRulesResponse: PolicyRulesResponse,
  PrismaJsonValue: PrismaJsonValue,
  ProjectLogs: ProjectLogs,
  ProjectResponse: ProjectResponse,
  ProjectResponseApikeys: ProjectResponseApikeys,
  ProjectsResponse: ProjectsResponse,
  ResponseResponse: ResponseResponse,
  SessionResponse: SessionResponse,
  SessionResponseTransactionIntents: SessionResponseTransactionIntents,
  SessionsResponse: SessionsResponse,
  SumGas: SumGas,
  TransactionIntentResponse: TransactionIntentResponse,
  TransactionIntentResponseAccount: TransactionIntentResponseAccount,
  TransactionIntentResponsePlayer: TransactionIntentResponsePlayer,
  TransactionIntentResponsePolicy: TransactionIntentResponsePolicy,
  TransactionIntentsResponse: TransactionIntentsResponse,
};

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === "Date") {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // w/e we don't know the type
      }

      // Check the discriminator
      let discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType; // use the type given in the discriminator
          } else {
            return expectedType; // discriminator did not map to a type
          }
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string) {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.serialize(datum, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return data.toISOString();
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance: { [index: string]: any } = {};
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.baseName] = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type
        );
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string) {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.deserialize(datum, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return new Date(data);
    } else {
      if (enumsMap[type]) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type
        );
      }
      return instance;
    }
  }
}

export interface Authentication {
  /**
   * Apply authentication settings to header and query params.
   */
  applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
  public username: string = "";
  public password: string = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    requestOptions.auth = {
      username: this.username,
      password: this.password,
    };
  }
}

export class HttpBearerAuth implements Authentication {
  public accessToken: string | (() => string) = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      const accessToken =
        typeof this.accessToken === "function"
          ? this.accessToken()
          : this.accessToken;
      requestOptions.headers["Authorization"] = "Bearer " + accessToken;
    }
  }
}

export class ApiKeyAuth implements Authentication {
  public apiKey: string = "";

  constructor(private location: string, private paramName: string) {}

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (this.location == "query") {
      (<any>requestOptions.qs)[this.paramName] = this.apiKey;
    } else if (
      this.location == "header" &&
      requestOptions &&
      requestOptions.headers
    ) {
      requestOptions.headers[this.paramName] = this.apiKey;
    } else if (
      this.location == "cookie" &&
      requestOptions &&
      requestOptions.headers
    ) {
      if (requestOptions.headers["Cookie"]) {
        requestOptions.headers["Cookie"] +=
          "; " + this.paramName + "=" + encodeURIComponent(this.apiKey);
      } else {
        requestOptions.headers["Cookie"] =
          this.paramName + "=" + encodeURIComponent(this.apiKey);
      }
    }
  }
}

export class OAuth implements Authentication {
  public accessToken: string = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
    }
  }
}

export class VoidAuth implements Authentication {
  public username: string = "";
  public password: string = "";

  applyToRequest(_: localVarRequest.Options): void {
    // Do nothing
  }
}

export type Interceptor = (
  requestOptions: localVarRequest.Options
) => Promise<void> | void;
