import {
    CreateTransactionIntentRequest,
    GetTransactionIntentRequest,
    ListTransactionIntentsRequest,
    SignatureTransactionIntentRequest,
    TransactionIntentResponse,
    TransactionIntentsResponse,
    UpdateTransactionIntentRequest,
} from "../model";
import { BaseApiWrapper } from "./baseApiWrapper";
import { TransactionIntentsApi } from "../generated/api/transactionIntentsApi";
import { httpErrorHandler } from "../utility/httpErrorHandler";

@httpErrorHandler
export class TransactionIntentsApiWrapper extends BaseApiWrapper<TransactionIntentsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(TransactionIntentsApi, accessToken, basePath);
    }

    /**
     * Creates a transaction intent object.
     * @param req Parameters to create transaction intent
     */
    public async create(req: CreateTransactionIntentRequest): Promise<TransactionIntentResponse> {
        const response = await this.api.createTransactionIntent(req);
        return response.body;
    }

    /**
     * Retrieves a transaction intent object.
     * @param req Parameters to retrieve transaction intent
     */
    public async get(req: GetTransactionIntentRequest): Promise<TransactionIntentResponse> {
        const response = await this.api.getTransactionIntent(req.id);
        return response.body;
    }

    /**
     * Returns a list of transaction intents for the given project. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param req Parameters to get list of the transaction intents
     */
    public async list(req?: ListTransactionIntentsRequest): Promise<TransactionIntentsResponse> {
        const response = await this.api.getTransactionIntents(
            req?.limit,
            req?.skip,
            req?.order,
            req?.expand,
            req?.filter?.accountId,
            req?.filter?.chainId,
            req?.filter?.playerId,
            req?.filter?.policyId,
        );
        return response.body;
    }

    /**
     * Confirms the creation of a transaction intent with an external owner.
     * @param req Parameters to signature session
     */
    public async signature(req: SignatureTransactionIntentRequest): Promise<TransactionIntentResponse> {
        const { id, ...body } = req;
        const response = await this.api.signature(id, body);
        return response.body;
    }

    /**
     * Updates transaction intent response
     * @param req Request to update transaction intent
     */
    public async updateResponse(req: UpdateTransactionIntentRequest): Promise<TransactionIntentResponse> {
        const response = await this.api.updateTransactionIntentResponse(req.id);
        return response.body;
    }

    /**
     *
     * @param project
     */
    public async updateList(): Promise<TransactionIntentsResponse> {
        const response = await this.api.updateTransactionIntentsResponse();
        return response.body;
    }
}
