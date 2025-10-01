import fetch from 'node-fetch'
import { from, type Observable } from '../rxjsStub'
import { type HttpLibrary, type RequestContext, ResponseContext } from './http'

export class IsomorphicFetchHttpLibrary implements HttpLibrary {
  public send(request: RequestContext): Observable<ResponseContext> {
    const method = request.getHttpMethod().toString()
    const body = request.getBody()

    const resultPromise = fetch(request.getUrl(), {
      method: method,
      body: body as any,
      headers: request.getHeaders(),
      agent: request.getAgent(),
    }).then((resp: any) => {
      const headers: { [name: string]: string } = {}
      resp.headers.forEach((value: string, name: string) => {
        headers[name] = value
      })

      const body = {
        text: () => resp.text(),
        binary: () => resp.buffer(),
      }
      return new ResponseContext(resp.status, headers, body)
    })

    return from<Promise<ResponseContext>>(resultPromise)
  }
}
