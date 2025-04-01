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


import { BaseEntityListResponseDeviceResponse } from '../models/BaseEntityListResponseDeviceResponse';
import { DeviceCreateRequest } from '../models/DeviceCreateRequest';
import { DeviceResponse } from '../models/DeviceResponse';

/**
 * no description
 */
export class DevicesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param signerId 
     * @param deviceCreateRequest 
     */
    public async createDevice(signerId: string, deviceCreateRequest: DeviceCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'signerId' is not null or undefined
        if (signerId === null || signerId === undefined) {
            throw new RequiredError("DevicesApi", "createDevice", "signerId");
        }


        // verify required parameter 'deviceCreateRequest' is not null or undefined
        if (deviceCreateRequest === null || deviceCreateRequest === undefined) {
            throw new RequiredError("DevicesApi", "createDevice", "deviceCreateRequest");
        }


        // Path Params
        const localVarPath = '/v2/signers/{signerId}/devices'
            .replace('{' + 'signerId' + '}', encodeURIComponent(String(signerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deviceCreateRequest, "DeviceCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param signerId 
     * @param deviceId 
     */
    public async getDevice(signerId: string, deviceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'signerId' is not null or undefined
        if (signerId === null || signerId === undefined) {
            throw new RequiredError("DevicesApi", "getDevice", "signerId");
        }


        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new RequiredError("DevicesApi", "getDevice", "deviceId");
        }


        // Path Params
        const localVarPath = '/v2/signers/{signerId}/devices/{deviceId}'
            .replace('{' + 'signerId' + '}', encodeURIComponent(String(signerId)))
            .replace('{' + 'deviceId' + '}', encodeURIComponent(String(deviceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param signerId 
     * @param limit 
     * @param skip 
     * @param order 
     */
    public async listDevices(signerId: string, limit?: number, skip?: number, order?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'signerId' is not null or undefined
        if (signerId === null || signerId === undefined) {
            throw new RequiredError("DevicesApi", "listDevices", "signerId");
        }





        // Path Params
        const localVarPath = '/v2/signers/{signerId}/devices'
            .replace('{' + 'signerId' + '}', encodeURIComponent(String(signerId)));

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
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'asc' | 'desc'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DevicesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevice(response: ResponseContext): Promise<DeviceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: DeviceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeviceResponse", ""
            ) as DeviceResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeviceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeviceResponse", ""
            ) as DeviceResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevice(response: ResponseContext): Promise<DeviceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeviceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeviceResponse", ""
            ) as DeviceResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeviceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeviceResponse", ""
            ) as DeviceResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDevices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDevices(response: ResponseContext): Promise<BaseEntityListResponseDeviceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BaseEntityListResponseDeviceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseEntityListResponseDeviceResponse", ""
            ) as BaseEntityListResponseDeviceResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BaseEntityListResponseDeviceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BaseEntityListResponseDeviceResponse", ""
            ) as BaseEntityListResponseDeviceResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
