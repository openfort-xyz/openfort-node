import { BaseApiWrapper } from "./baseApiWrapper";
import {
    BaseEntityListResponseEventResponse,
    CreateEventRequest,
    EventDeleteResponse,
    EventListQueries,
    EventResponse,
    EventsApi,
} from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import { GetEventRequest } from "../models/getEventRequest";

@httpErrorHandler
export class EventsApiWrapper extends BaseApiWrapper<EventsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(EventsApi, accessToken, basePath);
    }

    /**
     * Create a trigger for the provided notification.
     * @param req Parameters to create a notification trigger.
     */
    public async create(req: CreateEventRequest): Promise<EventResponse> {
        return await this.api.createEvent(req);
    }

    /**
     * Returns a list of triggers of a notification.  The triggers are returned sorted by creation date, with the most recently created accounts appearing first.  By default, a maximum of 10 notification triggers are shown per page.
     * @param req Criteria to get notification triggers by.
     */
    public async list(req: EventListQueries): Promise<BaseEntityListResponseEventResponse> {
        return await this.api.getEvents(req.limit, req.skip, req.order, req.name, req.type);
    }

    /**
     * Retrieves the details of an existing notification trigger.  Supply the unique notification trigger ID.
     *
     * Supply the unique notification trigger ID.
     * @param req Criteria to get notification trigger by.
     */
    public async get(req: GetEventRequest): Promise<EventResponse> {
        return await this.api.getEvent(req.id);
    }

    /**
     * Delete a notification trigger by providing its notification trigger id.
     * @param id Id of the notification trigger
     */
    public async delete(id: string): Promise<EventDeleteResponse> {
        return await this.api.deleteEvent(id);
    }
}
