import {PolicyRuleResponse} from "../generated/model/policyRuleResponse";
import {PolicyRulesResponse} from "../generated/model/policyRulesResponse";
import {DefaultApi} from "../generated/api/defaultApi";
import {CreatePolicyRulesRequest} from "../model/createPolicyRulesRequest";
import {httpErrorHandler} from "./http-error-handler";
import {GetPolicyRulesRequest} from "../model/getPolicyRulesRequest";
import {UpdatePolicyRulesRequest} from "../model/updatePolicyRulesRequest";

export class PolicyRulesApiWrapper {
    private readonly _api: DefaultApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new DefaultApi(basePath);
        this._api.accessToken = accessToken;
    }

    /**
     * Creates an allow function object.
     * @param req Parameters to create policy rules.
     */
    @httpErrorHandler()
    public async create(req: CreatePolicyRulesRequest): Promise<PolicyRuleResponse> {
        const response = await this._api.createPolicyRules(
            req.type,
            req.function_name,
            req.policy,
            req.contract,
            req.project,
        );
        return response.body;
    }

    /**
     * Returns a list of your allow functions for the given policy. The allow functions are returned sorted by creation date, with the most recently created allow functions appearing first.
     * @param req Criteria to get policy rules by.
     */
    @httpErrorHandler()
    public async get(req?: GetPolicyRulesRequest): Promise<PolicyRulesResponse> {
        const response = await this._api.getPolicyRules(req?.project, req?.policy);
        return response.body;
    }

    /**
     * Updates your allow functions object.
     * @param req Parameters to update policy rules
     */
    @httpErrorHandler()
    public async update(req: UpdatePolicyRulesRequest): Promise<PolicyRuleResponse> {
        const response = await this._api.updatePolicyRules(
            req.id,
            req.type,
            req.function_name,
            req.policy,
            req.contract,
            req.policy,
        );
        return response.body;
    }
}
