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


import { CreatePolicyRequest } from '../models/CreatePolicyRequest';
import { GasReportListResponse } from '../models/GasReportListResponse';
import { PolicyBalanceWithdrawResponse } from '../models/PolicyBalanceWithdrawResponse';
import { PolicyDeleteResponse } from '../models/PolicyDeleteResponse';
import { PolicyListResponse } from '../models/PolicyListResponse';
import { PolicyResponse } from '../models/PolicyResponse';
import { PolicyResponseExpandable } from '../models/PolicyResponseExpandable';
import { SortOrder } from '../models/SortOrder';
import { TransactionIntentResponse } from '../models/TransactionIntentResponse';
import { UpdatePolicyRequest } from '../models/UpdatePolicyRequest';
import { WithdrawalPolicyRequest } from '../models/WithdrawalPolicyRequest';

/**
 * no description
 */
export class PoliciesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a policy object.
     * @param createPolicyRequest 
     */
    public async createPolicy(createPolicyRequest: CreatePolicyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createPolicyRequest' is not null or undefined
        if (createPolicyRequest === null || createPolicyRequest === undefined) {
            throw new RequiredError("PoliciesApi", "createPolicy", "createPolicyRequest");
        }


        // Path Params
        const localVarPath = '/v1/policies';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createPolicyRequest, "CreatePolicyRequest", ""),
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
     * Transfer ERC-20 tokens paid in gas to another account.  When using a policy that includes payment of gas in ERC-20 tokens, this endpoint returns the amount of tokens paid for gas. This is specific to a policy that doesn\'t use your own deposited tokens in the paymaster.
     * .
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param withdrawalPolicyRequest 
     */
    public async createPolicyWithdrawal(id: string, withdrawalPolicyRequest: WithdrawalPolicyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PoliciesApi", "createPolicyWithdrawal", "id");
        }


        // verify required parameter 'withdrawalPolicyRequest' is not null or undefined
        if (withdrawalPolicyRequest === null || withdrawalPolicyRequest === undefined) {
            throw new RequiredError("PoliciesApi", "createPolicyWithdrawal", "withdrawalPolicyRequest");
        }


        // Path Params
        const localVarPath = '/v1/policies/{id}/withdraw'
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
            ObjectSerializer.serialize(withdrawalPolicyRequest, "WithdrawalPolicyRequest", ""),
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
     * Delete a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public async deletePolicy(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PoliciesApi", "deletePolicy", "id");
        }


        // Path Params
        const localVarPath = '/v1/policies/{id}'
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
     * Disable a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public async disablePolicy(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PoliciesApi", "disablePolicy", "id");
        }


        // Path Params
        const localVarPath = '/v1/policies/{id}/disable'
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
     * Enable a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public async enablePolicy(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PoliciesApi", "enablePolicy", "id");
        }


        // Path Params
        const localVarPath = '/v1/policies/{id}/enable'
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
     * Returns a list of Policies.
     * List policies.
     * @param limit Specifies the maximum number of records to return.
     * @param skip Specifies the offset for the first records to return.
     * @param order Specifies the order in which to sort the results.
     * @param expand Specifies the fields to expand in the response.
     * @param name Specifies the name of the policy.
     * @param deleted Specifies whether to include deleted policies.
     * @param chainId The chain ID of the policy.
     * @param enabled Specifies whether to include enabled policies.
     */
    public async getPolicies(limit?: number, skip?: number, order?: SortOrder, expand?: Array<PolicyResponseExpandable>, name?: string, deleted?: boolean, chainId?: number, enabled?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/v1/policies';

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
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "Array<PolicyResponseExpandable>", ""));
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
            requestContext.setQueryParam("chainId", ObjectSerializer.serialize(chainId, "number", "int32"));
        }

        // Query Params
        if (enabled !== undefined) {
            requestContext.setQueryParam("enabled", ObjectSerializer.serialize(enabled, "boolean", ""));
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
     * Retrieves the details of a Policy that has previously been created.
     * Get a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param expand Specifies the fields to expand.
     */
    public async getPolicy(id: string, expand?: Array<PolicyResponseExpandable>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PoliciesApi", "getPolicy", "id");
        }



        // Path Params
        const localVarPath = '/v1/policies/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expand !== undefined) {
            requestContext.setQueryParam("expand", ObjectSerializer.serialize(expand, "Array<PolicyResponseExpandable>", ""));
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
     * Get the amount of ERC-20 tokens paid as gas for a policy.  When using a policy that includes payment of gas in ERC-20 tokens, this endpoint returns the amount of tokens paid for gas. This is specific to a policy that doesn\'t use your own deposited tokens in the paymaster.
     * Get amount of tokens paid for gas policy.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public async getPolicyBalance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PoliciesApi", "getPolicyBalance", "id");
        }


        // Path Params
        const localVarPath = '/v1/policies/{id}/withdraw'
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
     * List all gas reports of a policy.
     * @param id Specifies the unique policy ID (starts with pol_).
     */
    public async getPolicyTotalGasUsage(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PoliciesApi", "getPolicyTotalGasUsage", "id");
        }


        // Path Params
        const localVarPath = '/v1/policies/{id}/reports'
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
     * Update a policy object.
     * @param id Specifies the unique policy ID (starts with pol_).
     * @param updatePolicyRequest 
     */
    public async updatePolicy(id: string, updatePolicyRequest: UpdatePolicyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PoliciesApi", "updatePolicy", "id");
        }


        // verify required parameter 'updatePolicyRequest' is not null or undefined
        if (updatePolicyRequest === null || updatePolicyRequest === undefined) {
            throw new RequiredError("PoliciesApi", "updatePolicy", "updatePolicyRequest");
        }


        // Path Params
        const localVarPath = '/v1/policies/{id}'
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
            ObjectSerializer.serialize(updatePolicyRequest, "UpdatePolicyRequest", ""),
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

