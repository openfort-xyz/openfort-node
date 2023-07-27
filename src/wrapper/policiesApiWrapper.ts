import { PoliciesApi } from "../generated/api/policiesApi";
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
import { PACKAGE, VERSION } from "../version";
import { httpErrorHandler } from "./httpErrorHandler";

export class PoliciesApiWrapper {
	private readonly _api: PoliciesApi;

	constructor(accessToken: string, basePath?: string) {
		this._api = new PoliciesApi(basePath);
		this._api.accessToken = accessToken;
		this._api.defaultHeaders["User-Agent"] = `${PACKAGE}@${VERSION}`;
	}

	/**
	 * Creates policy
	 * @param req parameters to create
	 */
	@httpErrorHandler()
	public async create(req: CreatePolicyRequest): Promise<PolicyResponse> {
		const response = await this._api.createPolicy(req);
		return response.body;
	}

	/**
	 * Updates policy
	 * @param req parameters to create
	 */
	@httpErrorHandler()
	public async update(req: UpdatePolicyRequest): Promise<PolicyResponse> {
		const { id, ...body } = req;
		const response = await this._api.updatePolicy(id, body);
		return response.body;
	}

	/**
	 * Creates allow function
	 * @param req parameters to create
	 */
	@httpErrorHandler()
	public async createAllowFunction(req: CreatePolicyRuleRequest): Promise<PolicyRuleResponse> {
		const { policy, ...body } = req;
		const response = await this._api.createPolicyAllowFunction(policy, body);
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
	 * Get policy total gas usage
	 * @param req Criteria to get usage
	 */
	@httpErrorHandler()
	public async getPolicyTotalGasUsage(req: GetPolicyTotalGasUsageRequest): Promise<GasReport> {
		const response = await this._api.getPolicyTotalGasUsage(req.id);
		return response.body;
	}

	/**
	 * Update policy allow function
	 * @param req Parameters to update
	 */
	@httpErrorHandler()
	public async updateAllowFunction(req: UpdatePolicyAllowFunctionRequest): Promise<PolicyRuleResponse> {
		const { policy, policyRule, ...body } = req;
		const response = await this._api.updatePolicyAllowFunction(policy, policyRule, body);
		return response.body;
	}
}
