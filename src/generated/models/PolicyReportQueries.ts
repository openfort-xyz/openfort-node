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

export class PolicyReportQueries {
    /**
    * The start date of the period in unix timestamp.
    */
    'to'?: number;
    /**
    * The end date of the period in unix timestamp.
    */
    '_from'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "to",
            "baseName": "to",
            "type": "number",
            "format": "double"
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return PolicyReportQueries.attributeTypeMap;
    }

    public constructor() {
    }
}
