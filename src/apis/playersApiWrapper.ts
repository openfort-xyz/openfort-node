import {
    AccountResponse,
    AccountListResponse,
    CreateAccountRequest,
    CreatePlayerRequest,
    CreatePlayerSessionRequest,
    GetPlayerRequest,
    PlayerResponse,
    PlayerListResponse,
    RevokePlayerSessionRequest,
    SessionResponse,
    TransactionIntentResponse,
    PlayerCancelTransferOwnershipRequest,
    PlayerTransferOwnershipRequest,
    UpdatePlayerRequest,
    AccountListQueries,
    PlayerListQueries,
} from "../models";
import { BaseApiWrapper } from "./baseApiWrapper";
import { PlayerDeleteResponse, PlayersApi } from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";

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
        return await this.api.createPlayer(req);
    }

    /**
     * Creates an account object for an existing player.
     * @param req Parameters to create a player account.
     */
    public async createAccount(req: CreateAccountRequest): Promise<AccountResponse> {
        const { player, ...body } = req;
        return await this.api.createPlayerAccount(player, body);
    }

    /**
     * Creates a session object for the given player.
     * @param req Parameters to create a player session.
     */
    public async createSession(req: CreatePlayerSessionRequest): Promise<SessionResponse> {
        const { playerId, ...body } = req;
        return await this.api.createPlayerSession(playerId, body);
    }

    /**
     * Retrieves the details of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param req Criteria to get the player.
     */
    public async get(req: GetPlayerRequest): Promise<PlayerResponse> {
        return await this.api.getPlayer(req.id, req.expand);
    }

    /**
     * Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param req Criteria to get the accounts list.
     */
    public async listAccounts(req: Pick<AccountListQueries, "player" | "expand">): Promise<AccountListResponse> {
        return await this.api.getPlayerAccounts(req.player, req.expand);
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param req Criteria to retrieve the list of the players
     */
    public async list(req?: PlayerListQueries): Promise<PlayerListResponse> {
        return await this.api.getPlayers(req?.limit, req?.skip, req?.order, req?.expand, req?.name);
    }

    /**
     * Creates a session object for the given player.
     * @param req Parameters to revoce the player session.
     */
    public async revokeSession(req: RevokePlayerSessionRequest): Promise<SessionResponse> {
        const { playerId, ...body } = req;
        return await this.api.revokePlayerSession(playerId, body);
    }

    /**
     * Transfer ownership of an account to an address.
     * @param req Parameters to transfer account ownership.
     */
    public async requestTransferAccountOwnership(
        req: PlayerTransferOwnershipRequest,
    ): Promise<TransactionIntentResponse> {
        const { playerId, ...body } = req;
        return await this.api.requestTransferAccountOwnership(playerId, body);
    }

    /**
     * Transfer ownership of an account to an address.
     * @param req Parameters to transfer account ownership.
     */
    public async cancelTransferAccountOwnership(
        req: PlayerCancelTransferOwnershipRequest,
    ): Promise<TransactionIntentResponse> {
        const { playerId, ...body } = req;
        return await this.api.cancelTransferAccountOwnership(playerId, body);
    }

    /**
     * Updates a player object.
     * @param req Parameters to update player
     */
    public async update(req: UpdatePlayerRequest): Promise<PlayerResponse> {
        const { id, ...body } = req;
        return await this.api.updatePlayer(id, body);
    }

    /**
     * Deletes a player object.
     * @param id Player id to delete
     */
    public async delete(id: string): Promise<PlayerDeleteResponse> {
        return await this.api.deletePlayer(id);
    }
}
