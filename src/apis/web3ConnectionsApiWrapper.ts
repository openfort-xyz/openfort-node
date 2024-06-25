import { BaseApiWrapper } from "./baseApiWrapper";
import {
    CreateWeb3ConnectionRequest,
    Web3ActionListResponse,
    Web3ActionResponse,
    Web3ConnectionListQueries,
    Web3ConnectionListResponse,
    Web3ConnectionResponse,
    Web3ConnectionsApi,
} from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";
import { GetWeb3ConnectionRequest } from "../models/getWeb3ConnectionRequest";
import { GetWeb3ActionsList } from "../models/getWeb3ActionsList";
import { CreateSubmitWeb3ActionRequest } from "../models/submitWeb3ActionRequest";

@httpErrorHandler
export class Web3ConnectionsApiWrapper extends BaseApiWrapper<Web3ConnectionsApi> {
    static type = "web3Connections";

    constructor(accessToken: string, basePath?: string) {
        super(Web3ConnectionsApi, accessToken, basePath);
    }

    /**
     * Creates a web3 connection object.
     * @param req Parameters to create web3 connection
     */
    public async create(req: CreateWeb3ConnectionRequest): Promise<Web3ConnectionResponse> {
        return await this.api.createWeb3Connection(req);
    }

    /**
     * Retrieves the details of an existing web3 connection. Supply the unique web3 connection ID from either a web3 connection creation request or the web3 connection list. Openfort will return the corresponding web3 connection information.
     * @param req Parameters to retrieve web3 connection
     */
    public async get(req: GetWeb3ConnectionRequest): Promise<Web3ConnectionResponse> {
        return await this.api.getWeb3Connection(req.id, req.expand);
    }

    /**
     * Returns a list of web3 connections for the given player. The connections are returned sorted by creation date, with the most recently created connections appearing first. By default, a maximum of ten connections are shown per page.
     * @param req Parameters to get list of the web3 connections
     */
    public async list(req: Web3ConnectionListQueries): Promise<Web3ConnectionListResponse> {
        return await this.api.getWeb3Connections(req?.limit, req?.skip, req?.order, req.player, req?.disconnected);
    }

    /**
     * Returns a list of web3 actions for the given web3 connection. The actions are returned sorted by creation date, with the most recently received action appearing first. By default, a maximum of ten actions are shown per page.
     * @param req Parameters to get list of web3 actions
     */
    public async getWeb3Actions(req: GetWeb3ActionsList): Promise<Web3ActionListResponse> {
        return await this.api.getWeb3Actions(req.id);
    }

    /**
     * Approve or Reject a web3 action for the given web3 connection.
     * @param req Parameters to approve or reject a web3 action
     */
    public async submitWeb3Action(req: CreateSubmitWeb3ActionRequest): Promise<Web3ActionResponse> {
        return await this.api.submitWeb3Action(req.id, req.web3Action, req.submitWeb3ActionRequest);
    }
}
