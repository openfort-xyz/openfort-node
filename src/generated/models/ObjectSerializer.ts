export * from '../models/Abi';
export * from '../models/AbiType';
export * from '../models/AccountInventoryListQueries';
export * from '../models/AccountListQueries';
export * from '../models/AccountListResponse';
export * from '../models/AccountPolicyRuleResponse';
export * from '../models/AccountResponse';
export * from '../models/ApiKeyResponse';
export * from '../models/AssetInventory';
export * from '../models/AssetType';
export * from '../models/AuthPlayerListQueries';
export * from '../models/AuthPlayerListResponse';
export * from '../models/AuthPlayerResponse';
export * from '../models/AuthResponse';
export * from '../models/CancelTransferOwnershipRequest';
export * from '../models/ChargeCustomTokenPolicyStrategy';
export * from '../models/CompleteRecoveryRequest';
export * from '../models/ContractDeleteResponse';
export * from '../models/ContractListQueries';
export * from '../models/ContractListResponse';
export * from '../models/ContractPolicyRuleResponse';
export * from '../models/ContractPolicyRuleResponseContract';
export * from '../models/ContractResponse';
export * from '../models/CountPerIntervalLimitPolicyRuleResponse';
export * from '../models/CreateAccountRequest';
export * from '../models/CreateContractRequest';
export * from '../models/CreatePlayerAccountRequest';
export * from '../models/CreatePlayerRequest';
export * from '../models/CreatePlayerSessionRequest';
export * from '../models/CreatePolicyAllowFunctionRequest';
export * from '../models/CreatePolicyRequest';
export * from '../models/CreatePolicyRuleRequest';
export * from '../models/CreateSessionRequest';
export * from '../models/CreateTransactionIntentRequest';
export * from '../models/DataAccountTypes';
export * from '../models/DomainData';
export * from '../models/EditRoleRequest';
export * from '../models/EntityTypeACCOUNT';
export * from '../models/EntityTypeCONTRACT';
export * from '../models/EntityTypeINVENTORY';
export * from '../models/EntityTypePLAYER';
export * from '../models/EntityTypePOLICY';
export * from '../models/EntityTypePOLICYRULE';
export * from '../models/EntityTypePROJECT';
export * from '../models/EntityTypeSESSION';
export * from '../models/EntityTypeSIGNATURE';
export * from '../models/EntityTypeTRANSACTIONINTENT';
export * from '../models/EntityTypeUSER';
export * from '../models/ErrorTypeINVALIDREQUESTERROR';
export * from '../models/FieldErrorsValue';
export * from '../models/GasPerIntervalLimitPolicyRuleResponse';
export * from '../models/GasPerTransactionLimitPolicyRuleResponse';
export * from '../models/GasReport';
export * from '../models/GetSigninUrlResponse';
export * from '../models/Interaction';
export * from '../models/InvalidRequestError';
export * from '../models/InvalidRequestErrorResponse';
export * from '../models/InventoryListResponse';
export * from '../models/InventoryResponse';
export * from '../models/InvitedMemberResponse';
export * from '../models/Log';
export * from '../models/LoginRequest';
export * from '../models/MemberRemoveResponse';
export * from '../models/MemberRequest';
export * from '../models/MemberResponse';
export * from '../models/MembersResponse';
export * from '../models/NextActionPayload';
export * from '../models/NextActionResponse';
export * from '../models/NextActionType';
export * from '../models/ObsoleteAssetInventory';
export * from '../models/ObsoleteAssetType';
export * from '../models/ObsoleteInventoryResponse';
export * from '../models/PKPolicy';
export * from '../models/PayForUserPolicyStrategy';
export * from '../models/PickAccountResponseId';
export * from '../models/PickContractResponseId';
export * from '../models/PickPlayerResponseId';
export * from '../models/PickPolicyResponseId';
export * from '../models/PickPolicyRuleResponseId';
export * from '../models/PickTransactionIntentResponseId';
export * from '../models/PlayerCancelTransferOwnershipRequest';
export * from '../models/PlayerInventoryListQueries';
export * from '../models/PlayerListQueries';
export * from '../models/PlayerListResponse';
export * from '../models/PlayerRequest';
export * from '../models/PlayerResponse';
export * from '../models/PlayerTransferOwnershipRequest';
export * from '../models/PolicyDeleteResponse';
export * from '../models/PolicyListQueries';
export * from '../models/PolicyListResponse';
export * from '../models/PolicyRateLimit';
export * from '../models/PolicyRateLimitCOUNTPERINTERVAL';
export * from '../models/PolicyRateLimitGASPERINTERVAL';
export * from '../models/PolicyRateLimitGASPERTRANSACTION';
export * from '../models/PolicyResponse';
export * from '../models/PolicyResponsePolicyRulesInner';
export * from '../models/PolicyResponseTransactionIntentsInner';
export * from '../models/PolicyRuleDeleteResponse';
export * from '../models/PolicyRuleListQueries';
export * from '../models/PolicyRuleListResponse';
export * from '../models/PolicyRuleResponse';
export * from '../models/PolicyRuleType';
export * from '../models/PolicyRuleTypeACCOUNT';
export * from '../models/PolicyRuleTypeCONTRACT';
export * from '../models/PolicyRuleTypeRATELIMIT';
export * from '../models/PolicyStrategy';
export * from '../models/PolicyStrategyRequest';
export * from '../models/PrismaInputJsonValue';
export * from '../models/ProjectListResponse';
export * from '../models/ProjectLogs';
export * from '../models/ProjectRequest';
export * from '../models/ProjectResponse';
export * from '../models/ProjectRole';
export * from '../models/ProviderRequest';
export * from '../models/ProviderResponse';
export * from '../models/ResponseResponse';
export * from '../models/ResponseTypeLIST';
export * from '../models/RevokeSessionPlayerRequest';
export * from '../models/RevokeSessionRequest';
export * from '../models/SessionListQueries';
export * from '../models/SessionListResponse';
export * from '../models/SessionResponse';
export * from '../models/SignPayloadRequest';
export * from '../models/SignPayloadResponse';
export * from '../models/SignatureRequest';
export * from '../models/SignupRequest';
export * from '../models/SortOrder';
export * from '../models/SponsorSchema';
export * from '../models/SponsorSchemaCHARGECUSTOMTOKENS';
export * from '../models/SponsorSchemaPAYFORUSER';
export * from '../models/StartRecoveryRequest';
export * from '../models/TimeIntervalType';
export * from '../models/TransactionIntentListQueries';
export * from '../models/TransactionIntentListResponse';
export * from '../models/TransactionIntentResponse';
export * from '../models/TransactionIntentResponseAccount';
export * from '../models/TransactionIntentResponsePlayer';
export * from '../models/TransactionIntentResponsePolicy';
export * from '../models/TransferOwnershipRequest';
export * from '../models/TypedDataField';
export * from '../models/UpdateContractRequest';
export * from '../models/UpdatePolicyRequest';
export * from '../models/UpdatePolicyRuleRequest';

