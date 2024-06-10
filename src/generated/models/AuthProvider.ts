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

import { BasicAuthProvider } from '../models/BasicAuthProvider';
import { OAuthProvider } from '../models/OAuthProvider';
import { ThirdPartyOAuthProvider } from '../models/ThirdPartyOAuthProvider';
import { HttpFile } from '../http/http';

/**
* Enum of the supporting Auth providers.
*/
export class AuthProvider {

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
    ];

    static getAttributeTypeMap() {
        return AuthProvider.attributeTypeMap;
    }

    public constructor() {
    }
}

