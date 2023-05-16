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

export class Interaction {
    'contract': string;
    'functionName': string;
    'functionArgs': Array<any>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contract",
            "baseName": "contract",
            "type": "string",
            "format": ""
        },
        {
            "name": "functionName",
            "baseName": "function_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "functionArgs",
            "baseName": "function_args",
            "type": "Array<any>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Interaction.attributeTypeMap;
    }

    public constructor() {
    }
}

