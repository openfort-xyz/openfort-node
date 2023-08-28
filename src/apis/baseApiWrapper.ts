import { Observable } from "../utilities/observable";
import { Observer } from "../utilities/observer";
import { Configuration, ServerConfiguration, createConfiguration } from "../generated";
import { ConfigurationParameters } from "../generated/configuration";
import { Middleware } from "../utilities/middleware";

export class BaseApiWrapper<T> implements Observable {
    private readonly _observers: Observer[] = [];
    protected readonly api: T;

    constructor(type: new (_configuration: Configuration) => T, accessToken: string, basePath?: string) {
        const config: ConfigurationParameters = {
            authMethods: {
                sk: {
                    tokenProvider: {
                        getToken: () => accessToken,
                    }
                }
            },
            promiseMiddleware: [new Middleware()],
        };

        if (basePath) {
            config.baseServer = new ServerConfiguration<{}>(basePath, {});
        }

        this.api = new type(createConfiguration(config));
    }

    public subscribe(observer: Observer): void {
        this._observers.push(observer);
    }

    public get observers(): Observer[] {
        return this._observers;
    }
}
