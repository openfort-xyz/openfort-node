import { RequestContext, ResponseContext } from "../generated";
import {PromiseMiddleware, PromiseMiddlewareWrapper, Middleware as BaseMiddleware} from "../generated/middleware";
import { Observable } from "../generated/rxjsStub";
import {PACKAGE, VERSION} from "../version";

export class Middleware implements PromiseMiddleware {
    public async pre(context: RequestContext): Promise<RequestContext> {
        context.setHeaderParam("User-Agent", `${PACKAGE}@${VERSION}`);
        return context;
    }

    public async post(context: ResponseContext): Promise<ResponseContext> {
        return context;
    }
}

class PromiseHeadersMiddleware implements PromiseMiddleware {
    constructor(private headers: { [name: string]: string }) {
    }

    public async pre(context: RequestContext): Promise<RequestContext> {
        for (const key in this.headers) {
            context.setHeaderParam(key, this.headers[key]);
        }
        return context;
    }

    public async post(context: ResponseContext): Promise<ResponseContext> {
        return context;
    }
}

export class HeadersMiddleware implements BaseMiddleware {
    private readonly middleware: PromiseMiddlewareWrapper;

    constructor(headers: { [name: string]: string }) {
        this.middleware = new PromiseMiddlewareWrapper(new PromiseHeadersMiddleware(headers));
    }

    pre(context: RequestContext): Observable<RequestContext> {
        return this.middleware.pre(context);
    }
    post(context: ResponseContext): Observable<ResponseContext> {
        return this.middleware.post(context);
    }
}
