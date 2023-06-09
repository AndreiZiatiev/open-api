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
 * Address type enumerator. Include all codes defined in http://hl7.org/fhir/address-type. 
 */
export type AddressType = 'postal' | 'physical' | 'both';

export const AddressType = {
    Postal: 'postal' as AddressType,
    Physical: 'physical' as AddressType,
    Both: 'both' as AddressType
};