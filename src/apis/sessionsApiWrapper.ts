import {
    CreateSessionRequest,
    RevokeSessionRequest,
    SessionResponse,
    SessionListResponse,
    SignatureSessionRequest,
    SessionListQueries,
} from "../models";
import { BaseApiWrapper } from "./baseApiWrapper";
import { SessionsApi } from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import { GetSessionRequest } from "../models/getSessionRequest";

@httpErrorHandler
export class SessionsApiWrapper extends BaseApiWrapper<SessionsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(SessionsApi, accessToken, basePath);
    }

    /**
     * Creates the session for the account.
     * @param req Parameters to create session
     */
    public async create(req: CreateSessionRequest): Promise<SessionResponse> {
        return await this.api.createSession(req);
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param req Criteria to retrieve the list of the sessions
     */
    public async list(req: SessionListQueries): Promise<SessionListResponse> {
        return await this.api.getPlayerSessions(req.player, req.limit, req.skip, req.order, req.expand, req.address);
    }

    /**
     * Returns a player session by session id
     */
    public async get(req: GetSessionRequest): Promise<SessionResponse> {
        return await this.api.getSession(req.id, req.expandTransactionIntent ? ["transactionIntents"] : undefined);
    }

    /**
     * Revokes the session for the account.
     * @param req Parameters to revoke the session
     */
    public async revoke(req: RevokeSessionRequest): Promise<SessionResponse> {
        return await this.api.revokeSession(req);
    }

    /**
     * Confirms the creation of a session with an external owner.
     * @param req: Parameters for session signature
     */
    public async signature(req: SignatureSessionRequest): Promise<SessionResponse> {
        const { id, ...request } = req;
        return await this.api.signatureSession(id, request);
    }
}
