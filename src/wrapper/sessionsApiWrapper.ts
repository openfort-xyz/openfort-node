import {
    CreateSessionRequest,
    ListSessionsRequest,
    RevokeSessionRequest,
    SessionResponse,
    SessionsResponse,
    SignatureSessionRequest,
} from "../model";
import { BaseApiWrapper } from "./baseApiWrapper";
import { SessionsApi } from "../generated/api/sessionsApi";
import { httpErrorHandler } from "../utility/httpErrorHandler";
import { GetSessionRequest } from "../model/getSessionRequest";

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
        const response = await this.api.createSession(req);
        return response.body;
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param req Criteria to retrieve the list of the sessions
     */
    public async list(req: ListSessionsRequest): Promise<SessionsResponse> {
        const response = await this.api.getPlayerSessions(
            req.player,
            req.expandTransactionIntent ? ["transactionIntents"] : undefined,
            req.limit,
            req.filter,
            req.order,
            req.skip,
        );
        return response.body;
    }

    /**
     * Returns a player session by session id
     */
    public async get(req: GetSessionRequest): Promise<SessionResponse> {
        const response = await this.api.getSession(
            req.id,
            req.expandTransactionIntent ? ["transactionIntents"] : undefined,
        );
        return response.body;
    }

    /**
     * Revokes the session for the account.
     * @param req Parameters to revoke the session
     */
    public async revoke(req: RevokeSessionRequest): Promise<SessionResponse> {
        const response = await this.api.revokeSession(req);
        return response.body;
    }

    /**
     * Confirms the creation of a session with an external owner.
     * @param req: Parameters for session signature
     */
    public async signature(req: SignatureSessionRequest): Promise<SessionResponse> {
        const { id, ...request } = req;
        const response = await this.api.signatureSession(id, request);
        return response.body;
    }
}
