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

import { EntityTypeSHARE } from '../models/EntityTypeSHARE';
import { ShareType } from '../models/ShareType';
import { HttpFile } from '../http/http';

export class ShareResponse {
    'id': string;
    'object': EntityTypeSHARE;
    'createdAt': number;
    'share': string;
    'userEntropy': boolean;
    'type': ShareType;

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
            "type": "EntityTypeSHARE",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "share",
            "baseName": "share",
            "type": "string",
            "format": ""
        },
        {
            "name": "userEntropy",
            "baseName": "userEntropy",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ShareType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ShareResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



