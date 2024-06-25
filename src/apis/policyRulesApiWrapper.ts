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
    static type = 'policyRules';

    constructor(accessToken: string, basePath?: string) {
        super(PolicyRulesApi, accessToken, basePath);
    }

    /**
     * Creates an policy rule object.
     * @param req Parameters to create policy rule.
     */
    public async create(req: CreatePolicyRuleRequest): Promise<PolicyRuleResponse> {
        return await this.api.createPolicyRule(req);
    }

    /**
     * Returns a list of your policy rule for the given policy. The policy rule are returned sorted by creation date, with the most recently created policy rule appearing first.
     * @param req Criteria to get policy rules by.
     */
    public async list(req: PolicyRuleListQueries): Promise<PolicyRuleListResponse> {
        return await this.api.getPolicyRules(req.policy, req.limit, req.skip, req.order, req.expand);
    }

    /**
     * Updates your policy rule object.
     * @param req Parameters to update policy rule
     */
    public async update(req: UpdatePolicyRuleRequest): Promise<PolicyRuleResponse> {
        const { id, ...request } = req;
        return await this.api.updatePolicyRule(id, request);
    }

    /**
     * Deletes a policy rule (allow_functions) object.
     * @param id Id of the policy rule
     */
    public async delete(id: string): Promise<PolicyRuleDeleteResponse> {
        return await this.api.deletePolicyRule(id);
    }
}
