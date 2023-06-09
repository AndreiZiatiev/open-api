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
 * Enumerator of entity types. Here listed all resources available in organization.
 */
export type EntityType = 'USER' | 'CONTACT' | 'PERSON' | 'PARTY' | 'ACCOUNT' | 'LEGALENTITY' | 'FOLDER' | 'PATIENT' | 'PRACTITIONER';

export const EntityType = {
    USER: 'USER' as EntityType,
    CONTACT: 'CONTACT' as EntityType,
    PERSON: 'PERSON' as EntityType,
    PARTY: 'PARTY' as EntityType,
    ACCOUNT: 'ACCOUNT' as EntityType,
    LEGALENTITY: 'LEGALENTITY' as EntityType,
    FOLDER: 'FOLDER' as EntityType,
    PATIENT: 'PATIENT' as EntityType,
    PRACTITIONER: 'PRACTITIONER' as EntityType
};