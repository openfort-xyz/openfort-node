import { CreatePaymasterRequest, PaymasterApi, PaymasterDeleteResponse, PaymasterResponse } from "../generated";
import { BaseApiWrapper } from "./baseApiWrapper";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import { GetPaymasterRequest } from "../models/getPaymasterRequest";
import { UpdatePaymasterRequest } from "../models/updatePaymasterRequest";

@httpErrorHandler
export class PaymasterApiWrapper extends BaseApiWrapper<PaymasterApi> {
    constructor(accessToken: string, basePath?: string) {
        super(PaymasterApi, accessToken, basePath);
    }

    /**
     * Create a new paymaster.
     * @param req The paymaster to create
     */
    public async create(req: CreatePaymasterRequest): Promise<PaymasterResponse> {
        return await this.api.createPaymaster(req);
    }

    /**
     * Returns the paymaster with the given id.
     * @param req Criteria to get paymaster.
     */
    public async get(req: GetPaymasterRequest): Promise<PaymasterResponse> {
        return await this.api.getPaymaster(req.id);
    }

    /**
     * Updates a paymaster object.
     * @param req Parameters to update paymaster
     */
    public async update(req: UpdatePaymasterRequest): Promise<PaymasterResponse> {
        const { id, ...body } = req;
        return await this.api.updatePaymaster(id, body);
    }

    /**
     * Deletes a paymaster object.
     * @param id Paymaster id to delete
     */
    public async delete(id: string): Promise<PaymasterDeleteResponse> {
        return await this.api.deletePaymaster(id);
    }
}
