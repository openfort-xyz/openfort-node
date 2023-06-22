import {PrismaJsonValue} from "../generated/model/prismaJsonValue";

export interface CreateContractRequest {
    name: string;
    chain_id: number;
    address?: string;
    abi?: PrismaJsonValue;
    public_verification?: boolean;
    project?: string;
}
