import { SessionsApi } from '../generated'
import type {
  CreateSessionRequest,
  RevokeSessionRequest,
  SessionListQueries,
  SessionListResponse,
  SessionResponse,
  SignatureSessionRequest,
} from '../models'
import type { GetSessionRequest } from '../models/getSessionRequest'
import { httpErrorHandler } from '../utilities/httpErrorHandler'
import { BaseApiWrapper } from './baseApiWrapper'

@httpErrorHandler
export class SessionsApiWrapper extends BaseApiWrapper<SessionsApi> {
  static type = 'sessions'

  constructor(accessToken: string, basePath?: string) {
    super(SessionsApi, accessToken, basePath)
  }

  /**
   * Creates the session for the account.
   * @param req Parameters to create session
   */
  public async create(
    req: CreateSessionRequest,
    behalfOf?: string,
  ): Promise<SessionResponse> {
    return await this.api.createSession(req, behalfOf)
  }

  /**
   * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
   * @param req Criteria to retrieve the list of the sessions
   */
  public async list(req: SessionListQueries): Promise<SessionListResponse> {
    return await this.api.getPlayerSessions(
      req.player,
      req.limit,
      req.skip,
      req.order,
      req.expand,
    )
  }

  /**
   * Returns a player session by session id
   */
  public async get(req: GetSessionRequest): Promise<SessionResponse> {
    return await this.api.getSession(
      req.id,
      req.expandTransactionIntent ? ['transactionIntents'] : undefined,
    )
  }

  /**
   * Revokes the session for the account.
   * @param req Parameters to revoke the session
   */
  public async revoke(
    req: RevokeSessionRequest,
    behalfOf?: string,
  ): Promise<SessionResponse> {
    return await this.api.revokeSession(req, behalfOf)
  }

  /**
   * Confirms the creation of a session with an external owner.
   * @param req: Parameters for session signature
   */
  public async signature(
    req: SignatureSessionRequest,
  ): Promise<SessionResponse> {
    const { id, ...request } = req
    return await this.api.signatureSession(id, request)
  }
}
