import { DeployRequest as ApiDeployRequest } from "../generated";

export interface DeployRequest extends ApiDeployRequest {
    id: string;
}
