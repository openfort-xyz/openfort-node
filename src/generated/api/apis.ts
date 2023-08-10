export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './contractsApi';
import { ContractsApi } from './contractsApi';
export * from './inventoryApi';
import { InventoryApi } from './inventoryApi';
export * from './playersApi';
import { PlayersApi } from './playersApi';
export * from './playersAuthenticationApi';
import { PlayersAuthenticationApi } from './playersAuthenticationApi';
export * from './policiesApi';
import { PoliciesApi } from './policiesApi';
export * from './policyRulesApi';
import { PolicyRulesApi } from './policyRulesApi';
export * from './sessionsApi';
import { SessionsApi } from './sessionsApi';
export * from './transactionIntentsApi';
import { TransactionIntentsApi } from './transactionIntentsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountsApi, ContractsApi, InventoryApi, PlayersApi, PlayersAuthenticationApi, PoliciesApi, PolicyRulesApi, SessionsApi, TransactionIntentsApi];
