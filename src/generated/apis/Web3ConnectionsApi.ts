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


import { CreateWeb3ConnectionRequest } from '../models/CreateWeb3ConnectionRequest';
import { SortOrder } from '../models/SortOrder';
import { SubmitWeb3ActionRequest } from '../models/SubmitWeb3ActionRequest';
import { Web3ActionListResponse } from '../models/Web3ActionListResponse';
import { Web3ActionResponse } from '../models/Web3ActionResponse';
import { Web3ConnectionListResponse } from '../models/Web3ConnectionListResponse';
import { Web3ConnectionResponse } from '../models/Web3ConnectionResponse';
import { Web3ConnectionResponseExpandable } from '../models/Web3ConnectionResponseExpandable';

/**
 * no description
 */
export class Web3ConnectionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint allows you to create a new web3 connection to your Openfort player. Together with the player ID (pla_), you need to provide a chain ID. The chain to use is required because Openfort needs to make sure the account is deployed, as counterfactual addresses cannot use web3 connections. The `uri` body parameter must contain a [WalletConnect pairing URI](https://specs.walletconnect.com/2.0/specs/clients/core/pairing/pairing-uri).
     * Create a Web3 Connection object.
     * @param createWeb3ConnectionRequest 
     */
    public async createWeb3Connection(createWeb3ConnectionRequest: CreateWeb3ConnectionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createWeb3ConnectionRequest' is not null or undefined
        if (createWeb3ConnectionRequest === null || createWeb3ConnectionRequest === undefined) {
            throw new RequiredError("Web3ConnectionsApi", "createWeb3Connection", "createWeb3ConnectionRequest");
        }


        // Path Params
        const localVarPath = '/v1/web3_connections';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createWeb3ConnectionRequest, "CreateWeb3ConnectionRequest", ""),
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
     * Returns a list of web3 actions for the given web3 connection. The actions are returned sorted by creation date, with the most recently received action appearing first. By default, a maximum of ten actions are shown per page.
     * List Web3 actions from a web3 connection.
     * @param id Specifies the web3Connection ID (starts with web3_).
     */
    public async getWeb3Actions(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("Web3ConnectionsApi", "getWeb3Actions", "id");
        }


        // Path Params
        const localVarPath = '/v1/web3_connections/{id}/actions'
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
     * Retrieves the details of an existing web3 connection. Supply the unique web3 connection ID from either a web3 connection creation request or the web3 connection list. Openfort will return the corresponding web3 connection information.
     * Get a web3Connection object.
     * @param id Specifies the unique web3Connection ID (starts with web3_).
     * @param expand Specifies the fields to expand.
     */
    public async getWeb3Connection(id: string, expand?: Array<Web3ConnectionResponseExpandable>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("Web3ConnectionsApi", "getWeb3Connection", "id");
        }



        // Path Params
        const localVarPath = '/v1/web3_connections/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "Array<Web3ConnectionResponseExpandable>", ""));
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
     * Returns a list of web3 connections for the given player. The connections are returned sorted by creation date, with the most recently created connections appearing first. By default, a maximum of ten connections are shown per page.
     * List Web3 connections.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param player Specifies the unique player ID (starts with pla_)
     * @param disconnected Specifies connection status
     */
    public async getWeb3Connections(limit?: number, skip?: number, order?: SortOrder, player?: string, disconnected?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/v1/web3_connections';

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
        if (player !== undefined) {
            requestContext.setQueryParam("player", ObjectSerializer.serialize(player, "string", ""));
        }

        // Query Params
        if (disconnected !== undefined) {
            requestContext.setQueryParam("disconnected", ObjectSerializer.serialize(disconnected, "boolean", ""));
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
     * Approve or Reject a web3 action for the given web3 connection.
     * Approve or Reject a web3 action
     * @param id Specifies the web3Connection ID (starts with web3_).
     * @param web3Action Specifies web3_action (starts with act_).
     * @param submitWeb3ActionRequest 
     */
    public async submitWeb3Action(id: string, web3Action: string, submitWeb3ActionRequest: SubmitWeb3ActionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("Web3ConnectionsApi", "submitWeb3Action", "id");
        }


        // verify required parameter 'web3Action' is not null or undefined
        if (web3Action === null || web3Action === undefined) {
            throw new RequiredError("Web3ConnectionsApi", "submitWeb3Action", "web3Action");
        }


        // verify required parameter 'submitWeb3ActionRequest' is not null or undefined
        if (submitWeb3ActionRequest === null || submitWeb3ActionRequest === undefined) {
            throw new RequiredError("Web3ConnectionsApi", "submitWeb3Action", "submitWeb3ActionRequest");
        }


        // Path Params
        const localVarPath = '/v1/web3_connections/{id}/actions/{web3_action}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'web3_action' + '}', encodeURIComponent(String(web3Action)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(submitWeb3ActionRequest, "SubmitWeb3ActionRequest", ""),
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

export class Web3ConnectionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createWeb3Connection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWeb3Connection(response: ResponseContext): Promise<Web3ConnectionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Web3ConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Web3ConnectionResponse", ""
            ) as Web3ConnectionResponse;
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
            const body: Web3ConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Web3ConnectionResponse", ""
            ) as Web3ConnectionResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWeb3Actions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWeb3Actions(response: ResponseContext): Promise<Web3ActionListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Web3ActionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Web3ActionListResponse", ""
            ) as Web3ActionListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Web3ActionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Web3ActionListResponse", ""
            ) as Web3ActionListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWeb3Connection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWeb3Connection(response: ResponseContext): Promise<Web3ConnectionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Web3ConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Web3ConnectionResponse", ""
            ) as Web3ConnectionResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Web3ConnectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Web3ConnectionResponse", ""
            ) as Web3ConnectionResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWeb3Connections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWeb3Connections(response: ResponseContext): Promise<Web3ConnectionListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Web3ConnectionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Web3ConnectionListResponse", ""
            ) as Web3ConnectionListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Web3ConnectionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Web3ConnectionListResponse", ""
            ) as Web3ConnectionListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitWeb3Action
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitWeb3Action(response: ResponseContext): Promise<Web3ActionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Web3ActionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Web3ActionResponse", ""
            ) as Web3ActionResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Web3ActionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Web3ActionResponse", ""
            ) as Web3ActionResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
