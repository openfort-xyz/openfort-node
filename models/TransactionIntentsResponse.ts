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

import { TransactionIntentResponse } from '../models/TransactionIntentResponse';
import { HttpFile } from '../http/http';

export class TransactionIntentsResponse {
    'object': string;
    'url': string;
    'data': Array<TransactionIntentResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<TransactionIntentResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionIntentsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

