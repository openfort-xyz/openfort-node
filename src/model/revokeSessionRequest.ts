export interface RevokeSessionRequest {
    player: string;
    chain_id: number;
    address: string;
    policy?: string;
}
