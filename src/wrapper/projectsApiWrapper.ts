import {GetProjectResponse} from "../generated/model/getProjectResponse";
import {ProjectResponse} from "../generated/model/projectResponse";
import {ProjectsResponse} from "../generated/model/projectsResponse";
import {httpErrorHandler} from "./http-error-handler";
import {CreateProjectRequest} from "../model/createProjectRequest";
import {ProjectsApi} from "../generated/api/projectsApi";
import {UpdateProjectRequest} from "../model/updateProjectRequest";

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
    public async create(req: CreateProjectRequest): Promise<ProjectResponse> {
        const response = await this._api.createProject(
            req.name,
            req.livemode,
            req.project,
            req.pk_policy,
            req.pk_location,
        );
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
        const response = await this._api.updateProject(
            req.id,
            req.name,
            req.livemode,
            req.project,
            req.pk_policy,
            req.pk_location,
        );
        return response.body;
    }
}
