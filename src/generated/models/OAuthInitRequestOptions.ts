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

export class OAuthInitRequestOptions {
    /**
    * An object of query params
    */
    'queryParams'?: { [key: string]: string; };
    /**
    * A URL to send the user to after they are confirmed.
    */
    'redirectTo'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "queryParams",
            "baseName": "queryParams",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "redirectTo",
            "baseName": "redirectTo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OAuthInitRequestOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

