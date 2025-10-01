// TODO: better import syntax?

import type { SecurityAuthentication } from '../auth/auth'
import type { Configuration } from '../configuration'
import {
  HttpMethod,
  type RequestContext,
  type ResponseContext,
} from '../http/http'
import type { AuthenticateOAuthRequest } from '../models/AuthenticateOAuthRequest'
import type { AuthPlayerResponse } from '../models/AuthPlayerResponse'
import type { AuthResponse } from '../models/AuthResponse'
import type { JwtKeyResponse } from '../models/JwtKeyResponse'
import type { LinkEmail200Response } from '../models/LinkEmail200Response'
import type { LoginOIDCRequest } from '../models/LoginOIDCRequest'
import type { LoginRequest } from '../models/LoginRequest'
import type { LoginWithIdTokenRequest } from '../models/LoginWithIdTokenRequest'
import type { LogoutRequest } from '../models/LogoutRequest'
import type { OAuthInitRequest } from '../models/OAuthInitRequest'
import type { OAuthResponse } from '../models/OAuthResponse'
import { ObjectSerializer } from '../models/ObjectSerializer'
import type { PlayerResponse } from '../models/PlayerResponse'
import type { RefreshTokenRequest } from '../models/RefreshTokenRequest'
import type { RequestResetPasswordRequest } from '../models/RequestResetPasswordRequest'
import type { RequestVerifyEmailRequest } from '../models/RequestVerifyEmailRequest'
import type { ResetPasswordRequest } from '../models/ResetPasswordRequest'
import type { SIWEAuthenticateRequest } from '../models/SIWEAuthenticateRequest'
import type { SIWEInitResponse } from '../models/SIWEInitResponse'
import type { SIWERequest } from '../models/SIWERequest'
import type { SignupEmailPassword201Response } from '../models/SignupEmailPassword201Response'
import type { SignupRequest } from '../models/SignupRequest'
import type { ThirdPartyLinkRequest } from '../models/ThirdPartyLinkRequest'
import type { ThirdPartyOAuthRequest } from '../models/ThirdPartyOAuthRequest'
import type { UnlinkEmailRequest } from '../models/UnlinkEmailRequest'
import type { UnlinkOAuthRequest } from '../models/UnlinkOAuthRequest'
import type { VerifyEmailRequest } from '../models/VerifyEmailRequest'
import { isCodeInRange } from '../util'
import { BaseAPIRequestFactory, RequiredError } from './baseapi'
import { ApiException } from './exception'

/**
 * no description
 */
