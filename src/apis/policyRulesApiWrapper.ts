import {
    CreatePolicyRuleRequest,
    PolicyRuleDeleteResponse,
    PolicyRuleResponse,
    PolicyRuleListResponse,
    UpdatePolicyRuleRequest,
    PolicyRuleListQueries,
} from "../models";
import { BaseApiWrapper } from "./baseApiWrapper";
import { PolicyRulesApi } from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";

@httpErrorHandler
export class PolicyRulesApiWrapper extends BaseApiWrapper<PolicyRulesApi> {
    constructor(accessToken: string, basePath?: string) {
        super(PolicyRulesApi, accessToken, basePath);
    }

    /**
     * Creates an allow function object.
     * @param req Parameters to create policy rules.
     */
    public async create(req: CreatePolicyRuleRequest): Promise<PolicyRuleResponse> {
        return await this.api.createPolicyRules(req);
    }

    /**
     * Returns a list of your allow functions for the given policy. The allow functions are returned sorted by creation date, with the most recently created allow functions appearing first.
     * @param req Criteria to get policy rules by.
     */
    public async list(req: PolicyRuleListQueries): Promise<PolicyRuleListResponse> {
        return await this.api.getPolicyRules(req.policy, req.limit, req.skip, req.order, req.expand);
    }

    /**
     * Updates your allow functions object.
     * @param req Parameters to update policy rules
     */
    public async update(req: UpdatePolicyRuleRequest): Promise<PolicyRuleResponse> {
        const { id, ...request } = req;
        return await this.api.updatePolicyRules(id, request);
    }

    /**
     * Deletes a polcy rule (allow_functions) object.
     * @param id Id of the policy rule
     */
    public async delete(id: string): Promise<PolicyRuleDeleteResponse> {
        return await this.api.deletePolicyRules(id);
    }
}
