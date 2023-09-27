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

import { DataAccountTypes } from '../models/DataAccountTypes';
import { HttpFile } from '../http/http';

export class CreateAccountRequest {
    /**
    * The chain id
    */
    'chainId': number;
    /**
    * The address of the external owner
    */
    'externalOwnerAddress'?: string;
    'accountType'?: DataAccountTypes;
    /**
    * If ERC6551, the NFT contract to use
    */
    'tokenContract'?: string;
    /**
    * If ERC6551, the tokenID to serve as owner
    */
    'tokenId'?: number;
    /**
    * The player ID
    */
    'player': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "externalOwnerAddress",
            "baseName": "externalOwnerAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "DataAccountTypes",
            "format": ""
        },
        {
            "name": "tokenContract",
            "baseName": "tokenContract",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenId",
            "baseName": "tokenId",
            "type": "number",
            "format": "double"
        },
        {
            "name": "player",
            "baseName": "player",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateAccountRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



