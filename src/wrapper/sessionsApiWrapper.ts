import { SessionsApi } from "../generated/api/sessionsApi";
import {
    CreateSessionRequest,
    ListSessionsRequest,
    RevokeSessionRequest,
    SessionResponse,
    SessionsResponse,
    SignatureSessionRequest,
} from "../model";
import { PACKAGE, VERSION } from "../version";
import { httpErrorHandler } from "./httpErrorHandler";

export class SessionsApiWrapper {
    private readonly _api: SessionsApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new SessionsApi(basePath);
        this._api.accessToken = accessToken;
        this._api.defaultHeaders["User-Agent"] = `${PACKAGE}@${VERSION}`;
    }

    /**
     * Creates the session for the account.
     * @param req Parameters to create session
     */
    @httpErrorHandler()
    public async create(req: CreateSessionRequest): Promise<SessionResponse> {
        const response = await this._api.createSession(req);
        return response.body;
    }

    /**
     * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
     * @param req Criteria to retrieve the list of the sessions
     */
    @httpErrorHandler()
    public async list(req: ListSessionsRequest): Promise<SessionsResponse> {
        const response = await this._api.getPlayerSessions(
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
    @httpErrorHandler()
    public async revoke(req: RevokeSessionRequest): Promise<SessionResponse> {
        const response = await this._api.revokeSession(req);
        return response.body;
    }

    /**
     * Confirms the creation of a session with an external owner.
     * @param req: Parameters for session signature
     */
    @httpErrorHandler()
    public async signature(req: SignatureSessionRequest): Promise<SessionResponse> {
        const { id, ...request } = req;
        const response = await this._api.signatureSession(id, request);
        return response.body;
    }
}
