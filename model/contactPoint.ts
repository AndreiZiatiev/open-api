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
import { ContactPointSystem } from './contactPointSystem';
import { ContactPointUse } from './contactPointUse';
import { Element } from './element';

/**
 * Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc.   http://build.fhir.org//datatypes.html#ContactPoint
 */
export interface ContactPoint { 
    /**
     * Guid of the structure
     */
    id?: string;
    /**
     * This is header of contact point element with id and period element is active. 
     */
    header?: Element;
    /**
     * System for contact point
     */
    system?: ContactPointSystem;
    /**
     * The actual contact point details
     */
    value?: string;
    /**
     * What contact point use for.
     */
    use?: ContactPointUse;
}