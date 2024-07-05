import { InventoryResponse, InventoryListResponse } from "../models";
import { BaseApiWrapper } from "./baseApiWrapper";
import { InventoriesApi } from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import { PlayerInventoryListQueries } from "../models/playerInventoryListQueries";
import { AccountInventoryListQueries } from "../models/accountInventoryListQueries";
import { GetPlayerInventoryRequest } from "../models/getPlayerInventoryRequest";
import { GetAccountInventoryRequest } from "../models/getAccountInventoryRequest";

@httpErrorHandler
export class InventoriesApiWrapper extends BaseApiWrapper<InventoriesApi> {
    static type = "inventories";

    constructor(accessToken: string, basePath?: string) {
        super(InventoriesApi, accessToken, basePath);
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Get NFTs list of player.
     */
    public async getPlayerNftInventory(req: PlayerInventoryListQueries): Promise<InventoryListResponse> {
        return await this.api.getPlayerNftInventory(req.id, req.chainId, req.limit, req.skip, req.order, req.contract);
    }

    /**
     * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
     * Retrieves the NFT assets of an existing account.
     */
    public async getAccountNftInventory(req: AccountInventoryListQueries): Promise<InventoryListResponse> {
        return await this.api.getAccountNftInventory(req.id, req.limit, req.skip, req.order, req.contractId);
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     */
    public async getPlayerCryptoCurrencyInventory(req: PlayerInventoryListQueries): Promise<InventoryListResponse> {
        return await this.api.getPlayerCryptoCurrencyInventory(
            req.id,
            req.chainId,
            req.limit,
            req.skip,
            req.order,
            req.contract,
        );
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     */
    public async getAccountCryptoCurrencyInventory(req: AccountInventoryListQueries): Promise<InventoryListResponse> {
        return await this.api.getAccountCryptoCurrencyInventory(req.id, req.limit, req.skip, req.order, req.contractId);
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     */
    public async getPlayerNativeInventory(req: GetPlayerInventoryRequest): Promise<InventoryResponse> {
        return await this.api.getPlayerNativeInventory(req.id, req.chainId);
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     */
    public async getAccountNativeInventory(req: GetAccountInventoryRequest): Promise<InventoryResponse> {
        return await this.api.getAccountNativeInventory(req.id);
    }
}
