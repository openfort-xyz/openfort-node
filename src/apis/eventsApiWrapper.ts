import {
  type CreateEventRequest,
  type EventDeleteResponse,
  type EventListQueries,
  type EventListResponse,
  type EventResponse,
  EventsApi,
} from '../generated'
import type { GetEventRequest } from '../models/getEventRequest'
import { httpErrorHandler } from '../utilities/httpErrorHandler'
import { BaseApiWrapper } from './baseApiWrapper'

@httpErrorHandler
export class EventsApiWrapper extends BaseApiWrapper<EventsApi> {
  static type = 'events'

  constructor(accessToken: string, basePath?: string) {
    super(EventsApi, accessToken, basePath)
  }

  /**
   * Create a event.
   * @param req Parameters to create a event.
   */
  public async create(req: CreateEventRequest): Promise<EventResponse> {
    return await this.api.createEvent(req)
  }

  /**
   * Returns a list of events.  The events are returned sorted by creation date, with the most recently created appearing first.  By default, a maximum of 10 events are shown per page.
   * @param req Criteria to get events by.
   */
  public async list(req: EventListQueries): Promise<EventListResponse> {
    return await this.api.getEvents(req.limit, req.skip, req.order, req.name)
  }

  /**
   * Retrieves the details of an existing event.  Supply the unique event ID.
   *
   * Supply the unique event ID.
   * @param req Criteria to get event by.
   */
  public async get(req: GetEventRequest): Promise<EventResponse> {
    return await this.api.getEvent(req.id)
  }

  /**
   * Delete a event by providing its event id.
   * @param id Id of the event
   */
  public async delete(id: string): Promise<EventDeleteResponse> {
    return await this.api.deleteEvent(id)
  }
}
