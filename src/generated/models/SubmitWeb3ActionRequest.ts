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

export class SubmitWeb3ActionRequest {
    /**
    * True to approve the action, false to reject it.
    */
    'approve': boolean;
    /**
    * ID of the Policy that defines the gas sponsorship strategy (starts with `pol_`). If no Policy is provided, the own Account native token funds will be used to pay for gas.
    */
    'policy'?: string;
    /**
    * signed repositories by the owner
    */
    'signature'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "approve",
            "baseName": "approve",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "string",
            "format": ""
        },
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubmitWeb3ActionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

