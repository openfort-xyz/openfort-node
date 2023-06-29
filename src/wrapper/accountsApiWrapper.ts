import {httpErrorHandler} from "./http-error-handler";
import {AccountsApi} from "../generated/api/accountsApi";
import {
    AccountResponse,
    AccountsResponse,
    InventoryResponse,
    TransactionIntentResponse,
    AccountRequest,
    GetAccountRequest,
    GetAccountInventoryRequest,
    ListAccountsRequest,
    TransferAccountOwnershipRequest,
} from "../model";

export class AccountsApiWrapper {
    private readonly _api: AccountsApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new AccountsApi(basePath);
        this._api.accessToken = accessToken;
    }

    /**
     * Creates an account object.
     * @param req The account to create
     */
    @httpErrorHandler()
    public async create(req: AccountRequest): Promise<AccountResponse> {
        const response = await this._api.createAccount(req);
        return response.body;
    }

    /**
     * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param req Criteria to get account.
     */
    @httpErrorHandler()
    public async get(req: GetAccountRequest): Promise<AccountResponse> {
        const response = await this._api.getAccount(req.id, req.expand, req.project);
        return response.body;
    }

    /**
     * Retrieves the inventory of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param req Criteria to get inventory.
     */
    @httpErrorHandler()
    public async getInventory(req: GetAccountInventoryRequest): Promise<InventoryResponse> {
        const response = await this._api.getAccountInventory(req.id, req.project);
        return response.body;
    }

    /**
     * Returns a list of accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param req Criteria to get the list of accounts.
     */
    @httpErrorHandler()
    public async list(req: ListAccountsRequest): Promise<AccountsResponse> {
        const response = await this._api.getAccounts(req.player, req.expand, req.limit, req.project);
        return response.body;
    }

    /**
     * Transfers ownership of an account to an address.
     * @param req Parameters to transfer ownership.
     */
    @httpErrorHandler()
    public async transferOwnership(req: TransferAccountOwnershipRequest): Promise<TransactionIntentResponse> {
        const {id, ...body} = req;
        const response = await this._api.transferOwnership(id, body);
        return response.body;
    }
}
