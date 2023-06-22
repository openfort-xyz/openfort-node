import {SessionResponse} from "../generated/model/sessionResponse";
import {SessionsResponse} from "../generated/model/sessionsResponse";
import {SessionsApi} from "../generated/api/sessionsApi";
import {httpErrorHandler} from "./http-error-handler";
import {CreateSessionRequest} from "../model/createSessionRequest";
import {ListSessionsRequest} from "../model/listSessionsRequest";
import {RevokeSessionRequest} from "../model/revokeSessionRequest";
import {SignatureSessionRequest} from "../model/signatureSessionRequest";

export class SessionsApiWrapper {
    private readonly _api: SessionsApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new SessionsApi(basePath);
        this._api.accessToken = accessToken;
    }

    /**
     * Creates the session for the account.
     * @param req Parameters to create session
     */
    @httpErrorHandler()
    public async create(req: CreateSessionRequest): Promise<SessionResponse> {
        const response = await this._api.createSession(
            req.player,
            req.address,
            req.chain_id,
            req.valid_until,
            req.valid_after,
            req.policy,
            req.external_owner_address,
            req.whitelist,
            req.limit,
        );
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
            req.project,
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
        const response = await this._api.revokeSession(req.player, req.chain_id, req.address, req.policy);
        return response.body;
    }

    /**
     * Confirms the creation of a session with an external owner.
     * @param req: Parameters for session signature
     */
    @httpErrorHandler()
    public async signature(req: SignatureSessionRequest): Promise<SessionResponse> {
        const response = await this._api.signatureSession(req.id, req.signature);
        return response.body;
    }
}
