/**
 * User API
 * User application provides support for most basic functionalities. Most important to keep private user information to allow identify the user and maintain contact information.
 *
 * OpenAPI spec version: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AccountType } from './accountType';
import { BillingInformation } from './billingInformation';
import { Country } from './country';
import { Entity } from './entity';
import { Identity } from './identity';
import { PaymentInstrument } from './paymentInstrument';
import { ShippingInformation } from './shippingInformation';

/**
 * Account entity for party. Party can have multiple accounts. Account must be associated with LegalEntity under which account will operate. Account maintain financial activities executed by party and support invoicing and billing for party.
 */
export interface Account { 
    /**
     * Identity for the account. Identity include globally unique Id, Name used for URI of account inside party.
     */
    identity: Identity;
    /**
     * Account is a resource entity and have API access. Parent for account reference to Client.
     */
    entity?: Entity;
    /**
     * Type of account. It is reference to account type enumerator.
     */
    type: AccountType;
    /**
     * Reference to legal entity used for account.
     */
    legalEntity: string;
    /**
     * Country of the account if different from legal entity
     */
    country?: Country;
    /**
     * Human friendly account number to use on invoices. 
     */
    accountNumber?: string;
    /**
     * List of payment instruments can be used by account payments. Order of instruments in list defines priority for instruments use.
     */
    paymentInstruments?: Array<PaymentInstrument>;
    /**
     * List of billing information which is pined to the account
     */
    billingInformation?: Array<BillingInformation>;
    /**
     * List of shipping information which is pined to the account
     */
    shippingInformation?: Array<ShippingInformation>;
}