import { Abi } from '../models/Abi';
import { AbiType } from '../models/AbiType';
import { AccountInventoryListQueries     } from '../models/AccountInventoryListQueries';
import { AccountListQueries   , AccountListQueriesExpandEnum    } from '../models/AccountListQueries';
import { AccountListResponse       } from '../models/AccountListResponse';
import { AccountPolicyRuleResponse     } from '../models/AccountPolicyRuleResponse';
import { AccountResponse            } from '../models/AccountResponse';
import { ApiKeyResponse } from '../models/ApiKeyResponse';
import { AssetInventory      } from '../models/AssetInventory';
import { AssetType } from '../models/AssetType';
import { AuthPlayerListQueries     } from '../models/AuthPlayerListQueries';
import { AuthPlayerListResponse       } from '../models/AuthPlayerListResponse';
import { AuthPlayerResponse         } from '../models/AuthPlayerResponse';
import { AuthResponse } from '../models/AuthResponse';
import { CancelTransferOwnershipRequest } from '../models/CancelTransferOwnershipRequest';
import { ChargeCustomTokenPolicyStrategy    } from '../models/ChargeCustomTokenPolicyStrategy';
import { CompleteRecoveryRequest } from '../models/CompleteRecoveryRequest';
import { ContractDeleteResponse    } from '../models/ContractDeleteResponse';
import { ContractListQueries        } from '../models/ContractListQueries';
import { ContractListResponse       } from '../models/ContractListResponse';
import { ContractPolicyRuleResponse       } from '../models/ContractPolicyRuleResponse';
import { ContractPolicyRuleResponseContract          } from '../models/ContractPolicyRuleResponseContract';
import { ContractResponse          } from '../models/ContractResponse';
import { CountPerIntervalLimitPolicyRuleResponse         } from '../models/CountPerIntervalLimitPolicyRuleResponse';
import { CreateAccountRequest       } from '../models/CreateAccountRequest';
import { CreateContractRequest } from '../models/CreateContractRequest';
import { CreatePlayerAccountRequest      } from '../models/CreatePlayerAccountRequest';
import { CreatePlayerRequest } from '../models/CreatePlayerRequest';
import { CreatePlayerSessionRequest } from '../models/CreatePlayerSessionRequest';
import { CreatePolicyAllowFunctionRequest        } from '../models/CreatePolicyAllowFunctionRequest';
import { CreatePolicyRequest } from '../models/CreatePolicyRequest';
import { CreatePolicyRuleRequest         } from '../models/CreatePolicyRuleRequest';
import { CreateSessionRequest } from '../models/CreateSessionRequest';
import { CreateTransactionIntentRequest } from '../models/CreateTransactionIntentRequest';
import { DataAccountTypes } from '../models/DataAccountTypes';
import { DomainData } from '../models/DomainData';
import { EditRoleRequest } from '../models/EditRoleRequest';
import { EntityTypeACCOUNT } from '../models/EntityTypeACCOUNT';
import { EntityTypeCONTRACT } from '../models/EntityTypeCONTRACT';
import { EntityTypeINVENTORY } from '../models/EntityTypeINVENTORY';
import { EntityTypePLAYER } from '../models/EntityTypePLAYER';
import { EntityTypePOLICY } from '../models/EntityTypePOLICY';
import { EntityTypePOLICYRULE } from '../models/EntityTypePOLICYRULE';
import { EntityTypePROJECT } from '../models/EntityTypePROJECT';
import { EntityTypeSESSION } from '../models/EntityTypeSESSION';
import { EntityTypeSIGNATURE } from '../models/EntityTypeSIGNATURE';
import { EntityTypeTRANSACTIONINTENT } from '../models/EntityTypeTRANSACTIONINTENT';
import { EntityTypeUSER } from '../models/EntityTypeUSER';
import { ErrorTypeINVALIDREQUESTERROR } from '../models/ErrorTypeINVALIDREQUESTERROR';
import { FieldErrorsValue } from '../models/FieldErrorsValue';
import { GasPerIntervalLimitPolicyRuleResponse         } from '../models/GasPerIntervalLimitPolicyRuleResponse';
import { GasPerTransactionLimitPolicyRuleResponse       } from '../models/GasPerTransactionLimitPolicyRuleResponse';
import { GasReport   } from '../models/GasReport';
import { GetSigninUrlResponse } from '../models/GetSigninUrlResponse';
import { Interaction } from '../models/Interaction';
import { InvalidRequestError    } from '../models/InvalidRequestError';
import { InvalidRequestErrorResponse } from '../models/InvalidRequestErrorResponse';
import { InventoryListResponse       } from '../models/InventoryListResponse';
import { InventoryResponse    } from '../models/InventoryResponse';
import { InvitedMemberResponse } from '../models/InvitedMemberResponse';
import { Log } from '../models/Log';
import { LoginRequest } from '../models/LoginRequest';
import { MemberRemoveResponse    } from '../models/MemberRemoveResponse';
import { MemberRequest } from '../models/MemberRequest';
import { MemberResponse  } from '../models/MemberResponse';
import { MembersResponse       } from '../models/MembersResponse';
import { NextActionPayload } from '../models/NextActionPayload';
import { NextActionResponse   } from '../models/NextActionResponse';
import { NextActionType } from '../models/NextActionType';
import { ObsoleteAssetInventory      } from '../models/ObsoleteAssetInventory';
import { ObsoleteAssetType } from '../models/ObsoleteAssetType';
import { ObsoleteInventoryResponse     } from '../models/ObsoleteInventoryResponse';
import { PKPolicy } from '../models/PKPolicy';
import { PayForUserPolicyStrategy  } from '../models/PayForUserPolicyStrategy';
import { PickAccountResponseId } from '../models/PickAccountResponseId';
import { PickContractResponseId } from '../models/PickContractResponseId';
import { PickPlayerResponseId } from '../models/PickPlayerResponseId';
import { PickPolicyResponseId } from '../models/PickPolicyResponseId';
import { PickPolicyRuleResponseId } from '../models/PickPolicyRuleResponseId';
import { PickTransactionIntentResponseId } from '../models/PickTransactionIntentResponseId';
import { PlayerCancelTransferOwnershipRequest } from '../models/PlayerCancelTransferOwnershipRequest';
import { PlayerInventoryListQueries      } from '../models/PlayerInventoryListQueries';
import { PlayerListQueries   , PlayerListQueriesExpandEnum    } from '../models/PlayerListQueries';
import { PlayerListResponse       } from '../models/PlayerListResponse';
import { PlayerRequest } from '../models/PlayerRequest';
import { PlayerResponse         } from '../models/PlayerResponse';
import { PlayerTransferOwnershipRequest } from '../models/PlayerTransferOwnershipRequest';
import { PolicyDeleteResponse    } from '../models/PolicyDeleteResponse';
import { PolicyListQueries   , PolicyListQueriesExpandEnum      } from '../models/PolicyListQueries';
import { PolicyListResponse       } from '../models/PolicyListResponse';
import { PolicyRateLimit } from '../models/PolicyRateLimit';
import { PolicyRateLimitCOUNTPERINTERVAL } from '../models/PolicyRateLimitCOUNTPERINTERVAL';
import { PolicyRateLimitGASPERINTERVAL } from '../models/PolicyRateLimitGASPERINTERVAL';
import { PolicyRateLimitGASPERTRANSACTION } from '../models/PolicyRateLimitGASPERTRANSACTION';
import { PolicyResponse          } from '../models/PolicyResponse';
import { PolicyResponsePolicyRulesInner           } from '../models/PolicyResponsePolicyRulesInner';
import { PolicyResponseTransactionIntentsInner              } from '../models/PolicyResponseTransactionIntentsInner';
import { PolicyRuleDeleteResponse    } from '../models/PolicyRuleDeleteResponse';
import { PolicyRuleListQueries   , PolicyRuleListQueriesExpandEnum    } from '../models/PolicyRuleListQueries';
import { PolicyRuleListResponse       } from '../models/PolicyRuleListResponse';
import { PolicyRuleResponse           } from '../models/PolicyRuleResponse';
import { PolicyRuleType } from '../models/PolicyRuleType';
import { PolicyRuleTypeACCOUNT } from '../models/PolicyRuleTypeACCOUNT';
import { PolicyRuleTypeCONTRACT } from '../models/PolicyRuleTypeCONTRACT';
import { PolicyRuleTypeRATELIMIT } from '../models/PolicyRuleTypeRATELIMIT';
import { PolicyStrategy    } from '../models/PolicyStrategy';
import { PolicyStrategyRequest    } from '../models/PolicyStrategyRequest';
import { PrismaInputJsonValue } from '../models/PrismaInputJsonValue';
import { ProjectListResponse       } from '../models/ProjectListResponse';
import { ProjectLogs       } from '../models/ProjectLogs';
import { ProjectRequest   } from '../models/ProjectRequest';
import { ProjectResponse        } from '../models/ProjectResponse';
import { ProjectRole } from '../models/ProjectRole';
import { ProviderRequest } from '../models/ProviderRequest';
import { ProviderResponse } from '../models/ProviderResponse';
import { ResponseResponse } from '../models/ResponseResponse';
import { ResponseTypeLIST } from '../models/ResponseTypeLIST';
import { RevokeSessionPlayerRequest } from '../models/RevokeSessionPlayerRequest';
import { RevokeSessionRequest } from '../models/RevokeSessionRequest';
import { SessionListQueries    , SessionListQueriesExpandEnum    } from '../models/SessionListQueries';
import { SessionListResponse       } from '../models/SessionListResponse';
import { SessionResponse             } from '../models/SessionResponse';
import { SignPayloadRequest } from '../models/SignPayloadRequest';
import { SignPayloadResponse      } from '../models/SignPayloadResponse';
import { SignatureRequest } from '../models/SignatureRequest';
import { SignupRequest } from '../models/SignupRequest';
import { SortOrder } from '../models/SortOrder';
import { SponsorSchema } from '../models/SponsorSchema';
import { SponsorSchemaCHARGECUSTOMTOKENS } from '../models/SponsorSchemaCHARGECUSTOMTOKENS';
import { SponsorSchemaPAYFORUSER } from '../models/SponsorSchemaPAYFORUSER';
import { StartRecoveryRequest } from '../models/StartRecoveryRequest';
import { TimeIntervalType } from '../models/TimeIntervalType';
import { TransactionIntentListQueries   , TransactionIntentListQueriesExpandEnum       } from '../models/TransactionIntentListQueries';
import { TransactionIntentListResponse       } from '../models/TransactionIntentListResponse';
import { TransactionIntentResponse              } from '../models/TransactionIntentResponse';
import { TransactionIntentResponseAccount            } from '../models/TransactionIntentResponseAccount';
import { TransactionIntentResponsePlayer         } from '../models/TransactionIntentResponsePlayer';
import { TransactionIntentResponsePolicy          } from '../models/TransactionIntentResponsePolicy';
import { TransferOwnershipRequest } from '../models/TransferOwnershipRequest';
import { TypedDataField } from '../models/TypedDataField';
import { UpdateContractRequest } from '../models/UpdateContractRequest';
import { UpdatePolicyRequest } from '../models/UpdatePolicyRequest';
import { UpdatePolicyRuleRequest        } from '../models/UpdatePolicyRuleRequest';

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

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "AccountListQueriesExpandEnum",
    "AssetType",
    "DataAccountTypes",
    "EntityTypeACCOUNT",
    "EntityTypeCONTRACT",
    "EntityTypeINVENTORY",
    "EntityTypePLAYER",
    "EntityTypePOLICY",
    "EntityTypePOLICYRULE",
    "EntityTypePROJECT",
    "EntityTypeSESSION",
    "EntityTypeSIGNATURE",
    "EntityTypeTRANSACTIONINTENT",
    "EntityTypeUSER",
    "ErrorTypeINVALIDREQUESTERROR",
    "NextActionType",
    "ObsoleteAssetType",
    "PKPolicy",
    "PlayerListQueriesExpandEnum",
    "PolicyListQueriesExpandEnum",
    "PolicyRateLimit",
    "PolicyRateLimitCOUNTPERINTERVAL",
    "PolicyRateLimitGASPERINTERVAL",
    "PolicyRateLimitGASPERTRANSACTION",
    "PolicyRuleListQueriesExpandEnum",
    "PolicyRuleType",
    "PolicyRuleTypeACCOUNT",
    "PolicyRuleTypeCONTRACT",
    "PolicyRuleTypeRATELIMIT",
    "ProjectRole",
    "ResponseTypeLIST",
    "SessionListQueriesExpandEnum",
    "SortOrder",
    "SponsorSchema",
    "SponsorSchemaCHARGECUSTOMTOKENS",
    "SponsorSchemaPAYFORUSER",
    "TimeIntervalType",
    "TransactionIntentListQueriesExpandEnum",
]);

