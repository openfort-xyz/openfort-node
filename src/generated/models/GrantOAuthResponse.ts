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

export class GrantOAuthResponse {
    'authorizationCode'?: string;
    'accessToken'?: string;
    'refreshToken'?: string;
    'playerId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authorizationCode",
            "baseName": "authorizationCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "refreshToken",
            "baseName": "refreshToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "playerId",
            "baseName": "playerId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GrantOAuthResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

