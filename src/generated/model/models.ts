import localVarRequest from 'request';

export * from './abi';
export * from './abiType';
export * from './accountResponse';
export * from './apiKeyResponse';
export * from './assetInventory';
export * from './assetType';
export * from './authResponse';
export * from './baseDeleteEntityResponseEntityTypeCONTRACT';
export * from './baseDeleteEntityResponseEntityTypePOLICY';
export * from './baseDeleteEntityResponseEntityTypePOLICYRULE';
export * from './baseDeleteEntityResponseEntityTypeUSER';
export * from './baseEntityListResponseAccountResponse';
export * from './baseEntityListResponseContractResponse';
export * from './baseEntityListResponseLog';
export * from './baseEntityListResponseMemberResponse';
export * from './baseEntityListResponsePlayerResponse';
export * from './baseEntityListResponsePolicyResponse';
export * from './baseEntityListResponsePolicyRuleResponse';
export * from './baseEntityListResponseProjectResponse';
export * from './baseEntityListResponseSessionResponse';
export * from './baseEntityListResponseTransactionIntentResponse';
export * from './cancelTransferOwnershipRequest';
export * from './completeRecoveryRequest';
export * from './contractResponse';
export * from './createAccountRequest';
export * from './createContractRequest';
export * from './createPlayerAccountRequest';
export * from './createPlayerRequest';
export * from './createPolicyAllowFunctionRequest';
export * from './createPolicyRequest';
export * from './createPolicyRuleRequest';
export * from './createSessionPlayerRequest';
export * from './createSessionRequest';
export * from './createTransactionIntentRequest';
export * from './dataAccountTypes';
export * from './domainData';
export * from './editRoleRequest';
export * from './entityTypeACCOUNT';
export * from './entityTypeCONTRACT';
export * from './entityTypeINVENTORY';
export * from './entityTypePLAYER';
export * from './entityTypePOLICY';
export * from './entityTypePOLICYRULE';
export * from './entityTypePROJECT';
export * from './entityTypeSESSION';
export * from './entityTypeSIGNATURE';
export * from './entityTypeTRANSACTIONINTENT';
export * from './entityTypeUSER';
export * from './gasReport';
export * from './getSigninUrlResponse';
export * from './interaction';
export * from './inventoryResponse';
export * from './invitedMemberResponse';
export * from './listContractsQueries';
export * from './listPlayersQueries';
export * from './listPoliciesQueries';
export * from './listSessionsQueries';
export * from './listTransactionIntentsQueries';
export * from './log';
export * from './loginRequest';
export * from './memberRequest';
export * from './memberResponse';
export * from './nextActionPayload';
export * from './nextActionResponse';
export * from './nextActionType';
export * from './pKPolicy';
export * from './pickAccountResponseId';
export * from './pickContractResponseId';
export * from './pickPlayerResponseId';
export * from './pickPolicyResponseId';
export * from './pickPolicyRuleResponseId';
export * from './pickTransactionIntentResponseId';
export * from './playerCancelTransferOwnershipRequest';
export * from './playerRequest';
export * from './playerResponse';
export * from './playerTransferOwnershipRequest';
export * from './policyResponse';
export * from './policyResponsePolicyRulesInner';
export * from './policyResponseTransactionIntentsInner';
export * from './policyRuleResponse';
export * from './policyRuleResponseContract';
export * from './policySchema';
export * from './policyStrategy';
export * from './projectRequest';
export * from './projectResponse';
export * from './projectRole';
export * from './providerRequest';
export * from './responseResponse';
export * from './responseTypeLIST';
export * from './revokeSessionPlayerRequest';
export * from './revokeSessionRequest';
export * from './sessionResponse';
export * from './signPayloadRequest';
export * from './signPayloadResponse';
export * from './signatureRequest';
export * from './signupRequest';
export * from './sortOrder';
export * from './sponsorSchema';
export * from './startRecoveryRequest';
export * from './transactionIntentResponse';
export * from './transactionIntentResponseAccount';
export * from './transactionIntentResponsePlayer';
export * from './transactionIntentResponsePolicy';
export * from './transferOwnershipRequest';
export * from './typedDataField';
export * from './updateContractRequest';
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
import { ApiKeyResponse } from './apiKeyResponse';
import { AssetInventory } from './assetInventory';
import { AssetType } from './assetType';
import { AuthResponse } from './authResponse';
import { BaseDeleteEntityResponseEntityTypeCONTRACT } from './baseDeleteEntityResponseEntityTypeCONTRACT';
import { BaseDeleteEntityResponseEntityTypePOLICY } from './baseDeleteEntityResponseEntityTypePOLICY';
import { BaseDeleteEntityResponseEntityTypePOLICYRULE } from './baseDeleteEntityResponseEntityTypePOLICYRULE';
import { BaseDeleteEntityResponseEntityTypeUSER } from './baseDeleteEntityResponseEntityTypeUSER';
import { BaseEntityListResponseAccountResponse } from './baseEntityListResponseAccountResponse';
import { BaseEntityListResponseContractResponse } from './baseEntityListResponseContractResponse';
import { BaseEntityListResponseLog } from './baseEntityListResponseLog';
import { BaseEntityListResponseMemberResponse } from './baseEntityListResponseMemberResponse';
import { BaseEntityListResponsePlayerResponse } from './baseEntityListResponsePlayerResponse';
import { BaseEntityListResponsePolicyResponse } from './baseEntityListResponsePolicyResponse';
import { BaseEntityListResponsePolicyRuleResponse } from './baseEntityListResponsePolicyRuleResponse';
import { BaseEntityListResponseProjectResponse } from './baseEntityListResponseProjectResponse';
import { BaseEntityListResponseSessionResponse } from './baseEntityListResponseSessionResponse';
import { BaseEntityListResponseTransactionIntentResponse } from './baseEntityListResponseTransactionIntentResponse';
import { CancelTransferOwnershipRequest } from './cancelTransferOwnershipRequest';
import { CompleteRecoveryRequest } from './completeRecoveryRequest';
import { ContractResponse } from './contractResponse';
import { CreateAccountRequest } from './createAccountRequest';
import { CreateContractRequest } from './createContractRequest';
import { CreatePlayerAccountRequest } from './createPlayerAccountRequest';
import { CreatePlayerRequest } from './createPlayerRequest';
import { CreatePolicyAllowFunctionRequest } from './createPolicyAllowFunctionRequest';
import { CreatePolicyRequest } from './createPolicyRequest';
import { CreatePolicyRuleRequest } from './createPolicyRuleRequest';
import { CreateSessionPlayerRequest } from './createSessionPlayerRequest';
import { CreateSessionRequest } from './createSessionRequest';
import { CreateTransactionIntentRequest } from './createTransactionIntentRequest';
import { DataAccountTypes } from './dataAccountTypes';
import { DomainData } from './domainData';
import { EditRoleRequest } from './editRoleRequest';
import { EntityTypeACCOUNT } from './entityTypeACCOUNT';
import { EntityTypeCONTRACT } from './entityTypeCONTRACT';
import { EntityTypeINVENTORY } from './entityTypeINVENTORY';
import { EntityTypePLAYER } from './entityTypePLAYER';
import { EntityTypePOLICY } from './entityTypePOLICY';
import { EntityTypePOLICYRULE } from './entityTypePOLICYRULE';
import { EntityTypePROJECT } from './entityTypePROJECT';
import { EntityTypeSESSION } from './entityTypeSESSION';
import { EntityTypeSIGNATURE } from './entityTypeSIGNATURE';
import { EntityTypeTRANSACTIONINTENT } from './entityTypeTRANSACTIONINTENT';
import { EntityTypeUSER } from './entityTypeUSER';
import { GasReport } from './gasReport';
import { GetSigninUrlResponse } from './getSigninUrlResponse';
import { Interaction } from './interaction';
import { InventoryResponse } from './inventoryResponse';
import { InvitedMemberResponse } from './invitedMemberResponse';
import { ListContractsQueries } from './listContractsQueries';
import { ListPlayersQueries } from './listPlayersQueries';
import { ListPoliciesQueries } from './listPoliciesQueries';
import { ListSessionsQueries } from './listSessionsQueries';
import { ListTransactionIntentsQueries } from './listTransactionIntentsQueries';
import { Log } from './log';
import { LoginRequest } from './loginRequest';
import { MemberRequest } from './memberRequest';
import { MemberResponse } from './memberResponse';
import { NextActionPayload } from './nextActionPayload';
import { NextActionResponse } from './nextActionResponse';
import { NextActionType } from './nextActionType';
import { PKPolicy } from './pKPolicy';
import { PickAccountResponseId } from './pickAccountResponseId';
import { PickContractResponseId } from './pickContractResponseId';
import { PickPlayerResponseId } from './pickPlayerResponseId';
import { PickPolicyResponseId } from './pickPolicyResponseId';
import { PickPolicyRuleResponseId } from './pickPolicyRuleResponseId';
import { PickTransactionIntentResponseId } from './pickTransactionIntentResponseId';
import { PlayerCancelTransferOwnershipRequest } from './playerCancelTransferOwnershipRequest';
import { PlayerRequest } from './playerRequest';
import { PlayerResponse } from './playerResponse';
import { PlayerTransferOwnershipRequest } from './playerTransferOwnershipRequest';
import { PolicyResponse } from './policyResponse';
import { PolicyResponsePolicyRulesInner } from './policyResponsePolicyRulesInner';
import { PolicyResponseTransactionIntentsInner } from './policyResponseTransactionIntentsInner';
import { PolicyRuleResponse } from './policyRuleResponse';
import { PolicyRuleResponseContract } from './policyRuleResponseContract';
import { PolicySchema } from './policySchema';
import { PolicyStrategy } from './policyStrategy';
import { ProjectRequest } from './projectRequest';
import { ProjectResponse } from './projectResponse';
import { ProjectRole } from './projectRole';
import { ProviderRequest } from './providerRequest';
import { ResponseResponse } from './responseResponse';
import { ResponseTypeLIST } from './responseTypeLIST';
import { RevokeSessionPlayerRequest } from './revokeSessionPlayerRequest';
import { RevokeSessionRequest } from './revokeSessionRequest';
import { SessionResponse } from './sessionResponse';
import { SignPayloadRequest } from './signPayloadRequest';
import { SignPayloadResponse } from './signPayloadResponse';
import { SignatureRequest } from './signatureRequest';
import { SignupRequest } from './signupRequest';
import { SortOrder } from './sortOrder';
import { SponsorSchema } from './sponsorSchema';
import { StartRecoveryRequest } from './startRecoveryRequest';
import { TransactionIntentResponse } from './transactionIntentResponse';
import { TransactionIntentResponseAccount } from './transactionIntentResponseAccount';
import { TransactionIntentResponsePlayer } from './transactionIntentResponsePlayer';
import { TransactionIntentResponsePolicy } from './transactionIntentResponsePolicy';
import { TransferOwnershipRequest } from './transferOwnershipRequest';
import { TypedDataField } from './typedDataField';
import { UpdateContractRequest } from './updateContractRequest';
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
        "DataAccountTypes": DataAccountTypes,
        "EntityTypeACCOUNT": EntityTypeACCOUNT,
        "EntityTypeCONTRACT": EntityTypeCONTRACT,
        "EntityTypeINVENTORY": EntityTypeINVENTORY,
        "EntityTypePLAYER": EntityTypePLAYER,
        "EntityTypePOLICY": EntityTypePOLICY,
        "EntityTypePOLICYRULE": EntityTypePOLICYRULE,
        "EntityTypePROJECT": EntityTypePROJECT,
        "EntityTypeSESSION": EntityTypeSESSION,
        "EntityTypeSIGNATURE": EntityTypeSIGNATURE,
        "EntityTypeTRANSACTIONINTENT": EntityTypeTRANSACTIONINTENT,
        "EntityTypeUSER": EntityTypeUSER,
        "ListPlayersQueries.ExpandEnum": ListPlayersQueries.ExpandEnum,
        "ListPoliciesQueries.ExpandEnum": ListPoliciesQueries.ExpandEnum,
        "ListSessionsQueries.ExpandEnum": ListSessionsQueries.ExpandEnum,
        "ListTransactionIntentsQueries.ExpandEnum": ListTransactionIntentsQueries.ExpandEnum,
        "NextActionType": NextActionType,
        "PKPolicy": PKPolicy,
        "PolicySchema": PolicySchema,
        "ProjectRole": ProjectRole,
        "ResponseTypeLIST": ResponseTypeLIST,
        "SortOrder": SortOrder,
        "SponsorSchema": SponsorSchema,
}

