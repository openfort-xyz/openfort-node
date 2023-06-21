export interface RevokePlayerSessionRequest {
    id: string;
    address: string;
    chain_id: number;
    policy?: string;
}