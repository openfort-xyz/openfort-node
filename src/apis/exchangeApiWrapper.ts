import { CreateExchangeRequest, ExchangeApi, QuoteExchangeResult, TransactionIntentResponse } from "../generated";
import { BaseApiWrapper } from "./baseApiWrapper";
import { httpErrorHandler } from "../utilities/httpErrorHandler";

@httpErrorHandler
export class ExchangeApiWrapper extends BaseApiWrapper<ExchangeApi> {
    static type = "exchange";

    constructor(accessToken: string, basePath?: string) {
        super(ExchangeApi, accessToken, basePath);
    }

    /**
     * Creates token swap.
     * @param req The account to create
     */
    public async createSwap(req: CreateExchangeRequest): Promise<TransactionIntentResponse> {
        return await this.api.createSwap(req);
    }

    /**
     * Quote token swap.
     * @param req Criteria to get account.
     */
    public async quoteSwap(req: CreateExchangeRequest): Promise<QuoteExchangeResult> {
        return await this.api.quoteSwap(req);
    }
}
