/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { EntityTypeACCOUNT } from './entityTypeACCOUNT';
import { PolicyResponseTransactionIntentsInner } from './policyResponseTransactionIntentsInner';

export class AccountResponse {
    'transactionIntents'?: Array<PolicyResponseTransactionIntentsInner>;
    'id': string;
    'object': EntityTypeACCOUNT;
    'createdAt': number;
    'address': string;
    'ownerAddress': string;
    'deployed': boolean;
    'custodial': boolean;
    'chainId': number;
    'accountType': string;
    'pendingOwnerAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionIntents",
            "baseName": "transactionIntents",
            "type": "Array<PolicyResponseTransactionIntentsInner>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "EntityTypeACCOUNT"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "ownerAddress",
            "baseName": "ownerAddress",
            "type": "string"
        },
        {
            "name": "deployed",
            "baseName": "deployed",
            "type": "boolean"
        },
        {
            "name": "custodial",
            "baseName": "custodial",
            "type": "boolean"
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "string"
        },
        {
            "name": "pendingOwnerAddress",
            "baseName": "pendingOwnerAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountResponse.attributeTypeMap;
    }
}

export namespace AccountResponse {
}
