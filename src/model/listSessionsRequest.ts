export interface ListSessionsRequest {
	player: string;
	expand?: string[];
	limit?: number;
	filter?: string;
	order?: string;
	skip?: number;
}
