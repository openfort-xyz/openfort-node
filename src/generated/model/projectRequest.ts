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
import { PKLocation } from "./pKLocation";
import { PKPolicy } from "./pKPolicy";

export class ProjectRequest {
    name: string;
    pkPolicy?: PKPolicy;
    pkLocation?: PKLocation;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },
        {
            name: "pkPolicy",
            baseName: "pkPolicy",
            type: "PKPolicy",
        },
        {
            name: "pkLocation",
            baseName: "pkLocation",
            type: "PKLocation",
        },
    ];

    static getAttributeTypeMap() {
        return ProjectRequest.attributeTypeMap;
    }
}

export namespace ProjectRequest {}
