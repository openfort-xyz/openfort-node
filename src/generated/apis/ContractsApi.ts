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


import { ContractDeleteResponse } from '../models/ContractDeleteResponse';
import { ContractListResponse } from '../models/ContractListResponse';
import { ContractResponse } from '../models/ContractResponse';
import { CreateContractRequest } from '../models/CreateContractRequest';
import { SortOrder } from '../models/SortOrder';
import { UpdateContractRequest } from '../models/UpdateContractRequest';

/**
 * no description
 */
export class ContractsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a contract object.
     * @param createContractRequest 
     */
    public async createContract(createContractRequest: CreateContractRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createContractRequest' is not null or undefined
        if (createContractRequest === null || createContractRequest === undefined) {
            throw new RequiredError("ContractsApi", "createContract", "createContractRequest");
        }


        // Path Params
        const localVarPath = '/v1/contracts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createContractRequest, "CreateContractRequest", ""),
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
     * Deletes a contract object.
     * @param id 
     */
    public async deleteContract(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ContractsApi", "deleteContract", "id");
        }


        // Path Params
        const localVarPath = '/v1/contracts/{id}'
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
     * Retrieves the details of an existing contract. Supply the unique contract ID from either a contract creation request or the contract list, and Openfort will return the corresponding contract information.
     * @param id Specifies the unique contract ID.
     */
    public async getContract(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ContractsApi", "getContract", "id");
        }


        // Path Params
        const localVarPath = '/v1/contracts/{id}'
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
     * Returns a list of your contracts. The contracts are returned sorted by creation date, with the most recently created contracts appearing first.
     * @param limit 
     * @param skip 
     * @param order 
     * @param name 
     * @param deleted 
     * @param chainId 
     * @param address 
     */
    public async getContracts(limit?: number, skip?: number, order?: SortOrder, name?: string, deleted?: boolean, chainId?: number, address?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/v1/contracts';

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
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (deleted !== undefined) {
            requestContext.setQueryParam("deleted", ObjectSerializer.serialize(deleted, "boolean", ""));
        }

        // Query Params
        if (chainId !== undefined) {
            requestContext.setQueryParam("chainId", ObjectSerializer.serialize(chainId, "number", "double"));
        }

        // Query Params
        if (address !== undefined) {
            requestContext.setQueryParam("address", ObjectSerializer.serialize(address, "string", ""));
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
     * Updates a contract object.
     * @param id 
     * @param updateContractRequest 
     */
    public async updateContract(id: string, updateContractRequest: UpdateContractRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ContractsApi", "updateContract", "id");
        }


        // verify required parameter 'updateContractRequest' is not null or undefined
        if (updateContractRequest === null || updateContractRequest === undefined) {
            throw new RequiredError("ContractsApi", "updateContract", "updateContractRequest");
        }


        // Path Params
        const localVarPath = '/v1/contracts/{id}'
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
            ObjectSerializer.serialize(updateContractRequest, "UpdateContractRequest", ""),
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

export class ContractsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createContract
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createContract(response: ResponseContext): Promise<ContractResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContractResponse", ""
            ) as ContractResponse;
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
            const body: ContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContractResponse", ""
            ) as ContractResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteContract
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteContract(response: ResponseContext): Promise<ContractDeleteResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ContractDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContractDeleteResponse", ""
            ) as ContractDeleteResponse;
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
            const body: ContractDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContractDeleteResponse", ""
            ) as ContractDeleteResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContract
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getContract(response: ResponseContext): Promise<ContractResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContractResponse", ""
            ) as ContractResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContractResponse", ""
            ) as ContractResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContracts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getContracts(response: ResponseContext): Promise<ContractListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ContractListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContractListResponse", ""
            ) as ContractListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ContractListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContractListResponse", ""
            ) as ContractListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateContract
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateContract(response: ResponseContext): Promise<ContractResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContractResponse", ""
            ) as ContractResponse;
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
            const body: ContractResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContractResponse", ""
            ) as ContractResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
