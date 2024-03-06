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

import { SubscriptionResponsePlan } from '../models/SubscriptionResponsePlan';
import { HttpFile } from '../http/http';

export class SubscriptionResponse {
    'currentPeriodEnd': Date;
    'currentPeriodStart': Date;
    'canceledAt': Date;
    'plan': SubscriptionResponsePlan;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currentPeriodEnd",
            "baseName": "currentPeriodEnd",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "currentPeriodStart",
            "baseName": "currentPeriodStart",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "canceledAt",
            "baseName": "canceledAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "SubscriptionResponsePlan",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
