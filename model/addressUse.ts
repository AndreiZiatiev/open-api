/**
 * User API
 * User application provides support for most basic functionalities. Most important to keep private user information to allow identify the user and maintain contact information.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Contact point use enumerator. All codes from system http://hl7.org/fhir/contact-point-use
 */
export type AddressUse = 'home' | 'work' | 'temp' | 'old' | 'billing';

export const AddressUse = {
    Home: 'home' as AddressUse,
    Work: 'work' as AddressUse,
    Temp: 'temp' as AddressUse,
    Old: 'old' as AddressUse,
    Billing: 'billing' as AddressUse
};