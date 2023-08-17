import { RequestContext, SecurityAuthentication } from "../generated";

export class DefaultSecurityAuthentication implements SecurityAuthentication {
    constructor(private readonly key: string) {}

    public getName() {
        return "sk";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", `Bearer ${this.key}`);
    }
}
