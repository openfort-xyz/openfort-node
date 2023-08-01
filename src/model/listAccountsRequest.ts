export interface ListAccountsRequest {
    player: string;
    limit?: number;
    expandTransactionIntent?: boolean;
}
