import {
    CreatePolicyRuleRequest,
    GetPolicyRulesRequest,
    PolicyRuleDeleteResponse,
    PolicyRuleResponse,
    PolicyRuleListResponse,
    UpdatePolicyRuleRequest,
} from "../model";
import { BaseApiWrapper } from "./baseApiWrapper";
import { PolicyRulesApi } from "../generated/api/apis";
import { httpErrorHandler } from "../utility/httpErrorHandler";

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
        const response = await this.api.createPolicyRules(req);
        return response.body;
    }

    /**
     * Returns a list of your allow functions for the given policy. The allow functions are returned sorted by creation date, with the most recently created allow functions appearing first.
     * @param req Criteria to get policy rules by.
     */
    public async list(req?: GetPolicyRulesRequest): Promise<PolicyRuleListResponse> {
        const response = await this.api.getPolicyRules(req?.expand, req?.policy);
        return response.body;
    }

    /**
     * Updates your allow functions object.
     * @param req Parameters to update policy rules
     */
    public async update(req: UpdatePolicyRuleRequest): Promise<PolicyRuleResponse> {
        const { id, ...request } = req;
        const response = await this.api.updatePolicyRules(id, request);
        return response.body;
    }

    /**
     * Deletes a polcy rule (allow_functions) object.
     * @param id Id of the policy rule
     */
    public async delete(id: string): Promise<PolicyRuleDeleteResponse> {
        const response = await this.api.deletePolicyRules(id);
        return response.body;
    }
}
