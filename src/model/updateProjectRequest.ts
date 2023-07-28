import { ProjectRequest } from "../generated/model/projectRequest";

export interface UpdateProjectRequest extends ProjectRequest {
    id: string;
}
