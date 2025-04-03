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

/**
* Mapping strategy for the migration. This is used to transform the ids between the source and destination providers. For the transformation, the order of the operations is: 1. Trim the prefix and suffix from the destination id. 2. Add the prefix and suffix to the destination id. When a user is authenticated in the destination provider, the id is transformed using the mapping strategy to find if exists in the source provider. If the id is not found, the user is created in the destination provider. If the id is found, the user in the destination provider is linked to the source provider.
*/
export class MappingStrategy {
    /**
    * Prefix to trim from the destination id.
    */
    'trimPrefix'?: string;
    /**
    * Suffix to trim from the destination id.
    */
    'trimSuffix'?: string;
    /**
    * Prefix to add to the destination id.
    */
    'addPrefix'?: string;
    /**
    * Suffix to add to the destination id.
    */
    'addSuffix'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "trimPrefix",
            "baseName": "trimPrefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "trimSuffix",
            "baseName": "trimSuffix",
            "type": "string",
            "format": ""
        },
        {
            "name": "addPrefix",
            "baseName": "addPrefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "addSuffix",
            "baseName": "addSuffix",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MappingStrategy.attributeTypeMap;
    }

    public constructor() {
    }
}

