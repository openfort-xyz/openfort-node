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

import { Account } from '../models/Account';
import { HttpFile } from '../http/http';

export class ListResponseAccount {
    'url': string;
    'data': Array<Account>;
    'start': number;
    'end': number;
    'total': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Account>",
            "format": ""
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": "double"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number",
            "format": "double"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return ListResponseAccount.attributeTypeMap;
    }

    public constructor() {
    }
}

