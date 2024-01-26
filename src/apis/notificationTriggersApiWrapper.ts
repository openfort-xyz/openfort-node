import { BaseApiWrapper } from "./baseApiWrapper";
import {
    CreateNotificationTriggerRequest,
    NotificationTriggerDeleteResponse,
    NotificationTriggerListQueries,
    NotificationTriggerListResponse,
    NotificationTriggerResponse,
    NotificationTriggersApi,
} from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import { GetNotificationTriggerRequest } from "../models/getNotificationTriggerRequest";

@httpErrorHandler
export class NotificationTriggersApiWrapper extends BaseApiWrapper<NotificationTriggersApi> {
    constructor(accessToken: string, basePath?: string) {
        super(NotificationTriggersApi, accessToken, basePath);
    }

    /**
     * Create a trigger for the provided notification.
     * @param req Parameters to create a notification trigger.
     */
    public async create(req: CreateNotificationTriggerRequest): Promise<NotificationTriggerResponse> {
        return await this.api.createNotificationTrigger(req);
    }

    /**
     * Returns a list of triggers of a notification.  The triggers are returned sorted by creation date, with the most recently created accounts appearing first.  By default, a maximum of 10 notification triggers are shown per page.
     * @param req Criteria to get notification triggers by.
     */
    public async list(req: NotificationTriggerListQueries): Promise<NotificationTriggerListResponse> {
        return await this.api.getNotificationTriggers(req.notification, req.limit, req.skip, req.order);
    }

    /**
     * Retrieves the details of an existing notification trigger.  Supply the unique notification trigger ID.
     *
     * Supply the unique notification trigger ID.
     * @param req Criteria to get notification trigger by.
     */
    public async get(req: GetNotificationTriggerRequest): Promise<NotificationTriggerResponse> {
        return await this.api.getNotificationTrigger(req.id);
    }

    /**
     * Delete a notification trigger by providing its notification trigger id.
     * @param id Id of the notification trigger
     */
    public async delete(id: string): Promise<NotificationTriggerDeleteResponse> {
        return await this.api.deleteNotificationTrigger(id);
    }
}
