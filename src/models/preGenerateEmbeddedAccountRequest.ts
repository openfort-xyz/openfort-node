export interface PreGenerateEmbeddedAccountsConfiguration {
    shieldAuthProvider: ShieldAuthProvider;
    apiKey: string;
    apiSecret: string;
    encryptionPart?: string;
}

export enum ShieldAuthProvider {
    OPENFORT = "openfort",
    CUSTOM = "custom",
}
