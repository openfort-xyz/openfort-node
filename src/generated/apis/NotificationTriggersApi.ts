// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateNotificationTriggerRequest } from '../models/CreateNotificationTriggerRequest';
import { NotificationTriggerDeleteResponse } from '../models/NotificationTriggerDeleteResponse';
import { NotificationTriggerListResponse } from '../models/NotificationTriggerListResponse';
import { NotificationTriggerResponse } from '../models/NotificationTriggerResponse';
import { SortOrder } from '../models/SortOrder';

/**
 * no description
 */
export class NotificationTriggersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a trigger for the provided notification.
     * Create a notification trigger object.
     * @param createNotificationTriggerRequest 
     */
    public async createNotificationTrigger(createNotificationTriggerRequest: CreateNotificationTriggerRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createNotificationTriggerRequest' is not null or undefined
        if (createNotificationTriggerRequest === null || createNotificationTriggerRequest === undefined) {
            throw new RequiredError("NotificationTriggersApi", "createNotificationTrigger", "createNotificationTriggerRequest");
        }


        // Path Params
        const localVarPath = '/v1/notification_triggers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createNotificationTriggerRequest, "CreateNotificationTriggerRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["sk"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a notification trigger by providing its notification trigger id.
     * Deletes a notification trigger object.
     * @param id Specifies the unique notification trigger ID (starts with ntr_).
     */
    public async deleteNotificationTrigger(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NotificationTriggersApi", "deleteNotificationTrigger", "id");
        }


        // Path Params
        const localVarPath = '/v1/notification_triggers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["sk"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves the details of an existing notification trigger.  Supply the unique notification trigger ID.
     * Get existing notification trigger.
     * @param id Specifies the unique notification trigger ID (starts with ntr_).
     */
    public async getNotificationTrigger(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NotificationTriggersApi", "getNotificationTrigger", "id");
        }


        // Path Params
        const localVarPath = '/v1/notification_triggers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["sk"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a list of triggers of a notification.  Triggers define the conditions that will trigger a notification.  Triggers are returned sorted by creation date, with the most recently created accounts appearing first.  By default, a maximum of 10 notification triggers are shown per page.
     * List notification triggers of a notification.
     * @param notification Specifies the unique notification ID (starts with not_).
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     */
    public async getNotificationTriggers(notification: string, limit?: number, skip?: number, order?: SortOrder, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'notification' is not null or undefined
        if (notification === null || notification === undefined) {
            throw new RequiredError("NotificationTriggersApi", "getNotificationTriggers", "notification");
        }





        // Path Params
        const localVarPath = '/v1/notification_triggers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (skip !== undefined) {
            requestContext.setQueryParam("skip", ObjectSerializer.serialize(skip, "number", "int32"));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "SortOrder", ""));
        }

        // Query Params
        if (notification !== undefined) {
            requestContext.setQueryParam("notification", ObjectSerializer.serialize(notification, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["sk"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class NotificationTriggersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNotificationTrigger
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNotificationTrigger(response: ResponseContext): Promise<NotificationTriggerResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotificationTriggerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationTriggerResponse", ""
            ) as NotificationTriggerResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NotificationTriggerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationTriggerResponse", ""
            ) as NotificationTriggerResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNotificationTrigger
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteNotificationTrigger(response: ResponseContext): Promise<NotificationTriggerDeleteResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotificationTriggerDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationTriggerDeleteResponse", ""
            ) as NotificationTriggerDeleteResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NotificationTriggerDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationTriggerDeleteResponse", ""
            ) as NotificationTriggerDeleteResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNotificationTrigger
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNotificationTrigger(response: ResponseContext): Promise<NotificationTriggerResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotificationTriggerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationTriggerResponse", ""
            ) as NotificationTriggerResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NotificationTriggerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationTriggerResponse", ""
            ) as NotificationTriggerResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNotificationTriggers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNotificationTriggers(response: ResponseContext): Promise<NotificationTriggerListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotificationTriggerListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationTriggerListResponse", ""
            ) as NotificationTriggerListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NotificationTriggerListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationTriggerListResponse", ""
            ) as NotificationTriggerListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
