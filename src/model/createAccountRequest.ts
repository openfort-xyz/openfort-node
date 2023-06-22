export interface CreateAccountRequest {
    chain_id: number;
    player: string;
    project?: string;
    external_owner_address?: string;
}
