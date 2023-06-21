export interface ListSessionsRequest {
    player: string;
    expand?: string[];
    limit?: number;
    project?: string;
    filter?: string;
    order?: string;
    skip?: number;
}
