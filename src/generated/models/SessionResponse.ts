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

import { EntityTypeSESSION } from '../models/EntityTypeSESSION';
import { NextActionResponse } from '../models/NextActionResponse';
import { PlayerResponseTransactionIntentsInner } from '../models/PlayerResponseTransactionIntentsInner';
import { HttpFile } from '../http/http';

export class SessionResponse {
    'id': string;
    'object': EntityTypeSESSION;
    'createdAt': number;
    'updatedAt': number;
    'isActive'?: boolean;
    'address': string;
    'validAfter'?: string;
    'validUntil'?: string;
    'whitelist'?: Array<string>;
    'limit'?: number;
    'nextAction'?: NextActionResponse;
    'transactionIntents'?: Array<PlayerResponseTransactionIntentsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "EntityTypeSESSION",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "validAfter",
            "baseName": "validAfter",
            "type": "string",
            "format": ""
        },
        {
            "name": "validUntil",
            "baseName": "validUntil",
            "type": "string",
            "format": ""
        },
        {
            "name": "whitelist",
            "baseName": "whitelist",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "double"
        },
        {
            "name": "nextAction",
            "baseName": "nextAction",
            "type": "NextActionResponse",
            "format": ""
        },
        {
            "name": "transactionIntents",
            "baseName": "transactionIntents",
            "type": "Array<PlayerResponseTransactionIntentsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SessionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



