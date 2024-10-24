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

import { BasicAuthProviderEMAIL } from '../models/BasicAuthProviderEMAIL';
import { HttpFile } from '../http/http';

/**
* Email auth configuration
*/
export class EmailAuthConfig {
    /**
    * Enable OAuth provider.
    */
    'enabled': boolean;
    'provider': BasicAuthProviderEMAIL;

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
            "type": "BasicAuthProviderEMAIL",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailAuthConfig.attributeTypeMap;
    }

    public constructor() {
    }
}



