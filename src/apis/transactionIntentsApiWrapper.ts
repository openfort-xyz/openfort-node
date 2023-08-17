import {
    CreateTransactionIntentRequest,
    GetTransactionIntentRequest,
    SignatureTransactionIntentRequest,
    TransactionIntentResponse,
    TransactionIntentListResponse,
    UpdateTransactionIntentRequest,
    TransactionIntentListQueries,
} from "../models";
import { BaseApiWrapper } from "./baseApiWrapper";
import { TransactionIntentsApi } from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";

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
        return await this.api.createTransactionIntent(req);
    }

    /**
     * Retrieves a transaction intent object.
     * @param req Parameters to retrieve transaction intent
     */
    public async get(req: GetTransactionIntentRequest): Promise<TransactionIntentResponse> {
        return await this.api.getTransactionIntent(req.id);
    }

    /**
     * Returns a list of transaction intents for the given project. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param req Parameters to get list of the transaction intents
     */
    public async list(req?: TransactionIntentListQueries): Promise<TransactionIntentListResponse> {
        return await this.api.getTransactionIntents(
            req?.limit,
            req?.skip,
            req?.order,
            req?.expand,
            req?.chainId,
            req?.accountId,
            req?.playerId,
            req?.policyId,
        );
    }

    /**
     * Confirms the creation of a transaction intent with an external owner.
     * @param req Parameters to signature session
     */
    public async signature(req: SignatureTransactionIntentRequest): Promise<TransactionIntentResponse> {
        const { id, ...body } = req;
        return await this.api.signature(id, body);
    }

    /**
     * Updates transaction intent response
     * @param req Request to update transaction intent
     */
    public async updateResponse(req: UpdateTransactionIntentRequest): Promise<TransactionIntentResponse> {
        return await this.api.updateTransactionIntentResponse(req.id);
    }

    /**
     *
     * @param project
     */
    public async updateList(): Promise<TransactionIntentListResponse> {
        return await this.api.updateTransactionIntentsResponse();
    }
}
