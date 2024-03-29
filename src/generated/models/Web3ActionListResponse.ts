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

import { ResponseTypeLIST } from '../models/ResponseTypeLIST';
import { Web3ActionResponse } from '../models/Web3ActionResponse';
import { HttpFile } from '../http/http';

export class Web3ActionListResponse {
    'object': ResponseTypeLIST;
    'url': string;
    'data': Array<Web3ActionResponse>;
    'start': number;
    'end': number;
    'total': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "ResponseTypeLIST",
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
            "type": "Array<Web3ActionResponse>",
            "format": ""
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return Web3ActionListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



