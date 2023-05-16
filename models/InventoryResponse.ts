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

import { AssetInventory } from '../models/AssetInventory';
import { HttpFile } from '../http/http';

export class InventoryResponse {
    'object': string;
    'nftAssets'?: Array<AssetInventory>;
    'nativeAsset'?: AssetInventory;
    'tokenAssets'?: Array<AssetInventory>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "nftAssets",
            "baseName": "nft_assets",
            "type": "Array<AssetInventory>",
            "format": ""
        },
        {
            "name": "nativeAsset",
            "baseName": "native_asset",
            "type": "AssetInventory",
            "format": ""
        },
        {
            "name": "tokenAssets",
            "baseName": "token_assets",
            "type": "Array<AssetInventory>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InventoryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

