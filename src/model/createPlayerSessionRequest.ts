export interface CreatePlayerSessionRequest {
    id: string;
    address: string;
    chain_id: number;
    valid_until: number;
    valid_after: number;
    policy?: string;
    external_owner_address?: string;
    whitelist?: string[];
    limit?: number;
}
