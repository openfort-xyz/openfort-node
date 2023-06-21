export interface ListTransactionIntentsRequest {
    expand?: string[];
    limit?: number;
    project?: string;
    filter?: string;
    order?: string;
    skip?: number;
}