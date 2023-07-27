import {httpErrorHandler} from "../utility/httpErrorHandler";
import {ProjectsApi} from "../generated/api/projectsApi";
import {UpdateProjectRequest, ProjectResponse, ProjectsResponse, ProjectRequest} from "../model";
import {BaseApiWrapper} from "./baseApiWrapper";

@httpErrorHandler
export class ProjectsApiWrapper extends BaseApiWrapper<ProjectsApi> {
    constructor(accessToken: string, basePath?: string) {
        super(ProjectsApi, accessToken, basePath);
    }

    /**
     * Creates a project object.
     * @param req Parameters to create project
     */
    public async create(req: ProjectRequest): Promise<ProjectResponse> {
        const response = await this.api.createProject(req);
        return response.body;
    }

    /**
     * Get project by id
     * @param id Id of the project
     */
    public async get(id: string): Promise<ProjectResponse> {
        const response = await this.api.getProject(id);
        return response.body;
    }

    /**
     * List of projects
     * @param project
     */
    public async list(): Promise<ProjectsResponse> {
        const response = await this.api.getProjects();
        return response.body;
    }

    /**
     * Updates a project object.
     * @param req Parameters for update project
     */
    public async updateProject(req: UpdateProjectRequest): Promise<ProjectResponse> {
        const {id, ...request} = req;
        const response = await this.api.updateProject(id, request);
        return response.body;
    }
}
