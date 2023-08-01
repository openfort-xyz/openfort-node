import {
    AccountResponse,
    AccountsResponse,
    CancelTransferOwnershipRequest,
    CreateAccountRequest,
    GetAccountInventoryRequest,
    GetAccountRequest,
    InventoryResponse,
    ListAccountsRequest,
    SignPayloadRequest,
    SignPayloadResponse,
    TransactionIntentResponse,
    TransferOwnershipRequest,
} from "../model";
import { AccountsApi } from "../generated/api/accountsApi";
import { BaseApiWrapper } from "./baseApiWrapper";
import { httpErrorHandler } from "../utility/httpErrorHandler";

@httpErrorHandler
export class AccountsApiWrapper extends BaseApiWrapper<AccountsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(AccountsApi, accessToken, basePath);
    }

    /**
     * Creates an account object.
     * @param req The account to create
     */
    public async create(req: CreateAccountRequest): Promise<AccountResponse> {
        const response = await this.api.createAccount(req);
        return response.body;
    }

    /**
     * Retrieves the details of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param req Criteria to get account.
     */
    public async get(req: GetAccountRequest): Promise<AccountResponse> {
        const response = await this.api.getAccount(
            req.id,
            req.expandTransactionIntent ? ["transactionIntents"] : undefined,
        );
        return response.body;
    }

    /**
     * Retrieves the inventory of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param req Criteria to get inventory.
     */
    public async getInventory(req: GetAccountInventoryRequest): Promise<InventoryResponse> {
        const response = await this.api.getAccountInventory(req.id);
        return response.body;
    }

    /**
     * Returns a list of accounts for the given player. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param req Criteria to get the list of accounts.
     */
    public async list(req: ListAccountsRequest): Promise<AccountsResponse> {
        const response = await this.api.getAccounts(
            req.player,
            req.expandTransactionIntent ? ["transactionIntents"] : undefined,
            req.limit,
        );
        return response.body;
    }

    /**
     * Transfers ownership of an account to an address.
     * @param req Parameters to transfer ownership.
     */
    public async requestTransferOwnership(req: TransferOwnershipRequest): Promise<TransactionIntentResponse> {
        const { accountId, ...body } = req;
        const response = await this.api.requestTransferOwnership(accountId, body);
        return response.body;
    }

    /**
     * Cancel transfers ownership of an account to an address.
     * @param req Parameters to transfer ownership.
     */
    public async cancelTransferOwnership(req: CancelTransferOwnershipRequest): Promise<TransactionIntentResponse> {
        const { accountId, ...body } = req;
        const response = await this.api.cancelTransferOwnership(accountId, body);
        return response.body;
    }

    /**
     * Sign a given payload
     * @param req Parameters to sign payload
     */
    public async signPayload(req: SignPayloadRequest): Promise<SignPayloadResponse> {
        const { id, ...body } = req;
        const response = await this.api.signPayload(id, body);
        return response.body;
    }

    /**
     * Sync account state with the blockchain
     * @param id Specifies the unique account ID.
     */
    public async sync(id: string): Promise<AccountResponse> {
        const response = await this.api.syncAccount(id);
        return response.body;
    }
}
