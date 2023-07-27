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
import { PolicyStrategy } from "./policyStrategy";

export class CreatePolicyRequest {
    name: string;
    chainId: number;
    strategy: PolicyStrategy;

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
            name: "strategy",
            baseName: "strategy",
            type: "PolicyStrategy",
        },
    ];

    static getAttributeTypeMap() {
        return CreatePolicyRequest.attributeTypeMap;
    }
}
