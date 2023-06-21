import { ContractDeleteResponse } from '../generated/model/contractDeleteResponse';
import { ContractResponse } from '../generated/model/contractResponse';
import { ContractsResponse } from '../generated/model/contractsResponse';
import {ContractsApi} from "../generated/api/contractsApi";
import {CreateContractRequest} from "../model/createContractRequest";
import {httpErrorHandler} from "./http-error-handler";
import {GetContractRequest} from "../model/getContractRequest";
import {ListContractsRequest} from "../model/listContractsRequest";

export class ContractsApiWrapper {
    private readonly _api: ContractsApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new ContractsApi(basePath);
        this._api.accessToken = accessToken;
    }

    /**
     * Creates a contract object.
     * @param req Parameters to create contract
     */
    @httpErrorHandler()
    public async create(req: CreateContractRequest) : Promise<ContractResponse> {
        const response = await this._api.createContract(req.name, req.chain_id, req.address, req.abi, req.public_verification, req.project);
        return response.body;
    }

    /**
     * Deletes a contract object.
     * @param id Id of the contract to delete
     */
    @httpErrorHandler()
    public async delete(id: string) : Promise<ContractDeleteResponse> {
        const response = await this._api.deleteContract(id);
        return response.body;
    }

    /**
     * Retrieves the details of an existing contract. Supply the unique contract ID from either a contract creation request or the contract list, and Openfort will return the corresponding contract information.
     * @param req Criteria to get the contract.
     */
    @httpErrorHandler()
    public async get(req: GetContractRequest) : Promise<ContractResponse> {
        const response = await this._api.getContract(req.id, req.project);
        return response.body;
    }

    /**
     * Returns a list of your contracts. The contracts are returned sorted by creation date, with the most recently created contracts appearing first.
     * @param req Criteria to retrieve list of contracts.
     */
    @httpErrorHandler()
    public async list(req?: ListContractsRequest) : Promise<ContractsResponse> {
        const response = await this._api.getContracts(req?.project, req?.limit);
        return response.body;
    }
}
