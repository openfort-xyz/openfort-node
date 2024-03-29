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

export class TransferOwnershipRequest {
    /**
    * The address of the new owner
    */
    'newOwnerAddress': string;
    /**
    * ID of the Policy that defines the gas sponsorship strategy (starts with `pol_`). A policy must be provided.
    */
    'policy': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "newOwnerAddress",
            "baseName": "newOwnerAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransferOwnershipRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

