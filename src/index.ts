import fetch from 'node-fetch'
import { AccountsApiWrapper } from './apis/accountsApiWrapper'
import { ContractsApiWrapper } from './apis/contractsApiWrapper'
import { EventsApiWrapper } from './apis/eventsApiWrapper'
import { ExchangeApiWrapper } from './apis/exchangeApiWrapper'
import { IamApiWrapper } from './apis/iamApiWrapper'
import { InventoriesApiWrapper } from './apis/inventoriesApiWrapper'
import { PaymasterApiWrapper } from './apis/paymasterApiWrapper'
import { PlayersApiWrapper } from './apis/playersApiWrapper'
import { PoliciesApiWrapper } from './apis/policiesApiWrapper'
import { PolicyRulesApiWrapper } from './apis/policyRulesApiWrapper'
import { SessionsApiWrapper } from './apis/sessionsApiWrapper'
import { SettingsApiWrapper } from './apis/settingsApiWrapper'
import { SubscriptionsApiWrapper } from './apis/subscriptionsApiWrapper'
import { TransactionIntentsApiWrapper } from './apis/transactionIntentsApiWrapper'
import type { WebHookEvent } from './models'
import type { Observable } from './utilities/observable'
import type { Observer } from './utilities/observer'
import { sign } from './utilities/signer'

export default class Openfort {
  private readonly apiWrappers: { [name: string]: Observable } = {}
  private readonly observers: Observer[] = []

  constructor(
    private readonly apiKey: string,
    private readonly basePath?: string,
  ) { }

  public get accounts(): AccountsApiWrapper {
    return this.getOrCreateWrapper(AccountsApiWrapper)
  }

  public get contracts(): ContractsApiWrapper {
    return this.getOrCreateWrapper(ContractsApiWrapper)
  }

  public get paymasters(): PaymasterApiWrapper {
    return this.getOrCreateWrapper(PaymasterApiWrapper)
  }

  public get players(): PlayersApiWrapper {
    return this.getOrCreateWrapper(PlayersApiWrapper)
  }

  public get policies(): PoliciesApiWrapper {
    return this.getOrCreateWrapper(PoliciesApiWrapper)
  }

  public get policyRules(): PolicyRulesApiWrapper {
    return this.getOrCreateWrapper(PolicyRulesApiWrapper)
  }

  public get sessions(): SessionsApiWrapper {
    return this.getOrCreateWrapper(SessionsApiWrapper)
  }

  public get transactionIntents(): TransactionIntentsApiWrapper {
    return this.getOrCreateWrapper(TransactionIntentsApiWrapper)
  }

  public get inventories(): InventoriesApiWrapper {
    return this.getOrCreateWrapper(InventoriesApiWrapper)
  }

  public get settings(): SettingsApiWrapper {
    return this.getOrCreateWrapper(SettingsApiWrapper)
  }

  public get iam(): IamApiWrapper {
    return this.getOrCreateWrapper(IamApiWrapper)
  }

  public get subscriptions(): SubscriptionsApiWrapper {
    return this.getOrCreateWrapper(SubscriptionsApiWrapper)
  }

  public get triggers(): EventsApiWrapper {
    return this.getOrCreateWrapper(EventsApiWrapper)
  }

  public get exchange(): ExchangeApiWrapper {
    return this.getOrCreateWrapper(ExchangeApiWrapper)
  }

  public subscribe(observer: Observer): void {
    this.observers.push(observer)
    for (const apiWrapper of Object.values(this.apiWrappers)) {
      apiWrapper.observers?.push(observer)
    }
  }

  private getWrapperKey(wrapper: any): string {
    if ('type' in wrapper && typeof wrapper.type === 'string') {
      return wrapper.type
    }

    if ('name' in wrapper && typeof wrapper.name === 'string') {
      return wrapper.name
    }

    throw new Error('getWrapperKey failed')
  }

  private getOrCreateWrapper<T extends Observable>(
    type: new (_accessToken: string, _basePath?: string) => T,
  ): T {
    const key = this.getWrapperKey(type)
    const wrapper = this.apiWrappers[key]
    if (wrapper) {
      return wrapper as T
    }

    const result = new type(this.apiKey, this.basePath)
    for (const observer of this.observers) {
      result.subscribe?.(observer)
    }
    this.apiWrappers[key] = result
    return result
  }

  public async constructWebhookEvent(
    body: string,
    signature: string,
  ): Promise<WebHookEvent> {
    const signedPayload = await sign(this.apiKey, body)
    if (signedPayload !== signature) {
      throw Error('Invalid signature')
    }
    return JSON.parse(body) as WebHookEvent
  }

  public async signNonce(nonce: string): Promise<string> {
    return await sign(this.apiKey, nonce)
  }

  public async registerRecoverySession(
    apiKey: string,
    secretKey: string,
    encryptionPart: string,
    shieldAPIBaseURL = 'https://shield.openfort.io',
  ): Promise<string> {
    const response = await fetch(
      `${shieldAPIBaseURL}/project/encryption-session`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'x-api-secret': secretKey,
        },
        method: 'POST',
        body: JSON.stringify({
          encryption_part: encryptionPart,
        }),
      },
    )

    if (!response.ok) {
      throw new Error('Failed to authorize user')
    }

    const jsonResponse = await response.json()
    return jsonResponse.session_id
  }
}

export * from './models'
