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

import { Stat } from '../models/Stat';
import { HttpFile } from '../http/http';

export class ProjectStatsResponse {
    'transactionIntents': Array<Stat>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "transactionIntents",
            "baseName": "transactionIntents",
            "type": "Array<Stat>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProjectStatsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

