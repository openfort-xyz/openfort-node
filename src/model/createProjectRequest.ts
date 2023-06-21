export interface CreateProjectRequest {
    name: string;
    livemode?: boolean;
    project?: string;
    pk_policy?: string;
    pk_location?: string;
}
