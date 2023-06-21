import {Interaction} from "../generated/model/interaction";

export interface CreateTransactionIntentRequest {
    player: string;
    chain_id: number;
    optimistic: boolean;
    interactions: Interaction[];
    policy?: string;
    external_owner_address?: string;
    project?: string;
}