export class AuthenticationApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Authenticate player with SIWE
   * @param sIWEAuthenticateRequest
   */
  public async authenticateSIWE(
    sIWEAuthenticateRequest: SIWEAuthenticateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'sIWEAuthenticateRequest' is not null or undefined
    if (
      sIWEAuthenticateRequest === null ||
      sIWEAuthenticateRequest === undefined
    ) {
      throw new RequiredError(
        'AuthenticationApi',
        'authenticateSIWE',
        'sIWEAuthenticateRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/siwe/authenticate'

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
        sIWEAuthenticateRequest,
        'SIWEAuthenticateRequest',
        '',
      ),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * Get the jwks.json file.  You can use the jwks.json file to verify the signature of a JWT token issued by Openfort Auth.
   * Get the jwks.json file.
   * @param publishableKey Specifies the project publishable key (starts with pk_).
   */
  public async getJwks(
    publishableKey: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'publishableKey' is not null or undefined
    if (publishableKey === null || publishableKey === undefined) {
      throw new RequiredError('AuthenticationApi', 'getJwks', 'publishableKey')
    }

    // Path Params
    const localVarPath = '/iam/v1/{publishable_key}/jwks.json'.replace(
      '{' + 'publishable_key' + '}',
      encodeURIComponent(String(publishableKey)),
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Initialize OAuth.
   * @param oAuthInitRequest
   * @param xGame
   */
  public async initOAuth(
    oAuthInitRequest: OAuthInitRequest,
    xGame?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'oAuthInitRequest' is not null or undefined
    if (oAuthInitRequest === null || oAuthInitRequest === undefined) {
      throw new RequiredError(
        'AuthenticationApi',
        'initOAuth',
        'oAuthInitRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/oauth/init'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Header Params
    requestContext.setHeaderParam(
      'x-game',
      ObjectSerializer.serialize(xGame, 'string', ''),
    )

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ])
    requestContext.setHeaderParam('Content-Type', contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(oAuthInitRequest, 'OAuthInitRequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * Create a challenge to link external wallet to the player.
   * Initialize SIWE.
   * @param sIWERequest
   * @param xGame
   */
  public async initSIWE(
    sIWERequest: SIWERequest,
    xGame?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'sIWERequest' is not null or undefined
    if (sIWERequest === null || sIWERequest === undefined) {
      throw new RequiredError('AuthenticationApi', 'initSIWE', 'sIWERequest')
    }

    // Path Params
    const localVarPath = '/iam/v1/siwe/init'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Header Params
    requestContext.setHeaderParam(
      'x-game',
      ObjectSerializer.serialize(xGame, 'string', ''),
    )

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ])
    requestContext.setHeaderParam('Content-Type', contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(sIWERequest, 'SIWERequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * @param loginRequest
   * @param xGame
   */
  public async linkEmail(
    loginRequest: LoginRequest,
    xGame?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'loginRequest' is not null or undefined
    if (loginRequest === null || loginRequest === undefined) {
      throw new RequiredError('AuthenticationApi', 'linkEmail', 'loginRequest')
    }

    // Path Params
    const localVarPath = '/iam/v1/password/link'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Header Params
    requestContext.setHeaderParam(
      'x-game',
      ObjectSerializer.serialize(xGame, 'string', ''),
    )

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ])
    requestContext.setHeaderParam('Content-Type', contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(loginRequest, 'LoginRequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Initialize Link OAuth.
   * @param oAuthInitRequest
   * @param xGame
   */
  public async linkOAuth(
    oAuthInitRequest: OAuthInitRequest,
    xGame?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'oAuthInitRequest' is not null or undefined
    if (oAuthInitRequest === null || oAuthInitRequest === undefined) {
      throw new RequiredError(
        'AuthenticationApi',
        'linkOAuth',
        'oAuthInitRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/oauth/init_link'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Header Params
    requestContext.setHeaderParam(
      'x-game',
      ObjectSerializer.serialize(xGame, 'string', ''),
    )

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ])
    requestContext.setHeaderParam('Content-Type', contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(oAuthInitRequest, 'OAuthInitRequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Link external wallet.
   * @param sIWEAuthenticateRequest
   */
  public async linkSIWE(
    sIWEAuthenticateRequest: SIWEAuthenticateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'sIWEAuthenticateRequest' is not null or undefined
    if (
      sIWEAuthenticateRequest === null ||
      sIWEAuthenticateRequest === undefined
    ) {
      throw new RequiredError(
        'AuthenticationApi',
        'linkSIWE',
        'sIWEAuthenticateRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/siwe/link'

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
        sIWEAuthenticateRequest,
        'SIWEAuthenticateRequest',
        '',
      ),
      contentType,
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Initialize Link OAuth.
   * @param thirdPartyLinkRequest
   * @param xGame
   */
  public async linkThirdParty(
    thirdPartyLinkRequest: ThirdPartyLinkRequest,
    xGame?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'thirdPartyLinkRequest' is not null or undefined
    if (thirdPartyLinkRequest === null || thirdPartyLinkRequest === undefined) {
      throw new RequiredError(
        'AuthenticationApi',
        'linkThirdParty',
        'thirdPartyLinkRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/oauth/link'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Header Params
    requestContext.setHeaderParam(
      'x-game',
      ObjectSerializer.serialize(xGame, 'string', ''),
    )

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ])
    requestContext.setHeaderParam('Content-Type', contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        thirdPartyLinkRequest,
        'ThirdPartyLinkRequest',
        '',
      ),
      contentType,
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Authenticate a player based on email and password.
   * Email and password login.
   * @param loginRequest
   * @param xGame
   */
  public async loginEmailPassword(
    loginRequest: LoginRequest,
    xGame?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'loginRequest' is not null or undefined
    if (loginRequest === null || loginRequest === undefined) {
      throw new RequiredError(
        'AuthenticationApi',
        'loginEmailPassword',
        'loginRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/password/login'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Header Params
    requestContext.setHeaderParam(
      'x-game',
      ObjectSerializer.serialize(xGame, 'string', ''),
    )

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ])
    requestContext.setHeaderParam('Content-Type', contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(loginRequest, 'LoginRequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * Authenticate a player from an identity token.
   * OIDC Identity token.
   * @param loginOIDCRequest
   * @param xGame
   */
  public async loginOIDC(
    loginOIDCRequest: LoginOIDCRequest,
    xGame?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'loginOIDCRequest' is not null or undefined
    if (loginOIDCRequest === null || loginOIDCRequest === undefined) {
      throw new RequiredError(
        'AuthenticationApi',
        'loginOIDC',
        'loginOIDCRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/oidc/login'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Header Params
    requestContext.setHeaderParam(
      'x-game',
      ObjectSerializer.serialize(xGame, 'string', ''),
    )

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ])
    requestContext.setHeaderParam('Content-Type', contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(loginOIDCRequest, 'LoginOIDCRequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * Authenticate player with oauth token.
   * @param loginWithIdTokenRequest
   */
  public async loginWithIdToken(
    loginWithIdTokenRequest: LoginWithIdTokenRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'loginWithIdTokenRequest' is not null or undefined
    if (
      loginWithIdTokenRequest === null ||
      loginWithIdTokenRequest === undefined
    ) {
      throw new RequiredError(
        'AuthenticationApi',
        'loginWithIdToken',
        'loginWithIdTokenRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/oauth/login_id_token'

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
        loginWithIdTokenRequest,
        'LoginWithIdTokenRequest',
        '',
      ),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * When using Openfort Auth, the endpoint logs out the player.
   * Log out a player.
   * @param logoutRequest
   */
  public async logout(
    logoutRequest: LogoutRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'logoutRequest' is not null or undefined
    if (logoutRequest === null || logoutRequest === undefined) {
      throw new RequiredError('AuthenticationApi', 'logout', 'logoutRequest')
    }

    // Path Params
    const localVarPath = '/iam/v1/sessions/logout'

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
      ObjectSerializer.serialize(logoutRequest, 'LogoutRequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   */
  public async me(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = '/iam/v1/me'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Initialize OAuth.
   * @param key
   */
  public async poolOAuth(
    key: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'key' is not null or undefined
    if (key === null || key === undefined) {
      throw new RequiredError('AuthenticationApi', 'poolOAuth', 'key')
    }

    // Path Params
    const localVarPath = '/iam/v1/oauth/pool'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Query Params
    if (key !== undefined) {
      requestContext.setQueryParam(
        'key',
        ObjectSerializer.serialize(key, 'string', ''),
      )
    }

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * Get or create a new session for the player based on the refresh token.
   * Refresh or create auth session.
   * @param refreshTokenRequest
   */
  public async refresh(
    refreshTokenRequest: RefreshTokenRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'refreshTokenRequest' is not null or undefined
    if (refreshTokenRequest === null || refreshTokenRequest === undefined) {
      throw new RequiredError(
        'AuthenticationApi',
        'refresh',
        'refreshTokenRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/sessions'

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
        refreshTokenRequest,
        'RefreshTokenRequest',
        '',
      ),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * Create a guest player.
   * Create a guest player.
   * @param xGame
   */
  public async registerGuest(
    xGame?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = '/iam/v1/guest'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Header Params
    requestContext.setHeaderParam(
      'x-game',
      ObjectSerializer.serialize(xGame, 'string', ''),
    )

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * Start the Email Verification process for a player.
   * Request an Email Verification.
   * @param requestVerifyEmailRequest
   */
  public async requestEmailVerification(
    requestVerifyEmailRequest: RequestVerifyEmailRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'requestVerifyEmailRequest' is not null or undefined
    if (
      requestVerifyEmailRequest === null ||
      requestVerifyEmailRequest === undefined
    ) {
      throw new RequiredError(
        'AuthenticationApi',
        'requestEmailVerification',
        'requestVerifyEmailRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/password/request_email_verification'

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
        requestVerifyEmailRequest,
        'RequestVerifyEmailRequest',
        '',
      ),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * Start the Reset process for a player\'s password.
   * Request a Reset password.
   * @param requestResetPasswordRequest
   */
  public async requestResetPassword(
    requestResetPasswordRequest: RequestResetPasswordRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'requestResetPasswordRequest' is not null or undefined
    if (
      requestResetPasswordRequest === null ||
      requestResetPasswordRequest === undefined
    ) {
      throw new RequiredError(
        'AuthenticationApi',
        'requestResetPassword',
        'requestResetPasswordRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/password/request_reset'

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
        requestResetPasswordRequest,
        'RequestResetPasswordRequest',
        '',
      ),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * Reset a player\'s password.
   * Reset a password.
   * @param resetPasswordRequest
   */
  public async resetPassword(
    resetPasswordRequest: ResetPasswordRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'resetPasswordRequest' is not null or undefined
    if (resetPasswordRequest === null || resetPasswordRequest === undefined) {
      throw new RequiredError(
        'AuthenticationApi',
        'resetPassword',
        'resetPasswordRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/password/reset'

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
        resetPasswordRequest,
        'ResetPasswordRequest',
        '',
      ),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * Create and authenticate a player based on email and password.
   * Email and password signup.
   * @param signupRequest
   * @param xGame
   */
  public async signupEmailPassword(
    signupRequest: SignupRequest,
    xGame?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'signupRequest' is not null or undefined
    if (signupRequest === null || signupRequest === undefined) {
      throw new RequiredError(
        'AuthenticationApi',
        'signupEmailPassword',
        'signupRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/password/signup'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Header Params
    requestContext.setHeaderParam(
      'x-game',
      ObjectSerializer.serialize(xGame, 'string', ''),
    )

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ])
    requestContext.setHeaderParam('Content-Type', contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(signupRequest, 'SignupRequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * Verify oauth token of a third party auth provider.
   * @param thirdPartyOAuthRequest
   * @param xGame
   */
  public async thirdParty(
    thirdPartyOAuthRequest: ThirdPartyOAuthRequest,
    xGame?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'thirdPartyOAuthRequest' is not null or undefined
    if (
      thirdPartyOAuthRequest === null ||
      thirdPartyOAuthRequest === undefined
    ) {
      throw new RequiredError(
        'AuthenticationApi',
        'thirdParty',
        'thirdPartyOAuthRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/oauth/third_party'

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    )
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8')

    // Header Params
    requestContext.setHeaderParam(
      'x-game',
      ObjectSerializer.serialize(xGame, 'string', ''),
    )

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ])
    requestContext.setHeaderParam('Content-Type', contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        thirdPartyOAuthRequest,
        'ThirdPartyOAuthRequest',
        '',
      ),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * @param unlinkEmailRequest
   */
  public async unlinkEmail(
    unlinkEmailRequest: UnlinkEmailRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'unlinkEmailRequest' is not null or undefined
    if (unlinkEmailRequest === null || unlinkEmailRequest === undefined) {
      throw new RequiredError(
        'AuthenticationApi',
        'unlinkEmail',
        'unlinkEmailRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/password/unlink'

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
      ObjectSerializer.serialize(unlinkEmailRequest, 'UnlinkEmailRequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Unlink OAuth account
   * @param unlinkOAuthRequest
   */
  public async unlinkOAuth(
    unlinkOAuthRequest: UnlinkOAuthRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'unlinkOAuthRequest' is not null or undefined
    if (unlinkOAuthRequest === null || unlinkOAuthRequest === undefined) {
      throw new RequiredError(
        'AuthenticationApi',
        'unlinkOAuth',
        'unlinkOAuthRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/oauth/unlink'

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
      ObjectSerializer.serialize(unlinkOAuthRequest, 'UnlinkOAuthRequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Unlink external wallet.
   * @param sIWERequest
   */
  public async unlinkSIWE(
    sIWERequest: SIWERequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'sIWERequest' is not null or undefined
    if (sIWERequest === null || sIWERequest === undefined) {
      throw new RequiredError('AuthenticationApi', 'unlinkSIWE', 'sIWERequest')
    }

    // Path Params
    const localVarPath = '/iam/v1/siwe/unlink'

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
      ObjectSerializer.serialize(sIWERequest, 'SIWERequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * Verify a player\'s email address.
   * Verify an email.
   * @param verifyEmailRequest
   */
  public async verifyEmail(
    verifyEmailRequest: VerifyEmailRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'verifyEmailRequest' is not null or undefined
    if (verifyEmailRequest === null || verifyEmailRequest === undefined) {
      throw new RequiredError(
        'AuthenticationApi',
        'verifyEmail',
        'verifyEmailRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/password/verify_email'

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
      ObjectSerializer.serialize(verifyEmailRequest, 'VerifyEmailRequest', ''),
      contentType,
    )
    requestContext.setBody(serializedBody)

    let authMethod: SecurityAuthentication | undefined
    // Apply auth methods
    authMethod = _config.authMethods.pk
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
   * The endpoint verifies the token generated by OAuth provider and retrieves a corresponding player.  Returns the latest 10 transaction intents for the player.
   * Retrieve player by oauth token.
   * @param authenticateOAuthRequest
   */
  public async verifyOAuthToken(
    authenticateOAuthRequest: AuthenticateOAuthRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'authenticateOAuthRequest' is not null or undefined
    if (
      authenticateOAuthRequest === null ||
      authenticateOAuthRequest === undefined
    ) {
      throw new RequiredError(
        'AuthenticationApi',
        'verifyOAuthToken',
        'authenticateOAuthRequest',
      )
    }

    // Path Params
    const localVarPath = '/iam/v1/oauth/verify'

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
        authenticateOAuthRequest,
        'AuthenticateOAuthRequest',
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

export class AuthenticationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to authenticateSIWE
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async authenticateSIWE(
    response: ResponseContext,
  ): Promise<void | AuthResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthResponse',
        '',
      ) as AuthResponse
      return body
    }
    if (isCodeInRange('204', response.httpStatusCode)) {
      return
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Unauthorized - No active session or invalid token',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void | AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'void | AuthResponse',
        '',
      ) as void | AuthResponse
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
   * @params response Response returned by the server for a request to getJwks
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getJwks(response: ResponseContext): Promise<JwtKeyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: JwtKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'JwtKeyResponse',
        '',
      ) as JwtKeyResponse
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: JwtKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'JwtKeyResponse',
        '',
      ) as JwtKeyResponse
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
   * @params response Response returned by the server for a request to initOAuth
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async initOAuth(response: ResponseContext): Promise<OAuthResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: OAuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'OAuthResponse',
        '',
      ) as OAuthResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Api key is not valid',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OAuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'OAuthResponse',
        '',
      ) as OAuthResponse
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
   * @params response Response returned by the server for a request to initSIWE
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async initSIWE(response: ResponseContext): Promise<SIWEInitResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: SIWEInitResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SIWEInitResponse',
        '',
      ) as SIWEInitResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SIWEInitResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SIWEInitResponse',
        '',
      ) as SIWEInitResponse
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
   * @params response Response returned by the server for a request to linkEmail
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async linkEmail(
    response: ResponseContext,
  ): Promise<LinkEmail200Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: LinkEmail200Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'LinkEmail200Response',
        '',
      ) as LinkEmail200Response
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: LinkEmail200Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'LinkEmail200Response',
        '',
      ) as LinkEmail200Response
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
   * @params response Response returned by the server for a request to linkOAuth
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async linkOAuth(response: ResponseContext): Promise<OAuthResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: OAuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'OAuthResponse',
        '',
      ) as OAuthResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Api key is not valid',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OAuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'OAuthResponse',
        '',
      ) as OAuthResponse
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
   * @params response Response returned by the server for a request to linkSIWE
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async linkSIWE(
    response: ResponseContext,
  ): Promise<AuthPlayerResponse | void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
      return body
    }
    if (isCodeInRange('204', response.httpStatusCode)) {
      return
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Unauthorized - No active session or invalid token',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthPlayerResponse | void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse | void',
        '',
      ) as AuthPlayerResponse | void
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
   * @params response Response returned by the server for a request to linkThirdParty
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async linkThirdParty(
    response: ResponseContext,
  ): Promise<AuthPlayerResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Api key is not valid',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
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
   * @params response Response returned by the server for a request to loginEmailPassword
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async loginEmailPassword(
    response: ResponseContext,
  ): Promise<SignupEmailPassword201Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: SignupEmailPassword201Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SignupEmailPassword201Response',
        '',
      ) as SignupEmailPassword201Response
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SignupEmailPassword201Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SignupEmailPassword201Response',
        '',
      ) as SignupEmailPassword201Response
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
   * @params response Response returned by the server for a request to loginOIDC
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async loginOIDC(response: ResponseContext): Promise<AuthResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthResponse',
        '',
      ) as AuthResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthResponse',
        '',
      ) as AuthResponse
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
   * @params response Response returned by the server for a request to loginWithIdToken
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async loginWithIdToken(
    response: ResponseContext,
  ): Promise<AuthResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthResponse',
        '',
      ) as AuthResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthResponse',
        '',
      ) as AuthResponse
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
   * @params response Response returned by the server for a request to logout
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async logout(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('204', response.httpStatusCode)) {
      return
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Unauthorized - No active session or invalid token',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'void',
        '',
      ) as void
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
   * @params response Response returned by the server for a request to me
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async me(response: ResponseContext): Promise<AuthPlayerResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
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
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
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
   * @params response Response returned by the server for a request to poolOAuth
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async poolOAuth(response: ResponseContext): Promise<AuthResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthResponse',
        '',
      ) as AuthResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Api key is not valid',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthResponse',
        '',
      ) as AuthResponse
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
   * @params response Response returned by the server for a request to refresh
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async refresh(response: ResponseContext): Promise<AuthResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthResponse',
        '',
      ) as AuthResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthResponse',
        '',
      ) as AuthResponse
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
   * @params response Response returned by the server for a request to registerGuest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async registerGuest(response: ResponseContext): Promise<AuthResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthResponse',
        '',
      ) as AuthResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Api key is not valid',
        undefined,
        response.headers,
      )
    }
    if (isCodeInRange('409', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'User already exists',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthResponse',
        '',
      ) as AuthResponse
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
   * @params response Response returned by the server for a request to requestEmailVerification
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async requestEmailVerification(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('204', response.httpStatusCode)) {
      return
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'void',
        '',
      ) as void
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
   * @params response Response returned by the server for a request to requestResetPassword
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async requestResetPassword(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('204', response.httpStatusCode)) {
      return
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'void',
        '',
      ) as void
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
   * @params response Response returned by the server for a request to resetPassword
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async resetPassword(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('204', response.httpStatusCode)) {
      return
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'void',
        '',
      ) as void
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
   * @params response Response returned by the server for a request to signupEmailPassword
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async signupEmailPassword(
    response: ResponseContext,
  ): Promise<SignupEmailPassword201Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('201', response.httpStatusCode)) {
      const body: SignupEmailPassword201Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SignupEmailPassword201Response',
        '',
      ) as SignupEmailPassword201Response
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Api key is not valid',
        undefined,
        response.headers,
      )
    }
    if (isCodeInRange('409', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'User already exists',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SignupEmailPassword201Response = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'SignupEmailPassword201Response',
        '',
      ) as SignupEmailPassword201Response
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
   * @params response Response returned by the server for a request to thirdParty
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async thirdParty(
    response: ResponseContext,
  ): Promise<AuthPlayerResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
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
   * @params response Response returned by the server for a request to unlinkEmail
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unlinkEmail(
    response: ResponseContext,
  ): Promise<AuthPlayerResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
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
   * @params response Response returned by the server for a request to unlinkOAuth
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unlinkOAuth(
    response: ResponseContext,
  ): Promise<AuthPlayerResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
      return body
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
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
   * @params response Response returned by the server for a request to unlinkSIWE
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unlinkSIWE(
    response: ResponseContext,
  ): Promise<AuthPlayerResponse | void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: AuthPlayerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse',
        '',
      ) as AuthPlayerResponse
      return body
    }
    if (isCodeInRange('204', response.httpStatusCode)) {
      return
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Unauthorized - No active session or invalid token',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthPlayerResponse | void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'AuthPlayerResponse | void',
        '',
      ) as AuthPlayerResponse | void
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
   * @params response Response returned by the server for a request to verifyEmail
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async verifyEmail(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type'],
    )
    if (isCodeInRange('204', response.httpStatusCode)) {
      return
    }
    if (isCodeInRange('401', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        '',
        undefined,
        response.headers,
      )
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'void',
        '',
      ) as void
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
   * @params response Response returned by the server for a request to verifyOAuthToken
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async verifyOAuthToken(
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
        '',
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