export class PoliciesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPolicy(response: ResponseContext): Promise<PolicyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyResponse", ""
            ) as PolicyResponse;
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
            const body: PolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyResponse", ""
            ) as PolicyResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPolicyWithdrawal
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPolicyWithdrawal(response: ResponseContext): Promise<TransactionIntentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TransactionIntentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransactionIntentResponse", ""
            ) as TransactionIntentResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
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
     * @params response Response returned by the server for a request to deletePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePolicy(response: ResponseContext): Promise<PolicyDeleteResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PolicyDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyDeleteResponse", ""
            ) as PolicyDeleteResponse;
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
            const body: PolicyDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyDeleteResponse", ""
            ) as PolicyDeleteResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to disablePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async disablePolicy(response: ResponseContext): Promise<PolicyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyResponse", ""
            ) as PolicyResponse;
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
            const body: PolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyResponse", ""
            ) as PolicyResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enablePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async enablePolicy(response: ResponseContext): Promise<PolicyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyResponse", ""
            ) as PolicyResponse;
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
            const body: PolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyResponse", ""
            ) as PolicyResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPolicies(response: ResponseContext): Promise<PolicyListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PolicyListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyListResponse", ""
            ) as PolicyListResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PolicyListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyListResponse", ""
            ) as PolicyListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPolicy(response: ResponseContext): Promise<PolicyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyResponse", ""
            ) as PolicyResponse;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Error response.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyResponse", ""
            ) as PolicyResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPolicyBalance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPolicyBalance(response: ResponseContext): Promise<PolicyBalanceWithdrawResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PolicyBalanceWithdrawResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyBalanceWithdrawResponse", ""
            ) as PolicyBalanceWithdrawResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PolicyBalanceWithdrawResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyBalanceWithdrawResponse", ""
            ) as PolicyBalanceWithdrawResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPolicyTotalGasUsage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPolicyTotalGasUsage(response: ResponseContext): Promise<GasReportListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GasReportListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GasReportListResponse", ""
            ) as GasReportListResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GasReportListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GasReportListResponse", ""
            ) as GasReportListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePolicy(response: ResponseContext): Promise<PolicyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyResponse", ""
            ) as PolicyResponse;
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
            const body: PolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyResponse", ""
            ) as PolicyResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
