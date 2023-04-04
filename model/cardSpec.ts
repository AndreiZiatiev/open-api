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

/**
 * Specification for bank account transfer.
 */
export interface CardSpec { 
    /**
     * Card number of customer. 
     */
    cardNumber?: string;
    /**
     * Routing number to institution.
     */
    cardToken?: string;
    /**
     * URL of payment for card spec
     */
    paymentURL?: string;
    /**
     * Id of transaction that generated token
     */
    transactionId?: string;
    /**
     * field to determine if transaction of card spec is approved
     */
    approved?: boolean;
    /**
     * Id of payment which created the instrument
     */
    paymentId?: string;
}