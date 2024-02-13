import { ContractReadQueries as ApiContractReadQueries } from "../generated";

export interface ReadContractRequest extends ApiContractReadQueries {
    id: string;
    functionName: string;
    functionArgs?: any[];
}
