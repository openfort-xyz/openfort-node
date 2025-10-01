import type { RequestContext, ResponseContext } from '../generated'
import type { PromiseMiddleware } from '../generated/middleware'
import { PACKAGE, VERSION } from '../version'

export class Middleware implements PromiseMiddleware {
  public async pre(context: RequestContext): Promise<RequestContext> {
    context.setHeaderParam('User-Agent', `${PACKAGE}@${VERSION}`)
    return context
  }

  public async post(context: ResponseContext): Promise<ResponseContext> {
    return context
  }
}
