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


import { CreateNotificationSubscriptionRequest } from '../models/CreateNotificationSubscriptionRequest';
import { NotificationSubscription } from '../models/NotificationSubscription';
import { NotificationSubscriptionDeleteResponse } from '../models/NotificationSubscriptionDeleteResponse';
import { NotificationSubscriptionListResponse } from '../models/NotificationSubscriptionListResponse';
import { SortOrder } from '../models/SortOrder';

/**
 * no description
 */
export class NotificationSubscriptionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a subscription for the provided notification.
     * Create a notification subscription object.
     * @param createNotificationSubscriptionRequest 
     */
    public async createNotificationSubscription(createNotificationSubscriptionRequest: CreateNotificationSubscriptionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createNotificationSubscriptionRequest' is not null or undefined
        if (createNotificationSubscriptionRequest === null || createNotificationSubscriptionRequest === undefined) {
            throw new RequiredError("NotificationSubscriptionsApi", "createNotificationSubscription", "createNotificationSubscriptionRequest");
        }


        // Path Params
        const localVarPath = '/v1/notification_subscriptions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createNotificationSubscriptionRequest, "CreateNotificationSubscriptionRequest", ""),
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
     * Delete a notification subscription by providing its notification subscription id.
     * Deletes a notification subscription object.
     * @param id Specifies the unique notification subscription ID (starts with ntr_).
     */
    public async deleteNotificationSubscription(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NotificationSubscriptionsApi", "deleteNotificationSubscription", "id");
        }


        // Path Params
        const localVarPath = '/v1/notification_subscriptions/{id}'
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
     * Retrieves the details of an existing notification subscription.  Supply the unique notification subscription ID.
     * Get existing notification subscription.
     * @param id Specifies the unique notification subscription ID (starts with not_).
     */
    public async getNotificationSubscription(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NotificationSubscriptionsApi", "getNotificationSubscription", "id");
        }


        // Path Params
        const localVarPath = '/v1/notification_subscriptions/{id}'
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
     * Returns a list of subscriptions of a notification.  Subscriptions define the the way you will get notified and the target of the notification.  Subscriptions are returned sorted by creation date, with the most recently created accounts appearing first.  By default, a maximum of 10 notification subscriptions are shown per page.
     * List notification subscriptions of a notification.
     * @param notification Specifies the unique notification ID (starts with not_).
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     */
    public async getNotificationSubscriptions(notification: string, limit?: number, skip?: number, order?: SortOrder, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'notification' is not null or undefined
        if (notification === null || notification === undefined) {
            throw new RequiredError("NotificationSubscriptionsApi", "getNotificationSubscriptions", "notification");
        }





        // Path Params
        const localVarPath = '/v1/notification_subscriptions';

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

export class NotificationSubscriptionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNotificationSubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNotificationSubscription(response: ResponseContext): Promise<NotificationSubscription > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotificationSubscription = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationSubscription", ""
            ) as NotificationSubscription;
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
            const body: NotificationSubscription = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationSubscription", ""
            ) as NotificationSubscription;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNotificationSubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteNotificationSubscription(response: ResponseContext): Promise<NotificationSubscriptionDeleteResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotificationSubscriptionDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationSubscriptionDeleteResponse", ""
            ) as NotificationSubscriptionDeleteResponse;
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
            const body: NotificationSubscriptionDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationSubscriptionDeleteResponse", ""
            ) as NotificationSubscriptionDeleteResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNotificationSubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNotificationSubscription(response: ResponseContext): Promise<NotificationSubscription > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotificationSubscription = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationSubscription", ""
            ) as NotificationSubscription;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NotificationSubscription = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationSubscription", ""
            ) as NotificationSubscription;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNotificationSubscriptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNotificationSubscriptions(response: ResponseContext): Promise<NotificationSubscriptionListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotificationSubscriptionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationSubscriptionListResponse", ""
            ) as NotificationSubscriptionListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NotificationSubscriptionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationSubscriptionListResponse", ""
            ) as NotificationSubscriptionListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
