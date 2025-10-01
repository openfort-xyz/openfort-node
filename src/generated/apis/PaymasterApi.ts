// TODO: better import syntax?

import type { SecurityAuthentication } from '../auth/auth'
import type { Configuration } from '../configuration'
import {
  HttpMethod,
  type RequestContext,
  type ResponseContext,
} from '../http/http'
import type { CreatePaymasterRequest } from '../models/CreatePaymasterRequest'
import { ObjectSerializer } from '../models/ObjectSerializer'
import type { PaymasterDeleteResponse } from '../models/PaymasterDeleteResponse'
import type { PaymasterResponse } from '../models/PaymasterResponse'
import type { SortOrder } from '../models/SortOrder'
import { isCodeInRange } from '../util'
import { BaseAPIRequestFactory, RequiredError } from './baseapi'
import { ApiException } from './exception'

/**
 * no description
 */
export class PaymasterApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Create a new paymaster.  This object represents the paymaster that will be used to pay the gas fees of the transactions.
   * Create a new paymaster.
   * @param createPaymasterRequest
   */
  public async createPaymaster(
    createPaymasterRequest: CreatePaymasterRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'createPaymasterRequest' is not null or undefined
    if (
      createPaymasterRequest === null ||
      createPaymasterRequest === undefined
    ) {
      throw new RequiredError(
        'PaymasterApi',
        'createPaymaster',
        'createPaymasterRequest',
      )
    }

    // Path Params
    const localVarPath = '/v1/paymasters'

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
        createPaymasterRequest,
        'CreatePaymasterRequest',
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
   * Delete the paymaster with the given id.  This object represents the paymaster that will be used to pay the gas fees for the transactions.
   * Delete paymaster by id.
   * @param id
   */
  public async deletePaymaster(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError('PaymasterApi', 'deletePaymaster', 'id')
    }

    // Path Params
    const localVarPath = '/v1/paymasters/{id}'.replace(
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
   * Returns the paymaster with the given id.  This object represents the paymaster that will be used to pay the gas fees for the transactions.
   * Get paymaster by id.
   * @param id
   */
  public async getPaymaster(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError('PaymasterApi', 'getPaymaster', 'id')
    }

    // Path Params
    const localVarPath = '/v1/paymasters/{id}'.replace(
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
   * Returns a list of paymasters.  This object represents the paymasters that will be used to pay the gas fees for the transactions.  By default, a maximum of 10 paymasters are shown per page.
   * List paymasters.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   */
  public async listPaymasters(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = '/v1/paymasters'

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
   * Update a paymaster.  This object represents the paymaster that will be used to pay the gas fees of the transactions.
   * Update a paymaster.
   * @param id
   * @param createPaymasterRequest
   */
  public async updatePaymaster(
    id: string,
    createPaymasterRequest: CreatePaymasterRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError('PaymasterApi', 'updatePaymaster', 'id')
    }

    // verify required parameter 'createPaymasterRequest' is not null or undefined
    if (
      createPaymasterRequest === null ||
      createPaymasterRequest === undefined
    ) {
      throw new RequiredError(
        'PaymasterApi',
        'updatePaymaster',
        'createPaymasterRequest',
      )
    }

    // Path Params
    const localVarPath = '/v1/paymasters/{id}'.replace(
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
        createPaymasterRequest,
        'CreatePaymasterRequest',
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

export class PaymasterApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createPaymaster
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createPaymaster(
    response: ResponseContext,
  ): Promise<PaymasterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: PaymasterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PaymasterResponse',
        '',
      ) as PaymasterResponse
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
      const body: PaymasterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PaymasterResponse',
        '',
      ) as PaymasterResponse
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
   * @params response Response returned by the server for a request to deletePaymaster
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deletePaymaster(
    response: ResponseContext,
  ): Promise<PaymasterDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('204', response.httpStatusCode)) {
      const body: PaymasterDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PaymasterDeleteResponse',
        '',
      ) as PaymasterDeleteResponse
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
      const body: PaymasterDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PaymasterDeleteResponse',
        '',
      ) as PaymasterDeleteResponse
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
   * @params response Response returned by the server for a request to getPaymaster
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPaymaster(
    response: ResponseContext,
  ): Promise<PaymasterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: PaymasterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PaymasterResponse',
        '',
      ) as PaymasterResponse
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
      const body: PaymasterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PaymasterResponse',
        '',
      ) as PaymasterResponse
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
   * @params response Response returned by the server for a request to listPaymasters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listPaymasters(
    response: ResponseContext,
  ): Promise<PaymasterResponse[]> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: PaymasterResponse[] = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<PaymasterResponse>',
        '',
      ) as PaymasterResponse[]
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
      const body: PaymasterResponse[] = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Array<PaymasterResponse>',
        '',
      ) as PaymasterResponse[]
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
   * @params response Response returned by the server for a request to updatePaymaster
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePaymaster(
    response: ResponseContext,
  ): Promise<PaymasterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: PaymasterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PaymasterResponse',
        '',
      ) as PaymasterResponse
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
      const body: PaymasterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PaymasterResponse',
        '',
      ) as PaymasterResponse
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
