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

import { RequestFile } from './models';
import { AssetType } from './assetType';

export class AssetInventory {
    'asset_type': AssetType;
    'address'?: string;
    'token_id'?: number;
    /**
    * amount in Wei
    */
    'amount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "asset_type",
            "baseName": "asset_type",
            "type": "AssetType"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "token_id",
            "baseName": "token_id",
            "type": "number"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AssetInventory.attributeTypeMap;
    }
}

export namespace AssetInventory {
}