import { BaseApiWrapper } from "./baseApiWrapper";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import {
    BaseEntityListResponseSubscriptionResponse,
    CreateSubscriptionRequest,
    SubscriptionDeleteResponse,
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
     * Create a subscription for the provided notification.
     * @param req Parameters to create a notification subscription.
     */
    public async create(req: CreateSubscriptionRequest): Promise<SubscriptionResponse> {
        return await this.api.createSubscription(req);
    }

    /**
     * Returns a list of subscriptions of a notification.  The subscriptions are returned sorted by creation date, with the most recently created accounts appearing first.  By default, a maximum of 10 notification subscriptions are shown per page.
     * @param req Criteria to get notification subscriptions by.
     */
    public async list(): Promise<BaseEntityListResponseSubscriptionResponse> {
        return await this.api.getSubscriptions();
    }

    /**
     * Retrieves the details of an existing notification subscription.  Supply the unique notification subscription ID.
     *
     * Supply the unique notification subscription ID.
     * @param req Criteria to get notification subscription by.
     */
    public async get(req: GetSubscriptionRequest): Promise<SubscriptionResponse> {
        return await this.api.getSubscription(req.id);
    }

    /**
     *  Delete a notification subscription by providing its notification subscription id.
     * @param id Id of the notification subscription
     */
    public async delete(id: string): Promise<SubscriptionDeleteResponse> {
        return await this.api.deleteSubscription(id);
    }
}
