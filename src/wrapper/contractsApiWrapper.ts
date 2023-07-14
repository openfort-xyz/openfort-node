import {httpErrorHandler} from "./httpErrorHandler";
import {ContractsApi} from "../generated/api/contractsApi";
import {
    GetContractRequest,
    ListContractsRequest,
    ContractDeleteResponse,
    ContractsResponse,
    ContractResponse,
    CreateContractRequest,
} from "../model";
import {PACKAGE, VERSION} from "../version";

export class ContractsApiWrapper {
    private readonly _api: ContractsApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new ContractsApi(basePath);
        this._api.accessToken = accessToken;
        this._api.defaultHeaders["User-Agent"] = `${PACKAGE}@${VERSION}`;
    }

    /**
     * Creates a contract object.
     * @param req Parameters to create contract
     */
    @httpErrorHandler()
    public async create(req: CreateContractRequest): Promise<ContractResponse> {
        const response = await this._api.createContract(req);
        return response.body;
    }

    /**
     * Deletes a contract object.
     * @param id Id of the contract to delete
     */
    @httpErrorHandler()
    public async delete(id: string): Promise<ContractDeleteResponse> {
        const response = await this._api.deleteContract(id);
        return response.body;
    }

    /**
     * Retrieves the details of an existing contract. Supply the unique contract ID from either a contract creation request or the contract list, and Openfort will return the corresponding contract information.
     * @param req Criteria to get the contract.
     */
    @httpErrorHandler()
    public async get(req: GetContractRequest): Promise<ContractResponse> {
        const response = await this._api.getContract(req.id);
        return response.body;
    }

    /**
     * Returns a list of your contracts. The contracts are returned sorted by creation date, with the most recently created contracts appearing first.
     * @param req Criteria to retrieve list of contracts.
     */
    @httpErrorHandler()
    public async list(req?: ListContractsRequest): Promise<ContractsResponse> {
        const response = await this._api.getContracts(req?.limit);
        return response.body;
    }
}
