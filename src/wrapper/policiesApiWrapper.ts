import { Gas } from '../generated/model/gas';
import { PoliciesResponse } from '../generated/model/policiesResponse';
import { PolicyDeleteResponse } from '../generated/model/policyDeleteResponse';
import { PolicyResponse } from '../generated/model/policyResponse';
import { PolicyRuleResponse } from '../generated/model/policyRuleResponse';
import { PolicyRulesResponse } from '../generated/model/policyRulesResponse';
import { SumGas } from '../generated/model/sumGas';
import {PoliciesApi} from "../generated/api/policiesApi";
import {httpErrorHandler} from "./http-error-handler";
import {CreatePolicyAllowFunctionRequest} from "../model/createPolicyAllowFunctionRequest";
import {ListPoliciesRequest} from "../model/listPoliciesRequest";
import {GetPolicyRequest} from "../model/getPolicyRequest";
import {GetAllowFunctionsRequest} from "../model/getAllowFunctionsRequest";
import {GetPolicyDailyGasUsageRequest} from "../model/getPolicyDailyGasUsageRequest";
import {GetPolicyTotalGasUsageRequest} from "../model/getPolicyTotalGasUsageRequest";
import {UpdatePolicyAllowFunctionRequest} from "../model/updatePolicyAllowFunctionRequest";

export class PoliciesApiWrapper {
    private readonly _api: PoliciesApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new PoliciesApi(basePath);
        this._api.accessToken = accessToken;
    }

    /**
     * Creates allow function
     * @param req: parameters to create
     */
    @httpErrorHandler()
    public async createAllowFunction(req: CreatePolicyAllowFunctionRequest) : Promise<PolicyRuleResponse> {
        const response = await this._api.createPolicyAllowFunction(req.id, req.type, req.function_name, req.contract, req.project);
        return response.body;
    }

    /**
     * Deletes a policy object.
     * @param id
     */
    @httpErrorHandler()
    public async delete(id: string) : Promise<PolicyDeleteResponse> {
        const response = await this._api.deletePolicy(id);
        return response.body;
    }

    /**
     * Gets all policy objects for a given project.
     * @param req Criteria to retrieve the policies by
     */
    @httpErrorHandler()
    public async list(req?: ListPoliciesRequest) : Promise<PoliciesResponse> {
        const response = await this._api.getPolicies(req?.project, req?.limit, req?.expand);
        return response.body;
    }

    /**
     * Gets a policy object for a given project.
     * @param req Criteria to retrieve the policy by
     */
    @httpErrorHandler()
    public async get(req: GetPolicyRequest) : Promise<PolicyResponse> {
        const response = await this._api.getPolicy(req.id, req.project, req.expand);
        return response.body;
    }

    /**
     * Gets allows functions
     * @param req Criteria to get allow functions
     */
    @httpErrorHandler()
    public async getAllowFunctions(req: GetAllowFunctionsRequest) : Promise<PolicyRulesResponse> {
        const response = await this._api.getPolicyAllowFunctions(req.id, req.project);
        return response.body;
    }

    /**
     * Get daily gas usage by policy
     * @param req Criteria to get usage
     */
    @httpErrorHandler()
    public async getDailyGasUsage(req: GetPolicyDailyGasUsageRequest) : Promise<Gas> {
        const response = await this._api.getPolicyDailyGasUsage(req.id, req.from, req.to);
        return response.body;
    }

    /**
     * Get policy total gas usage
     * @param req Criteria to get usage     */
    @httpErrorHandler()
    public async getPolicyTotalGasUsage(req: GetPolicyTotalGasUsageRequest) : Promise<SumGas> {
        const response = await this._api.getPolicyTotalGasUsage(req.id, req.from, req.to);
        return response.body;
    }

    /**
     * Update policy allow function
     * @param req Parameters to update
     */
    @httpErrorHandler()
    public async updateAllowFunction(req: UpdatePolicyAllowFunctionRequest) : Promise<PolicyRuleResponse> {
        const response = await this._api.updatePolicyAllowFunction(req.policy, req.policy_rule, req.function_name, req.contract, req.type, req.policy2, req.project);
        return response.body;
    }
}
