import {
    AccountResponse,
    AccountsResponse,
    CreateAccountRequest,
    CreatePlayerRequest,
    CreatePlayerSessionRequest,
    GetPlayerInventoryRequest,
    GetPlayerRequest,
    InventoryResponse,
    ListPlayerAccountsRequest,
    ListPlayersRequest,
    PlayerResponse,
    PlayersResponse,
    RevokePlayerSessionRequest,
    SessionResponse,
    TransactionIntentResponse,
    PlayerCancelTransferOwnershipRequest,
    PlayerTransferOwnershipRequest,
    UpdatePlayerRequest,
} from "../model";
import { BaseApiWrapper } from "./baseApiWrapper";
import { PlayersApi } from "../generated/api/playersApi";
import { httpErrorHandler } from "../utility/httpErrorHandler";

@httpErrorHandler
export class PlayersApiWrapper extends BaseApiWrapper<PlayersApi> {
    constructor(accessToken: string, basePath?: string) {
        super(PlayersApi, accessToken, basePath);
    }

    /**
     * Creates a player object.
     * @param req Parameters to create a player
     */
    public async create(req: CreatePlayerRequest): Promise<PlayerResponse> {
        const response = await this.api.createPlayer(req);
        return response.body;
    }

    /**
     * Creates an account object for an existing player.
     * @param req Parameters to create a player account.
     */
    public async createAccount(req: CreateAccountRequest): Promise<AccountResponse> {
        const { player, ...body } = req;
        const response = await this.api.createPlayerAccount(player, body);
        return response.body;
    }

    /**
     * Creates a session object for the given player.
     * @param req Parameters to create a player session.
     */
    public async createSession(req: CreatePlayerSessionRequest): Promise<SessionResponse> {
        const { playerId, ...body } = req;
        const response = await this.api.createPlayerSession(playerId, body);
        return response.body;
    }

    /**
     * Retrieves the details of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param req Criteria to get the player.
     */
    public async get(req: GetPlayerRequest): Promise<PlayerResponse> {
        const response = await this.api.getPlayer(req.id, req.expand);
        return response.body;
    }

    /**
     * Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param req Criteria to get the accounts list.
     */
    public async listAccounts(req: ListPlayerAccountsRequest): Promise<AccountsResponse> {
        const response = await this.api.getPlayerAccounts(
            req.id,
            req.expandTransactionIntent ? ["transactionIntents"] : undefined,
        );
        return response.body;
    }

    /**
     * Retrieves the inventory of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param req Criteria to retrieve player inventory.
     */
    public async getInventory(req: GetPlayerInventoryRequest): Promise<InventoryResponse> {
        const response = await this.api.getPlayerInventory(req.id, req.chainId);
        return response.body;
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param req Criteria to retrieve the list of the players
     */
    public async list(req?: ListPlayersRequest): Promise<PlayersResponse> {
        const response = await this.api.getPlayers(
            req?.limit,
            req?.skip,
            req?.order,
            req?.expand,
            req?.filter ? JSON.stringify(req.filter) : undefined,
        );
        return response.body;
    }

    /**
     * Creates a session object for the given player.
     * @param req Parameters to revoce the player session.
     */
    public async revokeSession(req: RevokePlayerSessionRequest): Promise<SessionResponse> {
        const { playerId, ...body } = req;
        const response = await this.api.revokePlayerSession(playerId, body);
        return response.body;
    }

    /**
     * Transfer ownership of an account to an address.
     * @param req Parameters to transfer account ownership.
     */
    public async requestTransferAccountOwnership(
        req: PlayerTransferOwnershipRequest,
    ): Promise<TransactionIntentResponse> {
        const { playerId, ...body } = req;
        const response = await this.api.requestTransferAccountOwnership(playerId, body);
        return response.body;
    }

    /**
     * Transfer ownership of an account to an address.
     * @param req Parameters to transfer account ownership.
     */
    public async cancelTransferAccountOwnership(
        req: PlayerCancelTransferOwnershipRequest,
    ): Promise<TransactionIntentResponse> {
        const { playerId, ...body } = req;
        const response = await this.api.cancelTransferAccountOwnership(playerId, body);
        return response.body;
    }

    /**
     * Updates a player object.
     * @param req Parameters to update player
     */
    public async update(req: UpdatePlayerRequest): Promise<PlayerResponse> {
        const { id, ...body } = req;
        const response = await this.api.updatePlayer(id, body);
        return response.body;
    }
}
