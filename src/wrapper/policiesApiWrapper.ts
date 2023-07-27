import {
    CreatePolicyRequest,
    CreatePolicyRuleRequest,
    GasReport,
    GetAllowFunctionsRequest,
    GetPolicyRequest,
    GetPolicyTotalGasUsageRequest,
    ListPoliciesRequest,
    PoliciesResponse,
    PolicyDeleteResponse,
    PolicyResponse,
    PolicyRuleResponse,
    PolicyRulesResponse,
    UpdatePolicyAllowFunctionRequest,
    UpdatePolicyRequest,
} from "../model";
import {BaseApiWrapper} from "./baseApiWrapper";
import {PoliciesApi} from "../generated/api/policiesApi";
import {httpErrorHandler} from "../utility/httpErrorHandler";

@httpErrorHandler
export class PoliciesApiWrapper extends BaseApiWrapper<PoliciesApi> {
    constructor(accessToken: string, basePath?: string) {
        super(PoliciesApi, accessToken, basePath);
    }

    /**
     * Creates policy
     * @param req parameters to create
     */
    public async create(req: CreatePolicyRequest): Promise<PolicyResponse> {
        const response = await this.api.createPolicy(req);
        return response.body;
    }

    /**
     * Updates policy
     * @param req parameters to create
     */
    public async update(req: UpdatePolicyRequest): Promise<PolicyResponse> {
        const {id, ...body} = req;
        const response = await this.api.updatePolicy(id, body);
        return response.body;
    }

    /**
     * Creates allow function
     * @param req parameters to create
     */
    public async createAllowFunction(req: CreatePolicyRuleRequest): Promise<PolicyRuleResponse> {
        const {policy, ...body} = req;
        const response = await this.api.createPolicyAllowFunction(policy, body);
        return response.body;
    }

    /**
     * Deletes a policy object.
     * @param id
     */
    public async delete(id: string): Promise<PolicyDeleteResponse> {
        const response = await this.api.deletePolicy(id);
        return response.body;
    }

    /**
     * Gets all policy objects for a given project.
     * @param req Criteria to retrieve the policies by
     */
    public async list(req?: ListPoliciesRequest): Promise<PoliciesResponse> {
        const response = await this.api.getPolicies(req?.limit, req?.expand);
        return response.body;
    }

    /**
     * Gets a policy object for a given project.
     * @param req Criteria to retrieve the policy by
     */
    public async get(req: GetPolicyRequest): Promise<PolicyResponse> {
        const response = await this.api.getPolicy(req.id, req.expand);
        return response.body;
    }

    /**
     * Gets allows functions
     * @param req Criteria to get allow functions
     */
    public async getAllowFunctions(req: GetAllowFunctionsRequest): Promise<PolicyRulesResponse> {
        const response = await this.api.getPolicyAllowFunctions(req.id, req.expand);
        return response.body;
    }

    /**
     * Get policy total gas usage
     * @param req Criteria to get usage
     */
    public async getPolicyTotalGasUsage(req: GetPolicyTotalGasUsageRequest): Promise<GasReport> {
        const response = await this.api.getPolicyTotalGasUsage(req.id);
        return response.body;
    }

    /**
     * Update policy allow function
     * @param req Parameters to update
     */
    public async updateAllowFunction(req: UpdatePolicyAllowFunctionRequest): Promise<PolicyRuleResponse> {
        const {policy, policyRule, ...body} = req;
        const response = await this.api.updatePolicyAllowFunction(policy, policyRule, body);
        return response.body;
    }
}
