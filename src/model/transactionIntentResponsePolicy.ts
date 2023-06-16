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

import { RequestFile } from "./models";
import { PolicyResponse } from "./policyResponse";
import { PolicyResponsePolicyRules } from "./policyResponsePolicyRules";
import { PolicyResponseTransactionIntents } from "./policyResponseTransactionIntents";

export class TransactionIntentResponsePolicy {
  "id": string;
  "object": string;
  "createdAt": Date;
  "name": string | null;
  "chainId": number;
  "strategy": any | null;
  "transactionIntents"?: PolicyResponseTransactionIntents;
  "policyRules"?: PolicyResponsePolicyRules;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "object",
      baseName: "object",
      type: "string",
    },
    {
      name: "createdAt",
      baseName: "created_at",
      type: "Date",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "chainId",
      baseName: "chain_id",
      type: "number",
    },
    {
      name: "strategy",
      baseName: "strategy",
      type: "any",
    },
    {
      name: "transactionIntents",
      baseName: "transaction_intents",
      type: "PolicyResponseTransactionIntents",
    },
    {
      name: "policyRules",
      baseName: "policy_rules",
      type: "PolicyResponsePolicyRules",
    },
  ];

  static getAttributeTypeMap() {
    return TransactionIntentResponsePolicy.attributeTypeMap;
  }
}