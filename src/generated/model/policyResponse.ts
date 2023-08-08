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
import { EntityTypePOLICY } from './entityTypePOLICY';
import { PolicyResponsePolicyRulesInner } from './policyResponsePolicyRulesInner';
import { PolicyResponseTransactionIntentsInner } from './policyResponseTransactionIntentsInner';
import { PolicyStrategy } from './policyStrategy';

export class PolicyResponse {
    'transactionIntents'?: Array<PolicyResponseTransactionIntentsInner>;
    'policyRules'?: Array<PolicyResponsePolicyRulesInner>;
    'id': string;
    'object': EntityTypePOLICY;
    'createdAt': number;
    'name': string | null;
    'deleted': boolean;
    'chainId': number;
    'strategy': PolicyStrategy;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionIntents",
            "baseName": "transactionIntents",
            "type": "Array<PolicyResponseTransactionIntentsInner>"
        },
        {
            "name": "policyRules",
            "baseName": "policyRules",
            "type": "Array<PolicyResponsePolicyRulesInner>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "EntityTypePOLICY"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean"
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number"
        },
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "PolicyStrategy"
        }    ];

    static getAttributeTypeMap() {
        return PolicyResponse.attributeTypeMap;
    }
}

export namespace PolicyResponse {
}
