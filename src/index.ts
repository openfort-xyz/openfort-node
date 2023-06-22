import {AccountsApiWrapper} from "./wrapper/accountsApiWrapper";
import {ContractsApiWrapper} from "./wrapper/contractsApiWrapper";
import {PlayersApiWrapper} from "./wrapper/playersApiWrapper";
import {PoliciesApiWrapper} from "./wrapper/policiesApiWrapper";
import {PolicyRulesApiWrapper} from "./wrapper/policyRulesApiWrapper";
import {ProjectsApiWrapper} from "./wrapper/projectsApiWrapper";
import {SessionsApiWrapper} from "./wrapper/sessionsApiWrapper";
import {TransactionIntentsApiWrapper} from "./wrapper/transactionIntentsApiWrapper";

export default class Openfort {
    private _accountsApi?: AccountsApiWrapper;
    private _contractsApi?: ContractsApiWrapper;
    private _playersApi?: PlayersApiWrapper;
    private _policiesApi?: PoliciesApiWrapper;
    private _policyRulesApi?: PolicyRulesApiWrapper;
    private _projectsApi?: ProjectsApiWrapper;
    private _sessionsApi?: SessionsApiWrapper;
    private _transactionIntentsApi?: TransactionIntentsApiWrapper;

    constructor(private readonly apiKey: string, private readonly basePath?: string) {}

    public get accounts(): AccountsApiWrapper {
        if (!this._accountsApi) {
            this._accountsApi = new AccountsApiWrapper(this.apiKey, this.basePath);
        }
        return this._accountsApi;
    }

    public get contracts(): ContractsApiWrapper {
        if (!this._contractsApi) {
            this._contractsApi = new ContractsApiWrapper(this.apiKey, this.basePath);
        }
        return this._contractsApi;
    }

    public get players(): PlayersApiWrapper {
        if (!this._playersApi) {
            this._playersApi = new PlayersApiWrapper(this.apiKey, this.basePath);
        }
        return this._playersApi;
    }

    public get policies(): PoliciesApiWrapper {
        if (!this._policiesApi) {
            this._policiesApi = new PoliciesApiWrapper(this.apiKey, this.basePath);
        }
        return this._policiesApi;
    }

    public get policyRules(): PolicyRulesApiWrapper {
        if (!this._policyRulesApi) {
            this._policyRulesApi = new PolicyRulesApiWrapper(this.apiKey, this.basePath);
        }
        return this._policyRulesApi;
    }

    public get projects(): ProjectsApiWrapper {
        if (!this._projectsApi) {
            this._projectsApi = new ProjectsApiWrapper(this.apiKey, this.basePath);
        }
        return this._projectsApi;
    }

    public get sessions(): SessionsApiWrapper {
        if (!this._sessionsApi) {
            this._sessionsApi = new SessionsApiWrapper(this.apiKey, this.basePath);
        }
        return this._sessionsApi;
    }

    public get transactionIntents(): TransactionIntentsApiWrapper {
        if (!this._transactionIntentsApi) {
            this._transactionIntentsApi = new TransactionIntentsApiWrapper(this.apiKey, this.basePath);
        }
        return this._transactionIntentsApi;
    }
}

export * from "./generated/model/models";
export * from "./model";
