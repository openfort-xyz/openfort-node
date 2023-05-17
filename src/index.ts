import { ContractsApi } from './api/contractsApi';
import { DefaultApi } from './api/defaultApi';
import { PlayersApi } from './api/playersApi';
import { PoliciesApi } from './api/policiesApi';
import { ProjectsApi } from './api/projectsApi';
import { TransactionIntentsApi } from './api/transactionIntentsApi';

export class OpenfortClient {
    private _contractApi?: ContractsApi;
    private _defaultApi?: DefaultApi;
    private _playerApi?: PlayersApi;
    private _policiesApi?: PoliciesApi;
    private _projectApi?: ProjectsApi;
    private _transactionApi?: TransactionIntentsApi;

    constructor(private readonly apiKey: string, private readonly basePath?: string) {
    }

    public get contracts(): ContractsApi {
        if (!this._contractApi) {
            this._contractApi = new ContractsApi(this.basePath);
            this._contractApi.accessToken = this.apiKey;
        }
        return this._contractApi;
    }

    public get default(): DefaultApi {
        if (!this._defaultApi) {
            this._defaultApi = new DefaultApi(this.basePath);
            this._defaultApi.accessToken = this.apiKey;
        }
        return this._defaultApi;
    }

    public get players(): PlayersApi {
        if (!this._playerApi) {
            this._playerApi = new PlayersApi(this.basePath);
            this._playerApi.accessToken = this.apiKey;
        }
        return this._playerApi;
    }

    public get policies(): PoliciesApi {
        if (!this._policiesApi) {
            this._policiesApi = new PoliciesApi(this.basePath);
            this._policiesApi.accessToken = this.apiKey;
        }
        return this._policiesApi;
    }

    public get projects(): ProjectsApi {
        if (!this._projectApi) {
            this._projectApi = new ProjectsApi();
            this._projectApi.accessToken = this.apiKey;
        }
        return this._projectApi;
    }

    public get transactions(): TransactionIntentsApi {
        if (!this._transactionApi) {
            this._transactionApi = new TransactionIntentsApi(this.basePath);
            this._transactionApi.accessToken = this.apiKey;
        }
        return this._transactionApi;
    }
}