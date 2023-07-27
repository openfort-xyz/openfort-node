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
import { AssetInventory } from "./assetInventory";

export class InventoryResponse {
    object: string;
    nftAssets?: Array<AssetInventory>;
    nativeAsset?: AssetInventory;
    tokenAssets?: Array<AssetInventory>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: "object",
            baseName: "object",
            type: "string",
        },
        {
            name: "nftAssets",
            baseName: "nftAssets",
            type: "Array<AssetInventory>",
        },
        {
            name: "nativeAsset",
            baseName: "nativeAsset",
            type: "AssetInventory",
        },
        {
            name: "tokenAssets",
            baseName: "tokenAssets",
            type: "Array<AssetInventory>",
        },
    ];

    static getAttributeTypeMap() {
        return InventoryResponse.attributeTypeMap;
    }
}
