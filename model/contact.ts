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
import { Address } from './address';
import { ContactType } from './contactType';
import { Entity } from './entity';
import { Identity } from './identity';

/**
 * An individual has identity outside of a healthcare setting. The Person resource is used to capture this information and to relate the person as an individual to other resources that do have a health-related context.  For example, while a patient resource may be created and maintained by each organization providing care for that person as a patient, a person resource provides a mechanism for linking patient resources across different organizations and their unique patient identity domains. 
 */
export interface Contact { 
    /**
     * Contact identity. Id is global (guid), Name is contact definition and it is not unique.
     */
    identity: Identity;
    /**
     * Contact is an entity and can be created and updated through API.
     */
    entity?: Entity;
    /**
     * Type of contact.
     */
    type: ContactType;
    /**
     * One or more addresses for the contact.
     */
    address: Array<Address>;
    /**
     * Person for contact if contact associated with one.
     */
    person?: string;
}