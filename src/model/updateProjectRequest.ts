export interface UpdateProjectRequest {
    id: string;
    name: string;
    livemode?: boolean;
    project?: string;
    pk_policy?: string;
    pk_location?: string;
}
