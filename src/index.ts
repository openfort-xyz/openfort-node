import {AccountsApiWrapper} from "./wrapper/accountsApiWrapper";
import {ContractsApiWrapper} from "./wrapper/contractsApiWrapper";
import {Observable} from "./utility/observable";
import {Observer} from "./utility/observer";
import {PlayersApiWrapper} from "./wrapper/playersApiWrapper";
import {PoliciesApiWrapper} from "./wrapper/policiesApiWrapper";
import {PolicyRulesApiWrapper} from "./wrapper/policyRulesApiWrapper";
import {ProjectsApiWrapper} from "./wrapper/projectsApiWrapper";
import {SessionsApiWrapper} from "./wrapper/sessionsApiWrapper";
import {TransactionIntentsApiWrapper} from "./wrapper/transactionIntentsApiWrapper";

export default class Openfort {
    private readonly apiWrappers = {};
    private readonly observers: Observer[] = [];

    constructor(private readonly apiKey: string, private readonly basePath?: string) {}

    private getOrCreateWrapper<T>(type: new (accessToken: string, basePath?: string) => T): T {
        const wrapper = this.apiWrappers[type.name];
        if (wrapper) {
            return wrapper;
        }

        const result = new type(this.apiKey, this.basePath);
        for (const observer of this.observers) {
            (result as Observable).subscribe?.(observer);
        }
        this.apiWrappers[type.name] = result;
        return result;
    }

    public get accounts(): AccountsApiWrapper {
        return this.getOrCreateWrapper(AccountsApiWrapper);
    }

    public get contracts(): ContractsApiWrapper {
        return this.getOrCreateWrapper(ContractsApiWrapper);
    }

    public get players(): PlayersApiWrapper {
        return this.getOrCreateWrapper(PlayersApiWrapper);
    }

    public get policies(): PoliciesApiWrapper {
        return this.getOrCreateWrapper(PoliciesApiWrapper);
    }

    public get policyRules(): PolicyRulesApiWrapper {
        return this.getOrCreateWrapper(PolicyRulesApiWrapper);
    }

    public get projects(): ProjectsApiWrapper {
        return this.getOrCreateWrapper(ProjectsApiWrapper);
    }

    public get sessions(): SessionsApiWrapper {
        return this.getOrCreateWrapper(SessionsApiWrapper);
    }

    public get transactionIntents(): TransactionIntentsApiWrapper {
        return this.getOrCreateWrapper(TransactionIntentsApiWrapper);
    }

    public subscribe(observer: Observer): void {
        this.observers.push(observer);
        for (const apiWrapper of Object.values(this.apiWrappers)) {
            (apiWrapper as Observable).observers?.push(observer);
        }
    }
}

export * from "./model";
