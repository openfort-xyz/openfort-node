export interface CreatePlayerAccountRequest {
    id: string;
    chain_id: number;
    project?: string;
    external_owner_address?: string;
}
