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


import { CreateTransactionIntentRequest } from '../models/CreateTransactionIntentRequest';
import { InvalidRequestErrorResponse } from '../models/InvalidRequestErrorResponse';
import { SignatureRequest } from '../models/SignatureRequest';
import { SortOrder } from '../models/SortOrder';
import { TransactionIntentListResponse } from '../models/TransactionIntentListResponse';
import { TransactionIntentResponse } from '../models/TransactionIntentResponse';
import { TransactionIntentResponseExpandable } from '../models/TransactionIntentResponseExpandable';

/**
 * no description
 */
export class TransactionIntentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a transaction intent object.
     * @param createTransactionIntentRequest 
     */
    public async createTransactionIntent(createTransactionIntentRequest: CreateTransactionIntentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createTransactionIntentRequest' is not null or undefined
        if (createTransactionIntentRequest === null || createTransactionIntentRequest === undefined) {
            throw new RequiredError("TransactionIntentsApi", "createTransactionIntent", "createTransactionIntentRequest");
        }


        // Path Params
        const localVarPath = '/v1/transaction_intents';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createTransactionIntentRequest, "CreateTransactionIntentRequest", ""),
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
     * Retrieves a transaction intent object.
     * @param id 
     * @param expand 
     */
    public async getTransactionIntent(id: string, expand?: Array<TransactionIntentResponseExpandable>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TransactionIntentsApi", "getTransactionIntent", "id");
        }



        // Path Params
        const localVarPath = '/v1/transaction_intents/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "Array<TransactionIntentResponseExpandable>", ""));
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

    /**
     * Returns a list of transaction intents for the given project. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param limit 
     * @param skip 
     * @param order 
     * @param expand 
     * @param chainId 
     * @param accountId 
     * @param playerId 
     * @param policyId 
     */
    public async getTransactionIntents(limit?: number, skip?: number, order?: SortOrder, expand?: Array<TransactionIntentResponseExpandable>, chainId?: number, accountId?: Array<string>, playerId?: Array<string>, policyId?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/v1/transaction_intents';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "double"));
        }

        // Query Params
        if (skip !== undefined) {
            requestContext.setQueryParam("skip", ObjectSerializer.serialize(skip, "number", "double"));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "SortOrder", ""));
        }

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "Array<TransactionIntentResponseExpandable>", ""));
        }

        // Query Params
        if (chainId !== undefined) {
            requestContext.setQueryParam("chainId", ObjectSerializer.serialize(chainId, "number", "double"));
        }

        // Query Params
        if (accountId !== undefined) {
            requestContext.setQueryParam("accountId", ObjectSerializer.serialize(accountId, "Array<string>", ""));
        }

        // Query Params
        if (playerId !== undefined) {
            requestContext.setQueryParam("playerId", ObjectSerializer.serialize(playerId, "Array<string>", ""));
        }

        // Query Params
        if (policyId !== undefined) {
            requestContext.setQueryParam("policyId", ObjectSerializer.serialize(policyId, "Array<string>", ""));
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

    /**
     * Confirms the creation of a transaction intent with an external owner.
     * @param id 
     * @param signatureRequest 
     */
    public async signature(id: string, signatureRequest: SignatureRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TransactionIntentsApi", "signature", "id");
        }


        // verify required parameter 'signatureRequest' is not null or undefined
        if (signatureRequest === null || signatureRequest === undefined) {
            throw new RequiredError("TransactionIntentsApi", "signature", "signatureRequest");
        }


        // Path Params
        const localVarPath = '/v1/transaction_intents/{id}/signature'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(signatureRequest, "SignatureRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["pk"]
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
     * @param id 
     */
    public async updateTransactionIntentResponse(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("TransactionIntentsApi", "updateTransactionIntentResponse", "id");
        }


        // Path Params
        const localVarPath = '/v1/transaction_intents/{id}/update_response'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
     */
    public async updateTransactionIntentsResponse(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/transaction_intents/update_response';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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

}

export class TransactionIntentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTransactionIntent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTransactionIntent(response: ResponseContext): Promise<TransactionIntentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TransactionIntentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentResponse", ""
            ) as TransactionIntentResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Request has invalid parameters.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Error response.", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TransactionIntentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentResponse", ""
            ) as TransactionIntentResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransactionIntent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransactionIntent(response: ResponseContext): Promise<TransactionIntentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TransactionIntentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentResponse", ""
            ) as TransactionIntentResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TransactionIntentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentResponse", ""
            ) as TransactionIntentResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransactionIntents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransactionIntents(response: ResponseContext): Promise<TransactionIntentListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TransactionIntentListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentListResponse", ""
            ) as TransactionIntentListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TransactionIntentListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentListResponse", ""
            ) as TransactionIntentListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to signature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async signature(response: ResponseContext): Promise<TransactionIntentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TransactionIntentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentResponse", ""
            ) as TransactionIntentResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Error response.", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TransactionIntentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentResponse", ""
            ) as TransactionIntentResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTransactionIntentResponse
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateTransactionIntentResponse(response: ResponseContext): Promise<TransactionIntentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TransactionIntentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentResponse", ""
            ) as TransactionIntentResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Error response.", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TransactionIntentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentResponse", ""
            ) as TransactionIntentResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTransactionIntentsResponse
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateTransactionIntentsResponse(response: ResponseContext): Promise<TransactionIntentListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TransactionIntentListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentListResponse", ""
            ) as TransactionIntentListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Error response.", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TransactionIntentListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentListResponse", ""
            ) as TransactionIntentListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
