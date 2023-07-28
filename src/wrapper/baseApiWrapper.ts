import { PACKAGE, VERSION } from "../version";
import { Observable } from "../utility/observable";
import { Observer } from "../utility/observer";

export class BaseApiWrapper<T extends BaseApi> implements Observable {
    private readonly _observers: Observer[] = [];
    protected readonly api: T;

    constructor(type: new (_basePath?: string) => T, accessToken: string, basePath?: string) {
        this.api = new type(basePath);
        this.api.accessToken = accessToken;
        this.api.defaultHeaders["User-Agent"] = `${PACKAGE}@${VERSION}`;
    }

    public subscribe(observer: Observer): void {
        this._observers.push(observer);
    }

    public get observers(): Observer[] {
        return this._observers;
    }
}

interface BaseApi {
    set accessToken(accessToken: string | (() => string));
    get defaultHeaders();
}
