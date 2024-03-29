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

import { NotificationTriggerType } from '../models/NotificationTriggerType';
import { HttpFile } from '../http/http';

export class CreateNotificationTriggerRequest {
    /**
    * The notification ID (starts with not_).
    */
    'notification': string;
    'type': NotificationTriggerType;
    /**
    * The function name of the contract. Accepts a a function signature as well (e.g. mint(address)).
    */
    'functionName'?: string;
    /**
    * The function arguments of the contract, in string format. If you provide one of a `pla_...`, `con_...` or `acc_...` it will be converted to the corresponding address.
    */
    'functionArgs'?: Array<string>;
    /**
    * The contract ID you want to interact with. Must have been added to Openfort first, starts with `con_`.
    */
    'contract'?: string;
    /**
    * The threshold value at which (greater or equal) the notification will be triggered.
    */
    'threshold': string;
    /**
    * The chain ID. Must be a [supported chain](/chains).
    */
    'chainId'?: number;
    /**
    * ID of the Developer Account this trigger will check the balance of (starts with `dac_`).
    */
    'account'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "notification",
            "baseName": "notification",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "NotificationTriggerType",
            "format": ""
        },
        {
            "name": "functionName",
            "baseName": "functionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "functionArgs",
            "baseName": "functionArgs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "contract",
            "baseName": "contract",
            "type": "string",
            "format": ""
        },
        {
            "name": "threshold",
            "baseName": "threshold",
            "type": "string",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateNotificationTriggerRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



