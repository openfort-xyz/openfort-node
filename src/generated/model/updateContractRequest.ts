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
import { Abi } from "./abi";

export class UpdateContractRequest {
    name?: string;
    chainId?: number;
    deleted?: boolean;
    address?: string;
    abi?: Array<Abi>;
    publicVerification?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },
        {
            name: "chainId",
            baseName: "chainId",
            type: "number",
        },
        {
            name: "deleted",
            baseName: "deleted",
            type: "boolean",
        },
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "abi",
            baseName: "abi",
            type: "Array<Abi>",
        },
        {
            name: "publicVerification",
            baseName: "publicVerification",
            type: "boolean",
        },
    ];

    static getAttributeTypeMap() {
        return UpdateContractRequest.attributeTypeMap;
    }
}
