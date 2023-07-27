/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";

export class SignPayloadResponse {
    object: string;
    account: string;
    address: string;
    hash: string;
    signature: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: "object",
            baseName: "object",
            type: "string",
        },
        {
            name: "account",
            baseName: "account",
            type: "string",
        },
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "hash",
            baseName: "hash",
            type: "string",
        },
        {
            name: "signature",
            baseName: "signature",
            type: "string",
        },
    ];

    static getAttributeTypeMap() {
        return SignPayloadResponse.attributeTypeMap;
    }
}
