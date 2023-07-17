import localVarRequest from 'request';

export * from './abi';
export * from './abiType';
export * from './accountResponse';
export * from './accountsResponse';
export * from './apiKeyResponse';
export * from './assetInventory';
export * from './assetType';
export * from './contractDeleteResponse';
export * from './contractResponse';
export * from './contractsResponse';
export * from './createAccountRequest';
export * from './createContractRequest';
export * from './createPlayerAccountRequest';
export * from './createPlayerRequest';
export * from './createPolicyAllowFunctionRequest';
export * from './createPolicyRequest';
export * from './createPolicyRuleRequest';
export * from './createSessionPlayerRequest';
export * from './createSessionRequest';
export * from './domainData';
export * from './gas';
export * from './interaction';
export * from './inventoryResponse';
export * from './log';
export * from './nextActionPayload';
export * from './nextActionResponse';
export * from './nextActionType';
export * from './pKLocation';
export * from './pKPolicy';
export * from './pickAccountResponseId';
export * from './pickPlayerResponseId';
export * from './pickPolicyResponseId';
export * from './pickPolicyRuleResponseId';
export * from './pickTransactionIntentResponseId';
export * from './playerRequest';
export * from './playerResponse';
export * from './playerTransferOwnershipRequest';
export * from './playersResponse';
export * from './policiesResponse';
export * from './policyDeleteResponse';
export * from './policyResponse';
export * from './policyResponsePolicyRulesInner';
export * from './policyResponseTransactionIntentsInner';
export * from './policyRuleDeleteResponse';
export * from './policyRuleResponse';
export * from './policyRuleResponseContract';
export * from './policyRulesResponse';
export * from './policySchema';
export * from './policyStrategy';
export * from './projectLogs';
export * from './projectRequest';
export * from './projectResponse';
export * from './projectsResponse';
export * from './responseResponse';
export * from './revokeSessionPlayerRequest';
export * from './revokeSessionRequest';
export * from './sessionResponse';
export * from './sessionsResponse';
export * from './signPayloadRequest';
export * from './signPayloadResponse';
export * from './signatureRequest';
export * from './sortOrder';
export * from './sponsorSchema';
export * from './sumGas';
export * from './transactionIntentRequest';
export * from './transactionIntentResponse';
export * from './transactionIntentResponseAccount';
export * from './transactionIntentResponsePlayer';
export * from './transactionIntentResponsePolicy';
export * from './transactionIntentsResponse';
export * from './transferOwnershipRequest';
export * from './typedDataField';
export * from './updatePolicyRequest';
export * from './updatePolicyRuleRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Abi } from './abi';
import { AbiType } from './abiType';
import { AccountResponse } from './accountResponse';
import { AccountsResponse } from './accountsResponse';
import { ApiKeyResponse } from './apiKeyResponse';
import { AssetInventory } from './assetInventory';
import { AssetType } from './assetType';
import { ContractDeleteResponse } from './contractDeleteResponse';
import { ContractResponse } from './contractResponse';
import { ContractsResponse } from './contractsResponse';
import { CreateAccountRequest } from './createAccountRequest';
import { CreateContractRequest } from './createContractRequest';
import { CreatePlayerAccountRequest } from './createPlayerAccountRequest';
import { CreatePlayerRequest } from './createPlayerRequest';
import { CreatePolicyAllowFunctionRequest } from './createPolicyAllowFunctionRequest';
import { CreatePolicyRequest } from './createPolicyRequest';
import { CreatePolicyRuleRequest } from './createPolicyRuleRequest';
import { CreateSessionPlayerRequest } from './createSessionPlayerRequest';
import { CreateSessionRequest } from './createSessionRequest';
import { DomainData } from './domainData';
import { Gas } from './gas';
import { Interaction } from './interaction';
import { InventoryResponse } from './inventoryResponse';
import { Log } from './log';
import { NextActionPayload } from './nextActionPayload';
import { NextActionResponse } from './nextActionResponse';
import { NextActionType } from './nextActionType';
import { PKLocation } from './pKLocation';
import { PKPolicy } from './pKPolicy';
import { PickAccountResponseId } from './pickAccountResponseId';
import { PickPlayerResponseId } from './pickPlayerResponseId';
import { PickPolicyResponseId } from './pickPolicyResponseId';
import { PickPolicyRuleResponseId } from './pickPolicyRuleResponseId';
import { PickTransactionIntentResponseId } from './pickTransactionIntentResponseId';
import { PlayerRequest } from './playerRequest';
import { PlayerResponse } from './playerResponse';
import { PlayerTransferOwnershipRequest } from './playerTransferOwnershipRequest';
import { PlayersResponse } from './playersResponse';
import { PoliciesResponse } from './policiesResponse';
import { PolicyDeleteResponse } from './policyDeleteResponse';
import { PolicyResponse } from './policyResponse';
import { PolicyResponsePolicyRulesInner } from './policyResponsePolicyRulesInner';
import { PolicyResponseTransactionIntentsInner } from './policyResponseTransactionIntentsInner';
import { PolicyRuleDeleteResponse } from './policyRuleDeleteResponse';
import { PolicyRuleResponse } from './policyRuleResponse';
import { PolicyRuleResponseContract } from './policyRuleResponseContract';
import { PolicyRulesResponse } from './policyRulesResponse';
import { PolicySchema } from './policySchema';
import { PolicyStrategy } from './policyStrategy';
import { ProjectLogs } from './projectLogs';
import { ProjectRequest } from './projectRequest';
import { ProjectResponse } from './projectResponse';
import { ProjectsResponse } from './projectsResponse';
import { ResponseResponse } from './responseResponse';
import { RevokeSessionPlayerRequest } from './revokeSessionPlayerRequest';
import { RevokeSessionRequest } from './revokeSessionRequest';
import { SessionResponse } from './sessionResponse';
import { SessionsResponse } from './sessionsResponse';
import { SignPayloadRequest } from './signPayloadRequest';
import { SignPayloadResponse } from './signPayloadResponse';
import { SignatureRequest } from './signatureRequest';
import { SortOrder } from './sortOrder';
import { SponsorSchema } from './sponsorSchema';
import { SumGas } from './sumGas';
import { TransactionIntentRequest } from './transactionIntentRequest';
import { TransactionIntentResponse } from './transactionIntentResponse';
import { TransactionIntentResponseAccount } from './transactionIntentResponseAccount';
import { TransactionIntentResponsePlayer } from './transactionIntentResponsePlayer';
import { TransactionIntentResponsePolicy } from './transactionIntentResponsePolicy';
import { TransactionIntentsResponse } from './transactionIntentsResponse';
import { TransferOwnershipRequest } from './transferOwnershipRequest';
import { TypedDataField } from './typedDataField';
import { UpdatePolicyRequest } from './updatePolicyRequest';
import { UpdatePolicyRuleRequest } from './updatePolicyRuleRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AssetType": AssetType,
        "NextActionType": NextActionType,
        "PKLocation": PKLocation,
        "PKPolicy": PKPolicy,
        "PolicySchema": PolicySchema,
        "SortOrder": SortOrder,
        "SponsorSchema": SponsorSchema,
}

