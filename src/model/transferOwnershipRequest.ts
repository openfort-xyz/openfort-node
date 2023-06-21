export interface TransferOwnershipRequest {
    id: string;
    new_owner_address: string;
    policy: string;
    project?: string;
}
