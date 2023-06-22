import {AccountResponse} from "../generated/model/accountResponse";
import {AccountsResponse} from "../generated/model/accountsResponse";
import {InventoryResponse} from "../generated/model/inventoryResponse";
import {TransactionIntentResponse} from "../generated/model/transactionIntentResponse";
import {AccountsApi} from "../generated/api/accountsApi";
import {CreateAccountRequest} from "../model/createAccountRequest";
import {httpErrorHandler} from "./http-error-handler";
import {GetAccountRequest} from "../model/getAccountRequest";
import {GetAccountInventoryRequest} from "../model/getAccountInventoryRequest";
import {ListAccountsRequest} from "../model/listAccountsRequest";
import {TransferOwnershipRequest} from "../model/transferOwnershipRequest";

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
    public async create(req: CreateAccountRequest): Promise<AccountResponse> {
        const response = await this._api.createAccount(
            req.chain_id,
            req.player,
            req.project,
            req.external_owner_address,
        );
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
    public async transferOwnership(req: TransferOwnershipRequest): Promise<TransactionIntentResponse> {
        const response = await this._api.transferOwnership(req.id, req.new_owner_address, req.policy, req.project);
        return response.body;
    }
}
