import {httpErrorHandler} from "./httpErrorHandler";
import {PoliciesApi} from "../generated/api/policiesApi";
import {
    Gas,
    PoliciesResponse,
    PolicyDeleteResponse,
    PolicyResponse,
    PolicyRuleResponse,
    PolicyRulesResponse,
    SumGas,
    CreatePolicyAllowFunctionRequest,
    ListPoliciesRequest,
    GetPolicyRequest,
    GetAllowFunctionsRequest,
    GetPolicyDailyGasUsageRequest,
    UpdatePolicyAllowFunctionRequest,
    GetPolicyTotalGasUsageRequest,
    PolicyRequest,
} from "../model";

export class PoliciesApiWrapper {
    private readonly _api: PoliciesApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new PoliciesApi(basePath);
        this._api.accessToken = accessToken;
    }


    /**
     * Creates allow function
     * @param req parameters to create
     */
    @httpErrorHandler()
    public async create(req: PolicyRequest): Promise<PolicyResponse> {
        const response = await this._api.createPolicy(req);
        return response.body;
    }

    /**
     * Creates allow function
     * @param req parameters to create
     */
    @httpErrorHandler()
    public async createAllowFunction(req: CreatePolicyAllowFunctionRequest): Promise<PolicyRuleResponse> {
        const {id, ...body} = req;
        const response = await this._api.createPolicyAllowFunction(id, body);
        return response.body;
    }

    /**
     * Deletes a policy object.
     * @param id
     */
    @httpErrorHandler()
    public async delete(id: string): Promise<PolicyDeleteResponse> {
        const response = await this._api.deletePolicy(id);
        return response.body;
    }

    /**
     * Gets all policy objects for a given project.
     * @param req Criteria to retrieve the policies by
     */
    @httpErrorHandler()
    public async list(req?: ListPoliciesRequest): Promise<PoliciesResponse> {
        const response = await this._api.getPolicies(req?.limit, req?.expand);
        return response.body;
    }

    /**
     * Gets a policy object for a given project.
     * @param req Criteria to retrieve the policy by
     */
    @httpErrorHandler()
    public async get(req: GetPolicyRequest): Promise<PolicyResponse> {
        const response = await this._api.getPolicy(req.id, req.expand);
        return response.body;
    }

    /**
     * Gets allows functions
     * @param req Criteria to get allow functions
     */
    @httpErrorHandler()
    public async getAllowFunctions(req: GetAllowFunctionsRequest): Promise<PolicyRulesResponse> {
        const response = await this._api.getPolicyAllowFunctions(req.id, req.expand);
        return response.body;
    }

    /**
     * Get daily gas usage by policy
     * @param req Criteria to get usage
     */
    @httpErrorHandler()
    public async getDailyGasUsage(req: GetPolicyDailyGasUsageRequest): Promise<Gas> {
        const response = await this._api.getPolicyDailyGasUsage(req.id, req.from, req.to);
        return response.body;
    }

    /**
     * Get policy total gas usage
     * @param req Criteria to get usage
     */
    @httpErrorHandler()
    public async getPolicyTotalGasUsage(req: GetPolicyTotalGasUsageRequest): Promise<SumGas> {
        const response = await this._api.getPolicyTotalGasUsage(req.id, req.from, req.to);
        return response.body;
    }

    /**
     * Update policy allow function
     * @param req Parameters to update
     */
    @httpErrorHandler()
    public async updateAllowFunction(req: UpdatePolicyAllowFunctionRequest): Promise<PolicyRuleResponse> {
        const {policy_rule, ...body} = req;
        const response = await this._api.updatePolicyAllowFunction(req.policy, policy_rule, body);
        return response.body;
    }
}
