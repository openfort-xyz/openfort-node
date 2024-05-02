import { BaseApiWrapper } from "./baseApiWrapper";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import {
    CreateSubscriptionRequest,
    SubscriptionDeleteResponse,
    SubscriptionListResponse,
    SubscriptionResponse,
    SubscriptionsApi,
} from "../generated";
import { GetSubscriptionRequest } from "../models/getSubscriptionRequest";

@httpErrorHandler
export class SubscriptionsApiWrapper extends BaseApiWrapper<SubscriptionsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(SubscriptionsApi, accessToken, basePath);
    }

    /**
     * Create a subscription.
     * @param req Parameters to create a subscription.
     */
    public async create(req: CreateSubscriptionRequest): Promise<SubscriptionResponse> {
        return await this.api.createSubscription(req);
    }

    /**
     * Returns a list of subscriptions.  The subscriptions are returned sorted by creation date, with the most recently created appearing first.  By default, a maximum of 10 subscriptions are shown per page.
     * @param req Criteria to get subscriptions by.
     */
    public async list(): Promise<SubscriptionListResponse> {
        return await this.api.getSubscriptions();
    }

    /**
     * Retrieves the details of an existing subscription.  Supply the unique subscription ID.
     *
     * Supply the unique subscription ID.
     * @param req Criteria to get subscription by.
     */
    public async get(req: GetSubscriptionRequest): Promise<SubscriptionResponse> {
        return await this.api.getSubscription(req.id);
    }

    /**
     *  Delete a subscription by providing its subscription id.
     * @param id Id of the subscription
     */
    public async delete(id: string): Promise<SubscriptionDeleteResponse> {
        return await this.api.deleteSubscription(id);
    }
}
