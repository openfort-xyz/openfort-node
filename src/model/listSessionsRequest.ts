export interface ListSessionsRequest {
    player: string;
    expandTransactionIntent?: boolean;
    limit?: number;
    filter?: string;
    order?: string;
    skip?: number;
}
