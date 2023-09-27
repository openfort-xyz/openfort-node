import { UpdateProjectRequest as ApiUpdateProjectRequest } from "../generated";

export interface UpdateProjectRequest extends ApiUpdateProjectRequest {
    id: string;
}
