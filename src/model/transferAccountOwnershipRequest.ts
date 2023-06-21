export interface TransferAccountOwnershipRequest {
    id: string;
    policy: string;
    chain_id: number;
    new_owner_address: string;
    project?: string;
    player?: string;
}