let typeMap: {[index: string]: any} = {
    "Abi": Abi,
    "AbiType": AbiType,
    "AccountResponse": AccountResponse,
    "ApiKeyResponse": ApiKeyResponse,
    "AssetInventory": AssetInventory,
    "AuthResponse": AuthResponse,
    "BaseDeleteEntityResponseEntityTypeCONTRACT": BaseDeleteEntityResponseEntityTypeCONTRACT,
    "BaseDeleteEntityResponseEntityTypePOLICY": BaseDeleteEntityResponseEntityTypePOLICY,
    "BaseDeleteEntityResponseEntityTypePOLICYRULE": BaseDeleteEntityResponseEntityTypePOLICYRULE,
    "BaseDeleteEntityResponseEntityTypeUSER": BaseDeleteEntityResponseEntityTypeUSER,
    "BaseEntityListResponseAccountResponse": BaseEntityListResponseAccountResponse,
    "BaseEntityListResponseContractResponse": BaseEntityListResponseContractResponse,
    "BaseEntityListResponseLog": BaseEntityListResponseLog,
    "BaseEntityListResponseMemberResponse": BaseEntityListResponseMemberResponse,
    "BaseEntityListResponsePlayerResponse": BaseEntityListResponsePlayerResponse,
    "BaseEntityListResponsePolicyResponse": BaseEntityListResponsePolicyResponse,
    "BaseEntityListResponsePolicyRuleResponse": BaseEntityListResponsePolicyRuleResponse,
    "BaseEntityListResponseProjectResponse": BaseEntityListResponseProjectResponse,
    "BaseEntityListResponseSessionResponse": BaseEntityListResponseSessionResponse,
    "BaseEntityListResponseTransactionIntentResponse": BaseEntityListResponseTransactionIntentResponse,
    "CancelTransferOwnershipRequest": CancelTransferOwnershipRequest,
    "CompleteRecoveryRequest": CompleteRecoveryRequest,
    "ContractResponse": ContractResponse,
    "CreateAccountRequest": CreateAccountRequest,
    "CreateContractRequest": CreateContractRequest,
    "CreatePlayerAccountRequest": CreatePlayerAccountRequest,
    "CreatePlayerRequest": CreatePlayerRequest,
    "CreatePolicyAllowFunctionRequest": CreatePolicyAllowFunctionRequest,
    "CreatePolicyRequest": CreatePolicyRequest,
    "CreatePolicyRuleRequest": CreatePolicyRuleRequest,
    "CreateSessionPlayerRequest": CreateSessionPlayerRequest,
    "CreateSessionRequest": CreateSessionRequest,
    "CreateTransactionIntentRequest": CreateTransactionIntentRequest,
    "DomainData": DomainData,
    "EditRoleRequest": EditRoleRequest,
    "GasReport": GasReport,
    "GetSigninUrlResponse": GetSigninUrlResponse,
    "Interaction": Interaction,
    "InventoryResponse": InventoryResponse,
    "InvitedMemberResponse": InvitedMemberResponse,
    "ListContractsQueries": ListContractsQueries,
    "ListPlayersQueries": ListPlayersQueries,
    "ListPoliciesQueries": ListPoliciesQueries,
    "ListSessionsQueries": ListSessionsQueries,
    "ListTransactionIntentsQueries": ListTransactionIntentsQueries,
    "Log": Log,
    "LoginRequest": LoginRequest,
    "MemberRequest": MemberRequest,
    "MemberResponse": MemberResponse,
    "NextActionPayload": NextActionPayload,
    "NextActionResponse": NextActionResponse,
    "PickAccountResponseId": PickAccountResponseId,
    "PickContractResponseId": PickContractResponseId,
    "PickPlayerResponseId": PickPlayerResponseId,
    "PickPolicyResponseId": PickPolicyResponseId,
    "PickPolicyRuleResponseId": PickPolicyRuleResponseId,
    "PickTransactionIntentResponseId": PickTransactionIntentResponseId,
    "PlayerCancelTransferOwnershipRequest": PlayerCancelTransferOwnershipRequest,
    "PlayerRequest": PlayerRequest,
    "PlayerResponse": PlayerResponse,
    "PlayerTransferOwnershipRequest": PlayerTransferOwnershipRequest,
    "PolicyResponse": PolicyResponse,
    "PolicyResponsePolicyRulesInner": PolicyResponsePolicyRulesInner,
    "PolicyResponseTransactionIntentsInner": PolicyResponseTransactionIntentsInner,
    "PolicyRuleResponse": PolicyRuleResponse,
    "PolicyRuleResponseContract": PolicyRuleResponseContract,
    "PolicyStrategy": PolicyStrategy,
    "ProjectRequest": ProjectRequest,
    "ProjectResponse": ProjectResponse,
    "ProviderRequest": ProviderRequest,
    "ResponseResponse": ResponseResponse,
    "RevokeSessionPlayerRequest": RevokeSessionPlayerRequest,
    "RevokeSessionRequest": RevokeSessionRequest,
    "SessionResponse": SessionResponse,
    "SignPayloadRequest": SignPayloadRequest,
    "SignPayloadResponse": SignPayloadResponse,
    "SignatureRequest": SignatureRequest,
    "SignupRequest": SignupRequest,
    "StartRecoveryRequest": StartRecoveryRequest,
    "TransactionIntentResponse": TransactionIntentResponse,
    "TransactionIntentResponseAccount": TransactionIntentResponseAccount,
    "TransactionIntentResponsePlayer": TransactionIntentResponsePlayer,
    "TransactionIntentResponsePolicy": TransactionIntentResponsePolicy,
    "TransferOwnershipRequest": TransferOwnershipRequest,
    "TypedDataField": TypedDataField,
    "UpdateContractRequest": UpdateContractRequest,
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
