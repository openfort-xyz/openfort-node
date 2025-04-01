/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * OpenAPI spec version: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccelbyteOAuthConfig } from '../models/AccelbyteOAuthConfig';
import { AppleNativeOAuthConfig } from '../models/AppleNativeOAuthConfig';
import { AppleOAuthConfig } from '../models/AppleOAuthConfig';
import { CustomAuthConfig } from '../models/CustomAuthConfig';
import { DiscordOAuthConfig } from '../models/DiscordOAuthConfig';
import { EmailAuthConfig } from '../models/EmailAuthConfig';
import { EpicGamesOAuthConfig } from '../models/EpicGamesOAuthConfig';
import { FacebookOAuthConfig } from '../models/FacebookOAuthConfig';
import { FirebaseOAuthConfig } from '../models/FirebaseOAuthConfig';
import { GoogleNativeOAuthConfig } from '../models/GoogleNativeOAuthConfig';
import { GoogleOAuthConfig } from '../models/GoogleOAuthConfig';
import { LineOAuthConfig } from '../models/LineOAuthConfig';
import { LootLockerOAuthConfig } from '../models/LootLockerOAuthConfig';
import { OIDCAuthConfig } from '../models/OIDCAuthConfig';
import { PlayFabOAuthConfig } from '../models/PlayFabOAuthConfig';
import { SupabaseAuthConfig } from '../models/SupabaseAuthConfig';
import { ThirdPartyOAuthProviderLOOTLOCKER } from '../models/ThirdPartyOAuthProviderLOOTLOCKER';
import { TwitterOAuthConfig } from '../models/TwitterOAuthConfig';
import { HttpFile } from '../http/http';

export class AuthConfig {
    /**
    * Enable OAuth provider.
    */
    'enabled': boolean;
    'provider': ThirdPartyOAuthProviderLOOTLOCKER;
    /**
    * The unique Supabase URL which is supplied when you create a new project in your project dashboard.
    */
    'url': string;
    /**
    * The unique Supabase Key which is supplied when you create a new project in your project dashboard.
    */
    'key': string;
    /**
    * PEM encoded public key to verify the JWT token
    */
    'publicVerificationKey'?: string;
    /**
    * Audience of the JWT token
    */
    'aud': string;
    /**
    * JWKS URL to fetch the public key
    */
    'jwksUrl'?: string;
    /**
    * Base URI of your accelbyte gaming service environment. E.g. https://mygame.dev.gamingservices.accelbyte.io/
    */
    'baseUrl': string;
    /**
    * Epic Games API client ID.
    */
    'clientId': string;
    /**
    * Epic Games API client secret.
    */
    'clientSecret': string;
    /**
    * Line Channel ID.
    */
    'channelId': string;
    /**
    * Line Channel secret.
    */
    'channelSecret': string;
    /**
    * Title ID of your Play Fab gaming service environment.
    */
    'titleId': string;
    /**
    * Project ID of your Firebase service environment.
    */
    'projectId': string;
    /**
    * Headers to send with the request
    */
    'headers'?: string;
    /**
    * URL to send the request to to verify the payload
    */
    'authenticationUrl': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "ThirdPartyOAuthProviderLOOTLOCKER",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "publicVerificationKey",
            "baseName": "publicVerificationKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "aud",
            "baseName": "aud",
            "type": "string",
            "format": ""
        },
        {
            "name": "jwksUrl",
            "baseName": "jwksUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "baseUrl",
            "baseName": "baseUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelId",
            "baseName": "channelId",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelSecret",
            "baseName": "channelSecret",
            "type": "string",
            "format": ""
        },
        {
            "name": "titleId",
            "baseName": "titleId",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "string",
            "format": ""
        },
        {
            "name": "authenticationUrl",
            "baseName": "authenticationUrl",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthConfig.attributeTypeMap;
    }

    public constructor() {
    }
}



