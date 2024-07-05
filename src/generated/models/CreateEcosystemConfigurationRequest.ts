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

export class CreateEcosystemConfigurationRequest {
    /**
    * Subdomain of the ecosystem.
    */
    'subdomain': string;
    /**
    * Primary color of the ecosystem.
    */
    'primaryColor': string;
    /**
    * Primary color foreground of the ecosystem.
    */
    'primaryColorForeground': string;
    /**
    * Radius of the ecosystem.
    */
    'radius': string;
    /**
    * Logo URL of the ecosystem.
    */
    'logoUrl': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subdomain",
            "baseName": "subdomain",
            "type": "string",
            "format": ""
        },
        {
            "name": "primaryColor",
            "baseName": "primaryColor",
            "type": "string",
            "format": ""
        },
        {
            "name": "primaryColorForeground",
            "baseName": "primaryColorForeground",
            "type": "string",
            "format": ""
        },
        {
            "name": "radius",
            "baseName": "radius",
            "type": "string",
            "format": ""
        },
        {
            "name": "logoUrl",
            "baseName": "logoUrl",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateEcosystemConfigurationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

