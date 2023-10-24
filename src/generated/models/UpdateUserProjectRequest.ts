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

import { UpdateUserProjectRequestRole } from '../models/UpdateUserProjectRequestRole';
import { HttpFile } from '../http/http';

export class UpdateUserProjectRequest {
    'userId': string;
    'role': UpdateUserProjectRequestRole;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "UpdateUserProjectRequestRole",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateUserProjectRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
