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


import { InventoryListResponse } from '../models/InventoryListResponse';
import { InventoryResponse } from '../models/InventoryResponse';
import { ObsoleteInventoryResponse } from '../models/ObsoleteInventoryResponse';
import { SortOrder } from '../models/SortOrder';

/**
 * no description
 */
export class InventoryApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieves the cryptocurrency assets of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     * @param limit 
     * @param skip 
     * @param order 
     * @param contractId 
     */
    public async getAccountCryptoCurrencyInventory(id: string, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InventoryApi", "getAccountCryptoCurrencyInventory", "id");
        }






        // Path Params
        const localVarPath = '/v1/accounts/{id}/inventory/cryptocurrency'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
        if (contractId !== undefined) {
            requestContext.setQueryParam("contractId", ObjectSerializer.serialize(contractId, "Array<string>", ""));
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
     * Retrieves the inventory of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     */
    public async getAccountInventory(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InventoryApi", "getAccountInventory", "id");
        }


        // Path Params
        const localVarPath = '/v1/accounts/{id}/inventory'
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
     * Retrieves the native asset of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     */
    public async getAccountNativeInventory(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InventoryApi", "getAccountNativeInventory", "id");
        }


        // Path Params
        const localVarPath = '/v1/accounts/{id}/inventory/native'
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
     * Retrieves the NFT assets of an existing account. Supply the unique account ID from either a account creation request or the account list, and Openfort will return the corresponding account information.
     * @param id Specifies the unique account ID.
     * @param limit 
     * @param skip 
     * @param order 
     * @param contractId 
     */
    public async getAccountNftInventory(id: string, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InventoryApi", "getAccountNftInventory", "id");
        }






        // Path Params
        const localVarPath = '/v1/accounts/{id}/inventory/nft'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
        if (contractId !== undefined) {
            requestContext.setQueryParam("contractId", ObjectSerializer.serialize(contractId, "Array<string>", ""));
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
     * Retrieves the cruptocurrency assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     * @param limit 
     * @param skip 
     * @param order 
     * @param contractId 
     */
    public async getPlayerCryptoCurrencyInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InventoryApi", "getPlayerCryptoCurrencyInventory", "id");
        }


        // verify required parameter 'chainId' is not null or undefined
        if (chainId === null || chainId === undefined) {
            throw new RequiredError("InventoryApi", "getPlayerCryptoCurrencyInventory", "chainId");
        }






        // Path Params
        const localVarPath = '/v1/players/{id}/inventory/cryptocurrency'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
        if (contractId !== undefined) {
            requestContext.setQueryParam("contractId", ObjectSerializer.serialize(contractId, "Array<string>", ""));
        }

        // Query Params
        if (chainId !== undefined) {
            requestContext.setQueryParam("chainId", ObjectSerializer.serialize(chainId, "number", "double"));
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
     * Retrieves the inventory of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     */
    public async getPlayerInventory(id: string, chainId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InventoryApi", "getPlayerInventory", "id");
        }


        // verify required parameter 'chainId' is not null or undefined
        if (chainId === null || chainId === undefined) {
            throw new RequiredError("InventoryApi", "getPlayerInventory", "chainId");
        }


        // Path Params
        const localVarPath = '/v1/players/{id}/inventory'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (chainId !== undefined) {
            requestContext.setQueryParam("chainId", ObjectSerializer.serialize(chainId, "number", "double"));
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
     * Retrieves the native assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     */
    public async getPlayerNativeInventory(id: string, chainId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InventoryApi", "getPlayerNativeInventory", "id");
        }


        // verify required parameter 'chainId' is not null or undefined
        if (chainId === null || chainId === undefined) {
            throw new RequiredError("InventoryApi", "getPlayerNativeInventory", "chainId");
        }


        // Path Params
        const localVarPath = '/v1/players/{id}/inventory/native'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (chainId !== undefined) {
            requestContext.setQueryParam("chainId", ObjectSerializer.serialize(chainId, "number", "double"));
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
     * Retrieves the NFT assets list of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
     * @param id Specifies the unique player ID.
     * @param chainId 
     * @param limit 
     * @param skip 
     * @param order 
     * @param contractId 
     */
    public async getPlayerNftInventory(id: string, chainId: number, limit?: number, skip?: number, order?: SortOrder, contractId?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InventoryApi", "getPlayerNftInventory", "id");
        }


        // verify required parameter 'chainId' is not null or undefined
        if (chainId === null || chainId === undefined) {
            throw new RequiredError("InventoryApi", "getPlayerNftInventory", "chainId");
        }






        // Path Params
        const localVarPath = '/v1/players/{id}/inventory/nft'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
        if (contractId !== undefined) {
            requestContext.setQueryParam("contractId", ObjectSerializer.serialize(contractId, "Array<string>", ""));
        }

        // Query Params
        if (chainId !== undefined) {
            requestContext.setQueryParam("chainId", ObjectSerializer.serialize(chainId, "number", "double"));
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

export class InventoryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountCryptoCurrencyInventory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountCryptoCurrencyInventory(response: ResponseContext): Promise<InventoryListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InventoryListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryListResponse", ""
            ) as InventoryListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InventoryListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryListResponse", ""
            ) as InventoryListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountInventory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountInventory(response: ResponseContext): Promise<ObsoleteInventoryResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ObsoleteInventoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ObsoleteInventoryResponse", ""
            ) as ObsoleteInventoryResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ObsoleteInventoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ObsoleteInventoryResponse", ""
            ) as ObsoleteInventoryResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountNativeInventory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountNativeInventory(response: ResponseContext): Promise<InventoryResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InventoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryResponse", ""
            ) as InventoryResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InventoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryResponse", ""
            ) as InventoryResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountNftInventory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountNftInventory(response: ResponseContext): Promise<InventoryListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InventoryListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryListResponse", ""
            ) as InventoryListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InventoryListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryListResponse", ""
            ) as InventoryListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPlayerCryptoCurrencyInventory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPlayerCryptoCurrencyInventory(response: ResponseContext): Promise<InventoryListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InventoryListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryListResponse", ""
            ) as InventoryListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InventoryListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryListResponse", ""
            ) as InventoryListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPlayerInventory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPlayerInventory(response: ResponseContext): Promise<ObsoleteInventoryResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ObsoleteInventoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ObsoleteInventoryResponse", ""
            ) as ObsoleteInventoryResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ObsoleteInventoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ObsoleteInventoryResponse", ""
            ) as ObsoleteInventoryResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPlayerNativeInventory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPlayerNativeInventory(response: ResponseContext): Promise<InventoryResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InventoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryResponse", ""
            ) as InventoryResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InventoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryResponse", ""
            ) as InventoryResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPlayerNftInventory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPlayerNftInventory(response: ResponseContext): Promise<InventoryListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InventoryListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryListResponse", ""
            ) as InventoryListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InventoryListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InventoryListResponse", ""
            ) as InventoryListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
