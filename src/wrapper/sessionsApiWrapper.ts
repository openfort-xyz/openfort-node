import {httpErrorHandler} from "../utility/httpErrorHandler";
import {SessionsApi} from "../generated/api/sessionsApi";
import {
    ListSessionsRequest,
    SignatureSessionRequest,
    SessionResponse,
    SessionsResponse,
    CreateSessionRequest,
    RevokeSessionRequest,
} from "../model";
import {BaseApiWrapper} from "./baseApiWrapper";

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
            req.expand,
            req.limit,
            req.filter,
            req.order,
            req.skip,
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
        const {id, ...request} = req;
        const response = await this.api.signatureSession(id, request);
        return response.body;
    }
}
