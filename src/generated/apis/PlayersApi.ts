// TODO: better import syntax?

import type { SecurityAuthentication } from '../auth/auth'
import type { Configuration } from '../configuration'
import {
  HttpMethod,
  type RequestContext,
  type ResponseContext,
} from '../http/http'
import { ObjectSerializer } from '../models/ObjectSerializer'
import type { PlayerCancelTransferOwnershipRequest } from '../models/PlayerCancelTransferOwnershipRequest'
import type { PlayerCreateRequest } from '../models/PlayerCreateRequest'
import type { PlayerDeleteResponse } from '../models/PlayerDeleteResponse'
import type { PlayerListResponse } from '../models/PlayerListResponse'
import type { PlayerResponse } from '../models/PlayerResponse'
import type { PlayerResponseExpandable } from '../models/PlayerResponseExpandable'
import type { PlayerTransferOwnershipRequest } from '../models/PlayerTransferOwnershipRequest'
import type { PlayerUpdateRequest } from '../models/PlayerUpdateRequest'
import type { SortOrder } from '../models/SortOrder'
import type { TransactionIntentResponse } from '../models/TransactionIntentResponse'
import { isCodeInRange } from '../util'
import { BaseAPIRequestFactory, RequiredError } from './baseapi'
import { ApiException } from './exception'

/**
 * no description
 */
