import {
  type Configuration,
  createConfiguration,
  ServerConfiguration,
} from '../generated'
import type { ConfigurationParameters } from '../generated/configuration'
import { Middleware } from '../utilities/middleware'
import type { Observable } from '../utilities/observable'
import type { Observer } from '../utilities/observer'

export class BaseApiWrapper<T> implements Observable {
  static type = 'base'

  private readonly _observers: Observer[] = []
  protected readonly api: T

  constructor(
    type: new (_configuration: Configuration) => T,
    accessToken: string,
    basePath?: string,
  ) {
    const config: ConfigurationParameters = {
      authMethods: {
        sk: {
          tokenProvider: {
            getToken: () => accessToken,
          },
        },
      },
      promiseMiddleware: [new Middleware()],
    }

    if (basePath) {
      config.baseServer = new ServerConfiguration<{}>(basePath, {})
    }

    this.api = new type(createConfiguration(config))
  }

  public subscribe(observer: Observer): void {
    this._observers.push(observer)
  }

  public get observers(): Observer[] {
    return this._observers
  }
}
