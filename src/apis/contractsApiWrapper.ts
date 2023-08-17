import {
    ContractDeleteResponse,
    ContractResponse,
    ContractListResponse,
    CreateContractRequest,
    GetContractRequest,
    UpdateContractRequest,
    ContractListQueries,
} from "../models";
import { BaseApiWrapper } from "./baseApiWrapper";
import { ContractsApi } from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";

@httpErrorHandler
export class ContractsApiWrapper extends BaseApiWrapper<ContractsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(ContractsApi, accessToken, basePath);
    }

    /**
     * Creates a contract object.
     * @param req Parameters to create contract
     */
    public async create(req: CreateContractRequest): Promise<ContractResponse> {
        return await this.api.createContract(req);
    }

    /**
     * Updates a contract object.
     * @param req Parameters to update the contract
     */
    public async update(req: UpdateContractRequest): Promise<ContractResponse> {
        const { id, ...body } = req;
        return await this.api.updateContract(id, body);
    }

    /**
     * Deletes a contract object.
     * @param id Id of the contract to delete
     */
    public async delete(id: string): Promise<ContractDeleteResponse> {
        return await this.api.deleteContract(id);
    }

    /**
     * Retrieves the details of an existing contract. Supply the unique contract ID from either a contract creation request or the contract list, and Openfort will return the corresponding contract information.
     * @param req Criteria to get the contract.
     */
    public async get(req: GetContractRequest): Promise<ContractResponse> {
        return await this.api.getContract(req.id);
    }

    /**
     * Returns a list of your contracts. The contracts are returned sorted by creation date, with the most recently created contracts appearing first.
     * @param req Criteria to retrieve list of contracts.
     */
    public async list(req?: ContractListQueries): Promise<ContractListResponse> {
        return await this.api.getContracts(
            req?.limit,
            req?.skip,
            req?.order,
            req?.name,
            req?.deleted,
            req?.chainId,
            req?.address,
        );
    }
}
