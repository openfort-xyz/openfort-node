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

import { AuthProvider } from '../models/AuthProvider';
import { AuthenticationType } from '../models/AuthenticationType';
import { HttpFile } from '../http/http';

export class AuthProviderWithTypeResponse {
    'type': AuthenticationType;
    'provider': AuthProvider;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AuthenticationType",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "AuthProvider",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthProviderWithTypeResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


