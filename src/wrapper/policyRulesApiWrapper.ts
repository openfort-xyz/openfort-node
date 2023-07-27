import { PolicyRulesApi } from "../generated/api/apis";
import {
	CreatePolicyRuleRequest,
	GetPolicyRulesRequest,
	PolicyRuleDeleteResponse,
	PolicyRuleResponse,
	PolicyRulesResponse,
	UpdatePolicyRuleRequest,
} from "../model";
import { PACKAGE, VERSION } from "../version";
import { httpErrorHandler } from "./httpErrorHandler";

export class PolicyRulesApiWrapper {
	private readonly _api: PolicyRulesApi;

	constructor(accessToken: string, basePath?: string) {
		this._api = new PolicyRulesApi(basePath);
		this._api.accessToken = accessToken;
		this._api.defaultHeaders["User-Agent"] = `${PACKAGE}@${VERSION}`;
	}

	/**
	 * Creates an allow function object.
	 * @param req Parameters to create policy rules.
	 */
	@httpErrorHandler()
	public async create(req: CreatePolicyRuleRequest): Promise<PolicyRuleResponse> {
		const response = await this._api.createPolicyRules(req);
		return response.body;
	}

	/**
	 * Returns a list of your allow functions for the given policy. The allow functions are returned sorted by creation date, with the most recently created allow functions appearing first.
	 * @param req Criteria to get policy rules by.
	 */
	@httpErrorHandler()
	public async list(req?: GetPolicyRulesRequest): Promise<PolicyRulesResponse> {
		const response = await this._api.getPolicyRules(req?.expand, req?.policy);
		return response.body;
	}

	/**
	 * Updates your allow functions object.
	 * @param req Parameters to update policy rules
	 */
	@httpErrorHandler()
	public async update(req: UpdatePolicyRuleRequest): Promise<PolicyRuleResponse> {
		const { id, ...request } = req;
		const response = await this._api.updatePolicyRules(id, request);
		return response.body;
	}

	/**
	 * Deletes a polcy rule (allow_functions) object.
	 * @param id Id of the policy rule
	 */
	@httpErrorHandler()
	public async delete(id: string): Promise<PolicyRuleDeleteResponse> {
		const response = await this._api.deletePolicyRules(id);
		return response.body;
	}
}
