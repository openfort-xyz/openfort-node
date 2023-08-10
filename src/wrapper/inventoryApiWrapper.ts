import {
    GetPlayerInventoryRequest,
    InventoryResponse,
    GetAccountInventoryRequest,
    PlayerInventoryListQueries,
    AccountInventoryListQueries,
    InventoryListResponse,
} from "../model";
import { BaseApiWrapper } from "./baseApiWrapper";
import { InventoryApi } from "../generated/api/inventoryApi";
import { httpErrorHandler } from "../utility/httpErrorHandler";

@httpErrorHandler
export class InventoryApiWrapper extends BaseApiWrapper<InventoryApi> {
    constructor(accessToken: string, basePath?: string) {
        super(InventoryApi, accessToken, basePath);
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     */
    public async getPlayerNftInventory(req: PlayerInventoryListQueries): Promise<InventoryListResponse> {
        const response = await this.api.getPlayerNftInventory(
            req.playerId,
            req.chainId,
            req.limit,
            req.skip,
            req.order,
            req.contractId,
        );
        return response.body;
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     */
    public async getAccountNftInventory(req: AccountInventoryListQueries): Promise<InventoryListResponse> {
        const response = await this.api.getAccountNftInventory(
            req.accountId,
            req.limit,
            req.skip,
            req.order,
            req.contractId,
        );
        return response.body;
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     */
    public async getPlayerCryptoCurrencyInventory(req: PlayerInventoryListQueries): Promise<InventoryListResponse> {
        const response = await this.api.getPlayerCryptoCurrencyInventory(
            req.playerId,
            req.chainId,
            req.limit,
            req.skip,
            req.order,
            req.contractId,
        );
        return response.body;
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     */
    public async getAccountCryptoCurrencyInventory(req: AccountInventoryListQueries): Promise<InventoryListResponse> {
        const response = await this.api.getAccountCryptoCurrencyInventory(
            req.accountId,
            req.limit,
            req.skip,
            req.order,
            req.contractId,
        );
        return response.body;
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     */
    public async getPlayerNativeInventory(req: GetPlayerInventoryRequest): Promise<InventoryResponse> {
        const response = await this.api.getPlayerNativeInventory(req.playerId, req.chainId);
        return response.body;
    }

    /**
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     */
    public async getAccountNativeInventory(req: GetAccountInventoryRequest): Promise<InventoryResponse> {
        const response = await this.api.getAccountNativeInventory(req.accountId);
        return response.body;
    }
}
