import { BaseApiWrapper } from "./baseApiWrapper";
import {
    CreateSubscriptionRequest,
    NotificationSubscription,
    NotificationSubscriptionDeleteResponse,
    NotificationSubscriptionListQueries,
    NotificationSubscriptionListResponse,
    NotificationSubscriptionsApi,
} from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import { GetNotificationSubscriptionRequest } from "../models/getNotificationSubscriptionRequest";

@httpErrorHandler
export class NotificationSubscriptionsApiWrapper extends BaseApiWrapper<NotificationSubscriptionsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(NotificationSubscriptionsApi, accessToken, basePath);
    }

    /**
     * Create a subscription for the provided notification.
     * @param req Parameters to create a notification subscription.
     */
    public async create(req: CreateSubscriptionRequest): Promise<NotificationSubscription> {
        return await this.api.createNotificationSubscription(req);
    }

    /**
     * Returns a list of subscriptions of a notification.  The subscriptions are returned sorted by creation date, with the most recently created accounts appearing first.  By default, a maximum of 10 notification subscriptions are shown per page.
     * @param req Criteria to get notification subscriptions by.
     */
    public async list(req: NotificationSubscriptionListQueries): Promise<NotificationSubscriptionListResponse> {
        return await this.api.getNotificationSubscriptions(req.notification, req.limit, req.skip, req.order);
    }

    /**
     * Retrieves the details of an existing notification subscription.  Supply the unique notification subscription ID.
     *
     * Supply the unique notification subscription ID.
     * @param req Criteria to get notification subscription by.
     */
    public async get(req: GetNotificationSubscriptionRequest): Promise<NotificationSubscription> {
        return await this.api.getNotificationSubscription(req.id);
    }

    /**
     *  Delete a notification subscription by providing its notification subscription id.
     * @param id Id of the notification subscription
     */
    public async delete(id: string): Promise<NotificationSubscriptionDeleteResponse> {
        return await this.api.deleteNotificationSubscription(id);
    }
}