export class PlayersApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * This endpoint allows you to cancel a pending transfer of ownership.
   * Cancel request to transfer ownership of a player.
   * @param id
   * @param playerCancelTransferOwnershipRequest
   */
  public async cancelTransferAccountOwnership(
    id: string,
    playerCancelTransferOwnershipRequest: PlayerCancelTransferOwnershipRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError(
        'PlayersApi',
        'cancelTransferAccountOwnership',
        'id',
      )
    }

    // verify required parameter 'playerCancelTransferOwnershipRequest' is not null or undefined
    if (
      playerCancelTransferOwnershipRequest === null ||
      playerCancelTransferOwnershipRequest === undefined
    ) {
      throw new RequiredError(
        'PlayersApi',
        'cancelTransferAccountOwnership',
        'playerCancelTransferOwnershipRequest',
      )
    }

    // Path Params
    const localVarPath = '/v1/players/{id}/cancel_transfer_ownership'.replace(
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
        playerCancelTransferOwnershipRequest,
        'PlayerCancelTransferOwnershipRequest',
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
   * Creates a player.
   * Create a player object.
   * @param playerCreateRequest
   */
  public async createPlayer(
    playerCreateRequest: PlayerCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'playerCreateRequest' is not null or undefined
    if (playerCreateRequest === null || playerCreateRequest === undefined) {
      throw new RequiredError(
        'PlayersApi',
        'createPlayer',
        'playerCreateRequest',
      )
    }

    // Path Params
    const localVarPath = '/v1/players'

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
        playerCreateRequest,
        'PlayerCreateRequest',
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
   * It will delete all linked accounts the player is authenticated with. If the player has a linked embedded signer, it will be deleted as well.
   * Deletes a player object.
   * @param id Specifies the unique player ID (starts with pla_).
   */
  public async deletePlayer(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError('PlayersApi', 'deletePlayer', 'id')
    }

    // Path Params
    const localVarPath = '/v1/players/{id}'.replace(
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
   * Retrieves the details of a player that has previously been created.  Returns the latest 10 transaction intents that were created with this player.
   * Retrieves the details of an existing player.
   * @param id Specifies the unique player ID (starts with pla_).
   * @param expand Specifies the expandable fields.
   */
  public async getPlayer(
    id: string,
    expand?: PlayerResponseExpandable[],
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError('PlayersApi', 'getPlayer', 'id')
    }

    // Path Params
    const localVarPath = '/v1/players/{id}'.replace(
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
    if (expand !== undefined) {
      requestContext.setQueryParam(
        'expand',
        ObjectSerializer.serialize(
          expand,
          'Array<PlayerResponseExpandable>',
          '',
        ),
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
   * By default, a maximum of 10 players are shown.  Returns the latest 10 transaction intents that were created with each player.
   * List players.
   * @param limit Specifies the maximum number of records to return.
   * @param skip Specifies the offset for the first records to return.
   * @param order Specifies the order in which to sort the results.
   * @param expand Specifies the fields to expand in the response.
   * @param name Filter by player name.
   */
  public async getPlayers(
    limit?: number,
    skip?: number,
    order?: SortOrder,
    expand?: PlayerResponseExpandable[],
    name?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = '/v1/players'

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
    if (expand !== undefined) {
      requestContext.setQueryParam(
        'expand',
        ObjectSerializer.serialize(
          expand,
          'Array<PlayerResponseExpandable>',
          '',
        ),
      )
    }

    // Query Params
    if (name !== undefined) {
      requestContext.setQueryParam(
        'name',
        ObjectSerializer.serialize(name, 'string', ''),
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
   * This endpoint allows you to perform a request to change the owner of an account. To perform an update on the owner of an account, first you must provide a new owner address. Once requested, the owner must accept to take ownership by calling `acceptOwnership()` in the smart contract account.
   * Request transfer ownership of a player.
   * @param id Specifies the unique player ID (starts with pla_).
   * @param playerTransferOwnershipRequest
   */
  public async requestTransferAccountOwnership(
    id: string,
    playerTransferOwnershipRequest: PlayerTransferOwnershipRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError(
        'PlayersApi',
        'requestTransferAccountOwnership',
        'id',
      )
    }

    // verify required parameter 'playerTransferOwnershipRequest' is not null or undefined
    if (
      playerTransferOwnershipRequest === null ||
      playerTransferOwnershipRequest === undefined
    ) {
      throw new RequiredError(
        'PlayersApi',
        'requestTransferAccountOwnership',
        'playerTransferOwnershipRequest',
      )
    }

    // Path Params
    const localVarPath = '/v1/players/{id}/request_transfer_ownership'.replace(
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
        playerTransferOwnershipRequest,
        'PlayerTransferOwnershipRequest',
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
   * Updates the specified player by setting the values of the parameters passed.
   * Updates a player object.
   * @param id Specifies the unique player ID (starts with pla_).
   * @param playerUpdateRequest
   */
  public async updatePlayer(
    id: string,
    playerUpdateRequest: PlayerUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError('PlayersApi', 'updatePlayer', 'id')
    }

    // verify required parameter 'playerUpdateRequest' is not null or undefined
    if (playerUpdateRequest === null || playerUpdateRequest === undefined) {
      throw new RequiredError(
        'PlayersApi',
        'updatePlayer',
        'playerUpdateRequest',
      )
    }

    // Path Params
    const localVarPath = '/v1/players/{id}'.replace(
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
        playerUpdateRequest,
        'PlayerUpdateRequest',
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

export class PlayersApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cancelTransferAccountOwnership
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelTransferAccountOwnership(
    response: ResponseContext,
  ): Promise<TransactionIntentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: TransactionIntentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'TransactionIntentResponse',
        '',
      ) as TransactionIntentResponse
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
      const body: TransactionIntentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'TransactionIntentResponse',
        '',
      ) as TransactionIntentResponse
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
   * @params response Response returned by the server for a request to createPlayer
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createPlayer(
    response: ResponseContext,
  ): Promise<PlayerResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: PlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PlayerResponse',
        '',
      ) as PlayerResponse
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
      const body: PlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PlayerResponse',
        '',
      ) as PlayerResponse
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
   * @params response Response returned by the server for a request to deletePlayer
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deletePlayer(
    response: ResponseContext,
  ): Promise<PlayerDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: PlayerDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PlayerDeleteResponse',
        '',
      ) as PlayerDeleteResponse
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
      const body: PlayerDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PlayerDeleteResponse',
        '',
      ) as PlayerDeleteResponse
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
   * @params response Response returned by the server for a request to getPlayer
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPlayer(response: ResponseContext): Promise<PlayerResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: PlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PlayerResponse',
        '',
      ) as PlayerResponse
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
      const body: PlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PlayerResponse',
        '',
      ) as PlayerResponse
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
   * @params response Response returned by the server for a request to getPlayers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPlayers(
    response: ResponseContext,
  ): Promise<PlayerListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: PlayerListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PlayerListResponse',
        '',
      ) as PlayerListResponse
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
      const body: PlayerListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PlayerListResponse',
        '',
      ) as PlayerListResponse
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
   * @params response Response returned by the server for a request to requestTransferAccountOwnership
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async requestTransferAccountOwnership(
    response: ResponseContext,
  ): Promise<TransactionIntentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: TransactionIntentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'TransactionIntentResponse',
        '',
      ) as TransactionIntentResponse
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
      const body: TransactionIntentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'TransactionIntentResponse',
        '',
      ) as TransactionIntentResponse
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
   * @params response Response returned by the server for a request to updatePlayer
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePlayer(
    response: ResponseContext,
  ): Promise<PlayerResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: PlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PlayerResponse',
        '',
      ) as PlayerResponse
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
      const body: PlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'PlayerResponse',
        '',
      ) as PlayerResponse
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
