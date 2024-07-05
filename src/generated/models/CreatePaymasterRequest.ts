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

export class CreatePaymasterRequest {
    /**
    * Specifies the address of the paymaster
    */
    'address': string;
    /**
    * Specifies the paymaster URL
    */
    'url': string;
    /**
    * Specifies the context, that is, the arbitrary repositories that the specific paymaster may require
    */
    'context'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
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
            "name": "context",
            "baseName": "context",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreatePaymasterRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

