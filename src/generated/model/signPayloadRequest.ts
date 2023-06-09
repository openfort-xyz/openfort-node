/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DomainData } from './domainData';
import { TypedDataField } from './typedDataField';

export class SignPayloadRequest {
    'domain': DomainData;
    'types': { [key: string]: Array<TypedDataField>; };
    'primaryType'?: string;
    'value': { [key: string]: any; };
    /**
    * Hash to verify and that will be signed
    */
    'hash': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "domain",
            "baseName": "domain",
            "type": "DomainData"
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "{ [key: string]: Array<TypedDataField>; }"
        },
        {
            "name": "primaryType",
            "baseName": "primaryType",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SignPayloadRequest.attributeTypeMap;
    }
}

