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

import { PlayerMetadataValue } from '../models/PlayerMetadataValue';
import { ThirdPartyOAuthProvider } from '../models/ThirdPartyOAuthProvider';
import { HttpFile } from '../http/http';

export class CreateAuthPlayerRequest {
    /**
    * The third party user id.
    */
    'thirdPartyUserId': string;
    'thirdPartyProvider': ThirdPartyOAuthProvider;
    /**
    * Pre generate embedded account.
    */
    'preGenerateEmbeddedAccount': boolean;
    /**
    * The chain ID. Must be a [supported chain](/chains).
    */
    'chainId'?: number;
    'metadata'?: { [key: string]: PlayerMetadataValue; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "thirdPartyUserId",
            "baseName": "thirdPartyUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "thirdPartyProvider",
            "baseName": "thirdPartyProvider",
            "type": "ThirdPartyOAuthProvider",
            "format": ""
        },
        {
            "name": "preGenerateEmbeddedAccount",
            "baseName": "preGenerateEmbeddedAccount",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: PlayerMetadataValue; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateAuthPlayerRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


