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
import { SortOrder } from './sortOrder';

export class ListTransactionIntentsQueries {
    'limit'?: number;
    'skip'?: number;
    'order'?: SortOrder;
    'expand'?: Array<ListTransactionIntentsQueries.ExpandEnum>;
    'accountId'?: string;
    'chainId'?: number;
    'playerId'?: string;
    'policyId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "skip",
            "baseName": "skip",
            "type": "number"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "SortOrder"
        },
        {
            "name": "expand",
            "baseName": "expand",
            "type": "Array<ListTransactionIntentsQueries.ExpandEnum>"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number"
        },
        {
            "name": "playerId",
            "baseName": "playerId",
            "type": "string"
        },
        {
            "name": "policyId",
            "baseName": "policyId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListTransactionIntentsQueries.attributeTypeMap;
    }
}

export namespace ListTransactionIntentsQueries {
    export enum ExpandEnum {
        NextAction = 'nextAction',
        Policy = 'policy',
        Player = 'player',
        Account = 'account'
    }
}
