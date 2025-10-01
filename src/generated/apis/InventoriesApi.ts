// TODO: better import syntax?

import type { SecurityAuthentication } from '../auth/auth'
import type { Configuration } from '../configuration'
import {
  HttpMethod,
  type RequestContext,
  type ResponseContext,
} from '../http/http'
import type { InventoryListResponse } from '../models/InventoryListResponse'
import type { InventoryResponse } from '../models/InventoryResponse'
import { ObjectSerializer } from '../models/ObjectSerializer'
import type { SortOrder } from '../models/SortOrder'
import { isCodeInRange } from '../util'
import { BaseAPIRequestFactory, RequiredError } from './baseapi'
import { ApiException } from './exception'

/**
 * no description
 */
export class InventoriesApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
   * Retrieves the cryptocurrency assets of an existing account.
   * @param id Specifies the unique account ID.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   * @param contractId
   */
  public async getAccountCryptoCurrencyInventory(
    id: string,
    limit?: number,
    skip?: number,
    order?: SortOrder,
    contractId?: string[],
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError(
        'InventoriesApi',
        'getAccountCryptoCurrencyInventory',
        'id',
      )
    }

    // Path Params
    const localVarPath = '/v1/accounts/{id}/inventory/cryptocurrency'.replace(
      '{' + 'id' + '}',
      encodeURIComponent(String(id)),
    )

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

    // Query Params
    if (contractId !== undefined) {
      requestContext.setQueryParam(
        'contractId',
        ObjectSerializer.serialize(contractId, 'Array<string>', ''),
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
   * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
   * Retrieves the native asset of an existing account.
   * @param id Specifies the unique account ID.
   */
  public async getAccountNativeInventory(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError(
        'InventoriesApi',
        'getAccountNativeInventory',
        'id',
      )
    }

    // Path Params
    const localVarPath = '/v1/accounts/{id}/inventory/native'.replace(
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
   * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
   * Retrieves the NFT assets of an existing account.
   * @param id Specifies the unique account ID.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   * @param contractId
   */
  public async getAccountNftInventory(
    id: string,
    limit?: number,
    skip?: number,
    order?: SortOrder,
    contractId?: string[],
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError('InventoriesApi', 'getAccountNftInventory', 'id')
    }

    // Path Params
    const localVarPath = '/v1/accounts/{id}/inventory/nft'.replace(
      '{' + 'id' + '}',
      encodeURIComponent(String(id)),
    )

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

    // Query Params
    if (contractId !== undefined) {
      requestContext.setQueryParam(
        'contractId',
        ObjectSerializer.serialize(contractId, 'Array<string>', ''),
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
   * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
   * Get cryptocurrency list of player.
   * @param id Specifies the unique player ID (starts with pla_).
   * @param chainId Filter by chain id.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   * @param contract Filter by contract ID (starts with con_).
   */
  public async getPlayerCryptoCurrencyInventory(
    id: string,
    chainId: number,
    limit?: number,
    skip?: number,
    order?: SortOrder,
    contract?: string[],
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError(
        'InventoriesApi',
        'getPlayerCryptoCurrencyInventory',
        'id',
      )
    }

    // verify required parameter 'chainId' is not null or undefined
    if (chainId === null || chainId === undefined) {
      throw new RequiredError(
        'InventoriesApi',
        'getPlayerCryptoCurrencyInventory',
        'chainId',
      )
    }

    // Path Params
    const localVarPath = '/v1/players/{id}/inventory/cryptocurrency'.replace(
      '{' + 'id' + '}',
      encodeURIComponent(String(id)),
    )

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

    // Query Params
    if (contract !== undefined) {
      requestContext.setQueryParam(
        'contract',
        ObjectSerializer.serialize(contract, 'Array<string>', ''),
      )
    }

    // Query Params
    if (chainId !== undefined) {
      requestContext.setQueryParam(
        'chainId',
        ObjectSerializer.serialize(chainId, 'number', 'int32'),
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
   * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
   * Get native token list of player.
   * @param id Specifies the unique player ID (starts with pla_).
   * @param chainId Filter by chain id.
   */
  public async getPlayerNativeInventory(
    id: string,
    chainId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError(
        'InventoriesApi',
        'getPlayerNativeInventory',
        'id',
      )
    }

    // verify required parameter 'chainId' is not null or undefined
    if (chainId === null || chainId === undefined) {
      throw new RequiredError(
        'InventoriesApi',
        'getPlayerNativeInventory',
        'chainId',
      )
    }

    // Path Params
    const localVarPath = '/v1/players/{id}/inventory/native'.replace(
      '{' + 'id' + '}',
      encodeURIComponent(String(id)),
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Query Params
    if (chainId !== undefined) {
      requestContext.setQueryParam(
        'chainId',
        ObjectSerializer.serialize(chainId, 'number', 'int32'),
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
   * For development purposes only.  Under higher load scenarios, this endpoint may be rate limited.
   * Get NFTs list of player.
   * @param id Specifies the unique player ID (starts with pla_).
   * @param chainId Filter by chain id.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   * @param contract Filter by contract ID (starts with con_).
   */
  public async getPlayerNftInventory(
    id: string,
    chainId: number,
    limit?: number,
    skip?: number,
    order?: SortOrder,
    contract?: string[],
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError('InventoriesApi', 'getPlayerNftInventory', 'id')
    }

    // verify required parameter 'chainId' is not null or undefined
    if (chainId === null || chainId === undefined) {
      throw new RequiredError(
        'InventoriesApi',
        'getPlayerNftInventory',
        'chainId',
      )
    }

    // Path Params
    const localVarPath = '/v1/players/{id}/inventory/nft'.replace(
      '{' + 'id' + '}',
      encodeURIComponent(String(id)),
    )

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

    // Query Params
    if (contract !== undefined) {
      requestContext.setQueryParam(
        'contract',
        ObjectSerializer.serialize(contract, 'Array<string>', ''),
      )
    }

    // Query Params
    if (chainId !== undefined) {
      requestContext.setQueryParam(
        'chainId',
        ObjectSerializer.serialize(chainId, 'number', 'int32'),
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
}

export class InventoriesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAccountCryptoCurrencyInventory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAccountCryptoCurrencyInventory(
    response: ResponseContext,
  ): Promise<InventoryListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InventoryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryListResponse',
        '',
      ) as InventoryListResponse
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
      const body: InventoryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryListResponse',
        '',
      ) as InventoryListResponse
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
   * @params response Response returned by the server for a request to getAccountNativeInventory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAccountNativeInventory(
    response: ResponseContext,
  ): Promise<InventoryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InventoryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryResponse',
        '',
      ) as InventoryResponse
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
      const body: InventoryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryResponse',
        '',
      ) as InventoryResponse
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
   * @params response Response returned by the server for a request to getAccountNftInventory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAccountNftInventory(
    response: ResponseContext,
  ): Promise<InventoryListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InventoryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryListResponse',
        '',
      ) as InventoryListResponse
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
      const body: InventoryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryListResponse',
        '',
      ) as InventoryListResponse
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
   * @params response Response returned by the server for a request to getPlayerCryptoCurrencyInventory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPlayerCryptoCurrencyInventory(
    response: ResponseContext,
  ): Promise<InventoryListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InventoryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryListResponse',
        '',
      ) as InventoryListResponse
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
      const body: InventoryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryListResponse',
        '',
      ) as InventoryListResponse
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
   * @params response Response returned by the server for a request to getPlayerNativeInventory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPlayerNativeInventory(
    response: ResponseContext,
  ): Promise<InventoryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InventoryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryResponse',
        '',
      ) as InventoryResponse
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
      const body: InventoryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryResponse',
        '',
      ) as InventoryResponse
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
   * @params response Response returned by the server for a request to getPlayerNftInventory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPlayerNftInventory(
    response: ResponseContext,
  ): Promise<InventoryListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InventoryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryListResponse',
        '',
      ) as InventoryListResponse
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
      const body: InventoryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InventoryListResponse',
        '',
      ) as InventoryListResponse
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