let typeMap: {[index: string]: any} = {
    "Abi": Abi,
    "AbiType": AbiType,
    "AccountInventoryListQueries": AccountInventoryListQueries,
    "AccountListQueries": AccountListQueries,
    "AccountListResponse": AccountListResponse,
    "AccountPolicyRuleResponse": AccountPolicyRuleResponse,
    "AccountResponse": AccountResponse,
    "ApiKeyResponse": ApiKeyResponse,
    "AssetInventory": AssetInventory,
    "AuthPlayerListQueries": AuthPlayerListQueries,
    "AuthPlayerListResponse": AuthPlayerListResponse,
    "AuthPlayerResponse": AuthPlayerResponse,
    "AuthResponse": AuthResponse,
    "CancelTransferOwnershipRequest": CancelTransferOwnershipRequest,
    "ChargeCustomTokenPolicyStrategy": ChargeCustomTokenPolicyStrategy,
    "CompleteRecoveryRequest": CompleteRecoveryRequest,
    "ContractDeleteResponse": ContractDeleteResponse,
    "ContractListQueries": ContractListQueries,
    "ContractListResponse": ContractListResponse,
    "ContractPolicyRuleResponse": ContractPolicyRuleResponse,
    "ContractPolicyRuleResponseContract": ContractPolicyRuleResponseContract,
    "ContractResponse": ContractResponse,
    "CountPerIntervalLimitPolicyRuleResponse": CountPerIntervalLimitPolicyRuleResponse,
    "CreateAccountRequest": CreateAccountRequest,
    "CreateContractRequest": CreateContractRequest,
    "CreatePlayerAccountRequest": CreatePlayerAccountRequest,
    "CreatePlayerRequest": CreatePlayerRequest,
    "CreatePlayerSessionRequest": CreatePlayerSessionRequest,
    "CreatePolicyAllowFunctionRequest": CreatePolicyAllowFunctionRequest,
    "CreatePolicyRequest": CreatePolicyRequest,
    "CreatePolicyRuleRequest": CreatePolicyRuleRequest,
    "CreateSessionRequest": CreateSessionRequest,
    "CreateTransactionIntentRequest": CreateTransactionIntentRequest,
    "DomainData": DomainData,
    "EditRoleRequest": EditRoleRequest,
    "FieldErrorsValue": FieldErrorsValue,
    "GasPerIntervalLimitPolicyRuleResponse": GasPerIntervalLimitPolicyRuleResponse,
    "GasPerTransactionLimitPolicyRuleResponse": GasPerTransactionLimitPolicyRuleResponse,
    "GasReport": GasReport,
    "GetSigninUrlResponse": GetSigninUrlResponse,
    "Interaction": Interaction,
    "InvalidRequestError": InvalidRequestError,
    "InvalidRequestErrorResponse": InvalidRequestErrorResponse,
    "InventoryListResponse": InventoryListResponse,
    "InventoryResponse": InventoryResponse,
    "InvitedMemberResponse": InvitedMemberResponse,
    "Log": Log,
    "LoginRequest": LoginRequest,
    "MemberRemoveResponse": MemberRemoveResponse,
    "MemberRequest": MemberRequest,
    "MemberResponse": MemberResponse,
    "MembersResponse": MembersResponse,
    "NextActionPayload": NextActionPayload,
    "NextActionResponse": NextActionResponse,
    "ObsoleteAssetInventory": ObsoleteAssetInventory,
    "ObsoleteInventoryResponse": ObsoleteInventoryResponse,
    "PayForUserPolicyStrategy": PayForUserPolicyStrategy,
    "PickAccountResponseId": PickAccountResponseId,
    "PickContractResponseId": PickContractResponseId,
    "PickPlayerResponseId": PickPlayerResponseId,
    "PickPolicyResponseId": PickPolicyResponseId,
    "PickPolicyRuleResponseId": PickPolicyRuleResponseId,
    "PickTransactionIntentResponseId": PickTransactionIntentResponseId,
    "PlayerCancelTransferOwnershipRequest": PlayerCancelTransferOwnershipRequest,
    "PlayerInventoryListQueries": PlayerInventoryListQueries,
    "PlayerListQueries": PlayerListQueries,
    "PlayerListResponse": PlayerListResponse,
    "PlayerRequest": PlayerRequest,
    "PlayerResponse": PlayerResponse,
    "PlayerTransferOwnershipRequest": PlayerTransferOwnershipRequest,
    "PolicyDeleteResponse": PolicyDeleteResponse,
    "PolicyListQueries": PolicyListQueries,
    "PolicyListResponse": PolicyListResponse,
    "PolicyResponse": PolicyResponse,
    "PolicyResponsePolicyRulesInner": PolicyResponsePolicyRulesInner,
    "PolicyResponseTransactionIntentsInner": PolicyResponseTransactionIntentsInner,
    "PolicyRuleDeleteResponse": PolicyRuleDeleteResponse,
    "PolicyRuleListQueries": PolicyRuleListQueries,
    "PolicyRuleListResponse": PolicyRuleListResponse,
    "PolicyRuleResponse": PolicyRuleResponse,
    "PolicyStrategy": PolicyStrategy,
    "PolicyStrategyRequest": PolicyStrategyRequest,
    "PrismaInputJsonValue": PrismaInputJsonValue,
    "ProjectListResponse": ProjectListResponse,
    "ProjectLogs": ProjectLogs,
    "ProjectRequest": ProjectRequest,
    "ProjectResponse": ProjectResponse,
    "ProviderRequest": ProviderRequest,
    "ProviderResponse": ProviderResponse,
    "ResponseResponse": ResponseResponse,
    "RevokeSessionPlayerRequest": RevokeSessionPlayerRequest,
    "RevokeSessionRequest": RevokeSessionRequest,
    "SessionListQueries": SessionListQueries,
    "SessionListResponse": SessionListResponse,
    "SessionResponse": SessionResponse,
    "SignPayloadRequest": SignPayloadRequest,
    "SignPayloadResponse": SignPayloadResponse,
    "SignatureRequest": SignatureRequest,
    "SignupRequest": SignupRequest,
    "StartRecoveryRequest": StartRecoveryRequest,
    "TransactionIntentListQueries": TransactionIntentListQueries,
    "TransactionIntentListResponse": TransactionIntentListResponse,
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
            if (enumsMap.has(expectedType)) {
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

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
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
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
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
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
