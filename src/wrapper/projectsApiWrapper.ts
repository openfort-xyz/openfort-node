import {httpErrorHandler} from "./http-error-handler";
import {ProjectsApi} from "../generated/api/projectsApi";
import {UpdateProjectRequest, GetProjectResponse, ProjectResponse, ProjectsResponse, ProjectRequest} from "../model";

export class ProjectsApiWrapper {
    private readonly _api: ProjectsApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new ProjectsApi(basePath);
        this._api.accessToken = accessToken;
    }

    /**
     * Creates a project object.
     * @param req Parameters to create project
     */
    @httpErrorHandler()
    public async create(req: ProjectRequest): Promise<ProjectResponse> {
        const response = await this._api.createProject(req);
        return response.body;
    }

    /**
     * Get current project
     */
    @httpErrorHandler()
    public async getCurrent(): Promise<GetProjectResponse> {
        const response = await this._api.get();
        return response.body;
    }

    /**
     * Get project by id
     * @param id Id of the project
     */
    @httpErrorHandler()
    public async get(id: string): Promise<ProjectResponse> {
        const response = await this._api.getProject(id);
        return response.body;
    }

    /**
     * List of projects
     * @param project
     */
    @httpErrorHandler()
    public async list(project?: string): Promise<ProjectsResponse> {
        const response = await this._api.getProjects(project);
        return response.body;
    }
    /**
     * Updates a project object.
     * @param req Parameters for update project
     */
    @httpErrorHandler()
    public async updateProject(req: UpdateProjectRequest): Promise<ProjectResponse> {
        const {id, ...request} = req;
        const response = await this._api.updateProject(id, request);
        return response.body;
    }
}
