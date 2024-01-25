import { BaseApiWrapper } from "./baseApiWrapper";
import {
    CreateNotificationRequest,
    NotificationDeleteResponse,
    NotificationListQueries,
    NotificationListResponse,
    NotificationResponse,
} from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import { NotificationsApi } from "../generated";
import { GetNotificationRequest } from "../models/getNotificationRequest";

@httpErrorHandler
export class NotificationsApiWrapper extends BaseApiWrapper<NotificationsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(NotificationsApi, accessToken, basePath);
    }

    /**
     * Create a notification object.
     * @param req Parameters to create a notification.
     */
    public async create(req: CreateNotificationRequest): Promise<NotificationResponse> {
        return await this.api.createNotification(req);
    }

    /**
     * Returns a list of your allow functions for the given policy. The allow functions are returned sorted by creation date, with the most recently created allow functions appearing first.
     * @param req Criteria to get notifications by.
     */
    public async list(req: NotificationListQueries): Promise<NotificationListResponse> {
        return await this.api.getNotifications(req.limit, req.skip, req.order, req.expand);
    }

    /**
     * Retrieves the details of an existing notification.
     *
     * Supply the unique notification ID.
     * @param req Criteria to get notification by.
     */
    public async get(req: GetNotificationRequest): Promise<NotificationResponse> {
        return await this.api.getNotification(req.id, req.expand);
    }

    /**
     * Deletes a notification object.
     * @param id Id of the notification to delete
     */
    public async delete(id: string): Promise<NotificationDeleteResponse> {
        return await this.api.deleteNotification(id);
    }
}
