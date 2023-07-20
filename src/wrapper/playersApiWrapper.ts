import {httpErrorHandler} from "./httpErrorHandler";
import {PlayersApi} from "../generated/api/playersApi";
import {
    AccountResponse,
    AccountsResponse,
    InventoryResponse,
    PlayerResponse,
    PlayersResponse,
    SessionResponse,
    TransactionIntentResponse,
    CreatePlayerSessionRequest,
    GetPlayerRequest,
    ListPlayerAccountsRequest,
    GetPlayerInventoryRequest,
    ListPlayersRequest,
    RevokePlayerSessionRequest,
    TransferPlayerAccountOwnershipRequest,
    UpdatePlayerRequest,
    CreatePlayerRequest,
    CreateAccountRequest,
} from "../model";
import {PACKAGE, VERSION} from "../version";

export class PlayersApiWrapper {
    private readonly _api: PlayersApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new PlayersApi(basePath);
        this._api.accessToken = accessToken;
        this._api.defaultHeaders["User-Agent"] = `${PACKAGE}@${VERSION}`;
    }

    /**
     * Creates a player object.
     * @param req Parameters to create a player
     */
    @httpErrorHandler()
    public async create(req: CreatePlayerRequest): Promise<PlayerResponse> {
        const response = await this._api.createPlayer(req);
        return response.body;
    }

    /**
     * Creates an account object for an existing player.
     * @param req Parameters to create a player account.
     */
    @httpErrorHandler()
    public async createAccount(req: CreateAccountRequest): Promise<AccountResponse> {
        const {player, ...body} = req;
        const response = await this._api.createPlayerAccount(player, body);
        return response.body;
    }

    /**
     * Creates a session object for the given player.
     * @param req Parameters to create a player session.
     */
    @httpErrorHandler()
    public async createSession(req: CreatePlayerSessionRequest): Promise<SessionResponse> {
        const {playerId, ...body} = req;
        const response = await this._api.createPlayerSession(playerId, body);
        return response.body;
    }

    /**
     * Retrieves the details of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param req Criteria to get the player.
     */
    @httpErrorHandler()
    public async get(req: GetPlayerRequest): Promise<PlayerResponse> {
        const response = await this._api.getPlayer(req.id, req.expand);
        return response.body;
    }

    /**
     * Returns a list of your accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param req Criteria to get the accounts list.
     */
    @httpErrorHandler()
    public async listAccounts(req: ListPlayerAccountsRequest): Promise<AccountsResponse> {
        const response = await this._api.getPlayerAccounts(req.id, req.expand);
        return response.body;
    }

    /**
     * Retrieves the inventory of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param req Criteria to retrieve player inventory.
     */
    @httpErrorHandler()
    public async getInventory(req: GetPlayerInventoryRequest): Promise<InventoryResponse> {
        const response = await this._api.getPlayerInventory(req.id, req.chainId);
        return response.body;
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param req Criteria to retrieve the list of the players
     */
    @httpErrorHandler()
    public async list(req?: ListPlayersRequest): Promise<PlayersResponse> {
        const response = await this._api.getPlayers(
            req?.expand,
            req?.limit,
            req?.filter ? JSON.stringify(req.filter) : undefined,
            req?.order,
            req?.skip,
        );
        return response.body;
    }

    /**
     * Creates a session object for the given player.
     * @param req Parameters to revoce the player session.
     */
    @httpErrorHandler()
    public async revokeSession(req: RevokePlayerSessionRequest): Promise<SessionResponse> {
        const {playerId, ...body} = req;
        const response = await this._api.revokePlayerSession(playerId, body);
        return response.body;
    }

    /**
     * Transfer ownership of an account to an address.
     * @param req Parameters to transfer account ownership.
     */
    @httpErrorHandler()
    public async transferAccountOwnership(
        req: TransferPlayerAccountOwnershipRequest,
    ): Promise<TransactionIntentResponse> {
        const {playerId, ...body} = req;
        const response = await this._api.transferAccountOwnership(playerId, body);
        return response.body;
    }

    /**
     * Updates a player object.
     * @param req Parameters to update player
     */
    @httpErrorHandler()
    public async update(req: UpdatePlayerRequest): Promise<PlayerResponse> {
        const {id, ...body} = req;
        const response = await this._api.updatePlayer(id, body);
        return response.body;
    }
}