let typeMap: {[index: string]: any} = {
    "Abi": Abi,
    "AbiType": AbiType,
    "AccountResponse": AccountResponse,
    "AccountsResponse": AccountsResponse,
    "ApiKeyResponse": ApiKeyResponse,
    "AssetInventory": AssetInventory,
    "ContractDeleteResponse": ContractDeleteResponse,
    "ContractResponse": ContractResponse,
    "ContractsResponse": ContractsResponse,
    "CreateAccountRequest": CreateAccountRequest,
    "CreateContractRequest": CreateContractRequest,
    "CreatePlayerAccountRequest": CreatePlayerAccountRequest,
    "CreatePlayerRequest": CreatePlayerRequest,
    "CreatePolicyAllowFunctionRequest": CreatePolicyAllowFunctionRequest,
    "CreatePolicyRequest": CreatePolicyRequest,
    "CreatePolicyRuleRequest": CreatePolicyRuleRequest,
    "CreateSessionPlayerRequest": CreateSessionPlayerRequest,
    "CreateSessionRequest": CreateSessionRequest,
    "DomainData": DomainData,
    "Gas": Gas,
    "Interaction": Interaction,
    "InventoryResponse": InventoryResponse,
    "Log": Log,
    "NextActionPayload": NextActionPayload,
    "NextActionResponse": NextActionResponse,
    "PickAccountResponseId": PickAccountResponseId,
    "PickPlayerResponseId": PickPlayerResponseId,
    "PickPolicyResponseId": PickPolicyResponseId,
    "PickPolicyRuleResponseId": PickPolicyRuleResponseId,
    "PickTransactionIntentResponseId": PickTransactionIntentResponseId,
    "PlayerRequest": PlayerRequest,
    "PlayerResponse": PlayerResponse,
    "PlayerTransferOwnershipRequest": PlayerTransferOwnershipRequest,
    "PlayersResponse": PlayersResponse,
    "PoliciesResponse": PoliciesResponse,
    "PolicyDeleteResponse": PolicyDeleteResponse,
    "PolicyResponse": PolicyResponse,
    "PolicyResponsePolicyRulesInner": PolicyResponsePolicyRulesInner,
    "PolicyResponseTransactionIntentsInner": PolicyResponseTransactionIntentsInner,
    "PolicyRuleDeleteResponse": PolicyRuleDeleteResponse,
    "PolicyRuleResponse": PolicyRuleResponse,
    "PolicyRuleResponseContract": PolicyRuleResponseContract,
    "PolicyRulesResponse": PolicyRulesResponse,
    "PolicyStrategy": PolicyStrategy,
    "ProjectLogs": ProjectLogs,
    "ProjectRequest": ProjectRequest,
    "ProjectResponse": ProjectResponse,
    "ProjectsResponse": ProjectsResponse,
    "ResponseResponse": ResponseResponse,
    "RevokeSessionPlayerRequest": RevokeSessionPlayerRequest,
    "RevokeSessionRequest": RevokeSessionRequest,
    "SessionResponse": SessionResponse,
    "SessionsResponse": SessionsResponse,
    "SignPayloadRequest": SignPayloadRequest,
    "SignPayloadResponse": SignPayloadResponse,
    "SignatureRequest": SignatureRequest,
    "SumGas": SumGas,
    "TransactionIntentRequest": TransactionIntentRequest,
    "TransactionIntentResponse": TransactionIntentResponse,
    "TransactionIntentResponseAccount": TransactionIntentResponseAccount,
    "TransactionIntentResponsePlayer": TransactionIntentResponsePlayer,
    "TransactionIntentResponsePolicy": TransactionIntentResponsePolicy,
    "TransactionIntentsResponse": TransactionIntentsResponse,
    "TransferOwnershipRequest": TransferOwnershipRequest,
    "TypedDataField": TypedDataField,
    "UpdatePolicyRequest": UpdatePolicyRequest,
    "UpdatePolicyRuleRequest": UpdatePolicyRuleRequest,
}

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
                    if(typeMap[discriminatorType]){
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
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
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
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
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
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
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
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
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
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
