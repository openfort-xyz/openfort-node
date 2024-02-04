/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * OpenAPI spec version: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PolicyBalanceWithdrawResponse {
    'policy': string;
    'balance': string;
    'contract': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "policy",
            "baseName": "policy",
            "type": "string",
            "format": ""
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "string",
            "format": ""
        },
        {
            "name": "contract",
            "baseName": "contract",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PolicyBalanceWithdrawResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

