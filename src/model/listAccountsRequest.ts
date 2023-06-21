export interface ListAccountsRequest {
    player: string;
    expand?: string[];
    limit?: number;
    project?: string;
}
