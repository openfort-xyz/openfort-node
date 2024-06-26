import {
    CreateTransactionIntentRequest,
    GetTransactionIntentRequest,
    SignatureTransactionIntentRequest,
    TransactionIntentResponse,
    TransactionIntentListResponse,
    TransactionIntentListQueries,
    EstimateTransactionIntentGasResult,
} from "../models";
import { BaseApiWrapper } from "./baseApiWrapper";
import {createConfiguration, ResponseContext, TransactionIntentsApi} from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import {HeadersMiddleware} from "../utilities/middleware";

@httpErrorHandler
export class TransactionIntentsApiWrapper extends BaseApiWrapper<TransactionIntentsApi> {
    static type = "transactionIntents";

    constructor(accessToken: string, basePath?: string) {
        super(TransactionIntentsApi, accessToken, basePath);
    }

    /**
     * Estimate the gas cost of creating a transaction intent and putting it onchain.
     * @param req Parameters to estimate transaction intent
     */
    public async estimateCost(req: CreateTransactionIntentRequest): Promise<EstimateTransactionIntentGasResult> {
        return await this.api.estimateTransactionIntentCost(req);
    }

    /**
     * Creates a transaction intent object.
     * @param req Parameters to create transaction intent
     * @param madeFor In case of ecosystems, the publishable key of the game wants to create the transaction intent
     */
    public async create(req: CreateTransactionIntentRequest, madeFor?: string): Promise<TransactionIntentResponse> {
        if (madeFor) {
            const config = createConfiguration({
                middleware: [
                    new HeadersMiddleware({
                        "X-Openfort-Made-For": madeFor,
                    })
                ]
            })
            return await this.api.createTransactionIntent(req, config);
        }
        return await this.api.createTransactionIntent(req);
    }

    /**
     * Retrieves a transaction intent object.
     * @param req Parameters to retrieve transaction intent
     */
    public async get(req: GetTransactionIntentRequest): Promise<TransactionIntentResponse> {
        return await this.api.getTransactionIntent(req.id, req.expand);
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
            req?.account,
            req?.player,
            req?.status,
            req?.policy,
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
}
