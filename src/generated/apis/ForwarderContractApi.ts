// TODO: better import syntax?

import type { SecurityAuthentication } from '../auth/auth'
import type { Configuration } from '../configuration'
import {
  HttpMethod,
  type RequestContext,
  type ResponseContext,
} from '../http/http'
import type { CreateForwarderContractRequest } from '../models/CreateForwarderContractRequest'
import type { ForwarderContractDeleteResponse } from '../models/ForwarderContractDeleteResponse'
import type { ForwarderContractResponse } from '../models/ForwarderContractResponse'
import { ObjectSerializer } from '../models/ObjectSerializer'
import type { SortOrder } from '../models/SortOrder'
import { isCodeInRange } from '../util'
import { BaseAPIRequestFactory, RequiredError } from './baseapi'
import { ApiException } from './exception'

/**
 * no description
 */
export class ForwarderContractApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Create a new forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees of the transactions.
   * Create a new forwarder contract.
   * @param createForwarderContractRequest
   */
  public async createForwarderContract(
    createForwarderContractRequest: CreateForwarderContractRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'createForwarderContractRequest' is not null or undefined
    if (
      createForwarderContractRequest === null ||
      createForwarderContractRequest === undefined
    ) {
      throw new RequiredError(
        'ForwarderContractApi',
        'createForwarderContract',
        'createForwarderContractRequest',
      )
    }

    // Path Params
    const localVarPath = '/v1/forwarder_contracts'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ])
    requestContext.setHeaderParam('Content-Type', contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        createForwarderContractRequest,
        'CreateForwarderContractRequest',
        '',
      ),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.sk
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext)
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Delete the forwarder contract with the given id.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.
   * Delete forwarder contract by id.
   * @param id
   */
  public async deleteForwarderContract(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError(
        'ForwarderContractApi',
        'deleteForwarderContract',
        'id',
      )
    }

    // Path Params
    const localVarPath = '/v1/forwarder_contracts/{id}'.replace(
      '{' + 'id' + '}',
      encodeURIComponent(String(id)),
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.sk
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext)
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Returns the forwarder contract with the given id.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.
   * Get forwarder contract by id.
   * @param id
   */
  public async getForwarderContract(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError(
        'ForwarderContractApi',
        'getForwarderContract',
        'id',
      )
    }

    // Path Params
    const localVarPath = '/v1/forwarder_contracts/{id}'.replace(
      '{' + 'id' + '}',
      encodeURIComponent(String(id)),
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.sk
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext)
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Returns a list of forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees for the transactions.  By default, a maximum of 10 forwarder contract are shown per page.
   * List forwarder contract.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   */
  public async listForwarderContracts(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = '/v1/forwarder_contracts'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        'limit',
        ObjectSerializer.serialize(limit, 'number', 'int32'),
      )
    }

    // Query Params
    if (skip !== undefined) {
      requestContext.setQueryParam(
        'skip',
        ObjectSerializer.serialize(skip, 'number', 'int32'),
      )
    }

    // Query Params
    if (order !== undefined) {
      requestContext.setQueryParam(
        'order',
        ObjectSerializer.serialize(order, 'SortOrder', ''),
      )
    }

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.sk
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext)
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Update a forwarder contract.  This object represents the forwarder contract that will be used to pay the gas fees of the transactions.
   * Update a forwarder contract.
   * @param id
   * @param createForwarderContractRequest
   */
  public async updateForwarderContract(
    id: string,
    createForwarderContractRequest: CreateForwarderContractRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError(
        'ForwarderContractApi',
        'updateForwarderContract',
        'id',
      )
    }

    // verify required parameter 'createForwarderContractRequest' is not null or undefined
    if (
      createForwarderContractRequest === null ||
      createForwarderContractRequest === undefined
    ) {
      throw new RequiredError(
        'ForwarderContractApi',
        'updateForwarderContract',
        'createForwarderContractRequest',
      )
    }

    // Path Params
    const localVarPath = '/v1/forwarder_contracts/{id}'.replace(
      '{' + 'id' + '}',
      encodeURIComponent(String(id)),
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ])
    requestContext.setHeaderParam('Content-Type', contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        createForwarderContractRequest,
        'CreateForwarderContractRequest',
        '',
      ),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.sk
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext)
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }
}

export class ForwarderContractApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createForwarderContract
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createForwarderContract(
    response: ResponseContext,
  ): Promise<ForwarderContractResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: ForwarderContractResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'ForwarderContractResponse',
        '',
      ) as ForwarderContractResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Error response.',
        undefined,
        response.headers,
      )
    }
    if (isCodeInRange('409', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Error response.',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ForwarderContractResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'ForwarderContractResponse',
        '',
      ) as ForwarderContractResponse
      return body
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers,
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteForwarderContract
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteForwarderContract(
    response: ResponseContext,
  ): Promise<ForwarderContractDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('204', response.httpStatusCode)) {
      const body: ForwarderContractDeleteResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          'ForwarderContractDeleteResponse',
          '',
        ) as ForwarderContractDeleteResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Error response.',
        undefined,
        response.headers,
      )
    }
    if (isCodeInRange('404', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Error response.',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ForwarderContractDeleteResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          'ForwarderContractDeleteResponse',
          '',
        ) as ForwarderContractDeleteResponse
      return body
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers,
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getForwarderContract
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getForwarderContract(
    response: ResponseContext,
  ): Promise<ForwarderContractResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: ForwarderContractResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'ForwarderContractResponse',
        '',
      ) as ForwarderContractResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Error response.',
        undefined,
        response.headers,
      )
    }
    if (isCodeInRange('404', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Error response.',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ForwarderContractResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'ForwarderContractResponse',
        '',
      ) as ForwarderContractResponse
      return body
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers,
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listForwarderContracts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listForwarderContracts(
    response: ResponseContext,
  ): Promise<ForwarderContractResponse[]> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: ForwarderContractResponse[] = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<ForwarderContractResponse>',
        '',
      ) as ForwarderContractResponse[]
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Error response.',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ForwarderContractResponse[] = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<ForwarderContractResponse>',
        '',
      ) as ForwarderContractResponse[]
      return body
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers,
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateForwarderContract
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateForwarderContract(
    response: ResponseContext,
  ): Promise<ForwarderContractResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: ForwarderContractResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'ForwarderContractResponse',
        '',
      ) as ForwarderContractResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Error response.',
        undefined,
        response.headers,
      )
    }
    if (isCodeInRange('409', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Error response.',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ForwarderContractResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'ForwarderContractResponse',
        '',
      ) as ForwarderContractResponse
      return body
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers,
    )
  }
}
