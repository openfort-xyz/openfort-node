import { AccountResponse } from '../generated/model/accountResponse';
import { AccountsResponse } from '../generated/model/accountsResponse';
import { InventoryResponse } from '../generated/model/inventoryResponse';
import { PlayerResponse } from '../generated/model/playerResponse';
import { PlayersResponse } from '../generated/model/playersResponse';
import { SessionResponse } from '../generated/model/sessionResponse';
import { TransactionIntentResponse } from '../generated/model/transactionIntentResponse';
import {httpErrorHandler} from "./http-error-handler";
import {PlayersApi} from "../generated/api/playersApi";
import {CreatePlayerRequest} from "../model/createPlayerRequest";
import {CreatePlayerAccountRequest} from "../model/createPlayerAccountRequest";
import {CreatePlayerSessionRequest} from "../model/createPlayerSessionRequest";
import {GetPlayerRequest} from "../model/getPlayerRequest";
import {ListPlayerAccountsRequest} from "../model/listPlayerAccountsRequest";
import {GetPlayerInventoryRequest} from "../model/getPlayerInventoryRequest";
import {ListPlayersRequest} from "../model/listPlayersRequest";
import {RevokePlayerSessionRequest} from "../model/revokePlayerSessionRequest";
import {TransferAccountOwnershipRequest} from "../model/transferAccountOwnershipRequest";
import {UpdatePlayerRequest} from "../model/updatePlayerRequest";

export class PlayersApiWrapper {
    private readonly _api: PlayersApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new PlayersApi(basePath);
        this._api.accessToken = accessToken;
    }

    /**
     * Creates a player object.
     * @param req Parameters to create a player
     */
    @httpErrorHandler()
    public async create(req: CreatePlayerRequest) : Promise<PlayerResponse> {
        const response = await this._api.createPlayer(req.name, req.description, req.project);
        return response.body;
    }

    /**
     * Creates an account object for an existing player.
     * @param req Parameters to create a player account.
     */
    @httpErrorHandler()
    public async createAccount(req: CreatePlayerAccountRequest) : Promise<AccountResponse> {
        const response = await this._api.createPlayerAccount(req.id, req.chain_id, req.project, req.external_owner_address);
        return response.body;
    }

    /**
     * Creates a session object for the given player.
     * @param req Parameters to create a player session.
     */
    @httpErrorHandler()
    public async createSession(req: CreatePlayerSessionRequest) : Promise<SessionResponse> {
        const response = await this._api.createPlayerSession(req.id, req.address, req.chain_id, req.valid_until, req.valid_after, req.policy, req.external_owner_address, req.whitelist, req.limit);
        return response.body;
    }

    /**
     * Retrieves the details of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param req Criteria to get the player.
     */
    @httpErrorHandler()
    public async get(req: GetPlayerRequest) : Promise<PlayerResponse> {
        const response = await this._api.getPlayer(req.id, req.project, req.expand);
        return response.body;
    }

    /**
     * Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param req Criteria to get the accounts list.
     */
    @httpErrorHandler()
    public async listAccounts(req: ListPlayerAccountsRequest) : Promise<AccountsResponse> {
        const response = await this._api.getPlayerAccounts(req.id, req.expand, req.project);
        return response.body;
    }

    /**
     * Retrieves the inventory of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param req Criteria to retrieve player inventory.
     */
    @httpErrorHandler()
    public async getInventory(req: GetPlayerInventoryRequest) : Promise<InventoryResponse> {
        const response = await this._api.getPlayerInventory(req.id, req.chain_id, req.project);
        return response.body;
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param req Criteria to retrieve the list of the players
     */
    @httpErrorHandler()
    public async list(req?: ListPlayersRequest) : Promise<PlayersResponse> {
        const response = await this._api.getPlayers(req?.expand, req?.limit, req?.project, req?.filter, req?.order, req?.skip);
        return response.body;
    }

    /**
     * Creates a session object for the given player.
     * @param req Parameters to revoce the player session.
     */
    @httpErrorHandler()
    public async revokeSession(req: RevokePlayerSessionRequest) : Promise<SessionResponse> {
        const response = await this._api.revokePlayerSession(req.id, req.address, req.chain_id, req.policy);
        return response.body;
    }

    /**
     * Transfer ownership of an account to an address.
     * @param req Parameters to transfer account ownership.
     */
    @httpErrorHandler()
    public async transferAccountOwnership(req: TransferAccountOwnershipRequest) : Promise<TransactionIntentResponse> {
        const response = await this._api.transferAccountOwnership(req.id, req.policy, req.chain_id, req.new_owner_address, req.project, req.player);
        return response.body;
    }

    /**
     * Updates a player object.
     * @param req Parameters to update player
     */
    @httpErrorHandler()
    public async update(req: UpdatePlayerRequest) : Promise<PlayerResponse> {
        const response = await this._api.updatePlayer(req.id, req.name, req.description, req.project);
        return response.body;
    }
}
