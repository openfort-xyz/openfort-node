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

import { AuthPlayerResponse } from '../models/AuthPlayerResponse';
import { HttpFile } from '../http/http';

export class AuthResponse {
    'player': AuthPlayerResponse;
    /**
    * JWT access token.
    */
    'token': string;
    /**
    * Refresh token.
    */
    'refreshToken': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "player",
            "baseName": "player",
            "type": "AuthPlayerResponse",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "refreshToken",
            "baseName": "refreshToken",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

