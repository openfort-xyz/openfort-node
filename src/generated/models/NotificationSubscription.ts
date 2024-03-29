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

import { EntityTypeNOTIFICATIONSUBSCRIPTION } from '../models/EntityTypeNOTIFICATIONSUBSCRIPTION';
import { SubscriptionType } from '../models/SubscriptionType';
import { HttpFile } from '../http/http';

export class NotificationSubscription {
    'id': string;
    'object': EntityTypeNOTIFICATIONSUBSCRIPTION;
    'createdAt': number;
    'target': string;
    'method': SubscriptionType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "EntityTypeNOTIFICATIONSUBSCRIPTION",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "SubscriptionType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotificationSubscription.attributeTypeMap;
    }

    public constructor() {
    }
}



