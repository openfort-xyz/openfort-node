import { ProjectRequest } from "../generated";

export interface UpdateProjectRequest extends ProjectRequest {
    id: string;
}
