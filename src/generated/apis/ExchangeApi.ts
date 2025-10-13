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


import { CreateExchangeRequest } from '../models/CreateExchangeRequest';
import { InvalidRequestErrorResponse } from '../models/InvalidRequestErrorResponse';
import { QuoteExchangeResult } from '../models/QuoteExchangeResult';
import { TransactionIntentResponse } from '../models/TransactionIntentResponse';

/**
 * no description
 */
export class ExchangeApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates token swap.
     * Create token swap.
     * @param createExchangeRequest 
     */
    public async createSwap(createExchangeRequest: CreateExchangeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createExchangeRequest' is not null or undefined
        if (createExchangeRequest === null || createExchangeRequest === undefined) {
            throw new RequiredError("ExchangeApi", "createSwap", "createExchangeRequest");
        }


        // Path Params
        const localVarPath = '/v1/exchange';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createExchangeRequest, "CreateExchangeRequest", ""),
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
     * Quote token swap.
     * Quote token swap.
     * @param createExchangeRequest 
     */
    public async quoteSwap(createExchangeRequest: CreateExchangeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createExchangeRequest' is not null or undefined
        if (createExchangeRequest === null || createExchangeRequest === undefined) {
            throw new RequiredError("ExchangeApi", "quoteSwap", "createExchangeRequest");
        }


        // Path Params
        const localVarPath = '/v1/exchange/quote';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createExchangeRequest, "CreateExchangeRequest", ""),
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

}

export class ExchangeApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSwap
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSwap(response: ResponseContext): Promise<TransactionIntentResponse > {
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
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
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
     * @params response Response returned by the server for a request to quoteSwap
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async quoteSwap(response: ResponseContext): Promise<QuoteExchangeResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: QuoteExchangeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QuoteExchangeResult", ""
            ) as QuoteExchangeResult;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InvalidRequestErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvalidRequestErrorResponse", ""
            ) as InvalidRequestErrorResponse;
            throw new ApiException<InvalidRequestErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: QuoteExchangeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QuoteExchangeResult", ""
            ) as QuoteExchangeResult;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
