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

import { ThirdPartyOAuthProviderACCELBYTE } from '../models/ThirdPartyOAuthProviderACCELBYTE';
import { HttpFile } from '../http/http';

/**
* Accelbyte oauth configuration
*/
export class AccelbyteOAuthConfig {
    /**
    * Enable OAuth provider.
    */
    'enabled': boolean;
    'provider': ThirdPartyOAuthProviderACCELBYTE;
    /**
    * Base URI of your accelbyte gaming service environment. E.g. https://mygame.dev.gamingservices.accelbyte.io/
    */
    'baseUrl': string;
    /**
    * Client ID of your accelbyte gaming service environment.
    */
    'clientId': string;
    /**
    * Secret of your confidential IAM client.
    */
    'clientSecret': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "ThirdPartyOAuthProviderACCELBYTE",
            "format": ""
        },
        {
            "name": "baseUrl",
            "baseName": "baseUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccelbyteOAuthConfig.attributeTypeMap;
    }

    public constructor() {
    }
}



