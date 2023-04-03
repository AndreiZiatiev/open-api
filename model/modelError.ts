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
import { Severity } from './severity';

/**
 * Entity encapsulating the details of an error. This allows the recipient to know details about the error and what may have caused the error. 
 */
export interface ModelError { 
    /**
     * Error code. 
     */
    code?: string;
    /**
     * Severity specified how severe error in current execution path. 
     */
    severity?: Severity;
    /**
     * Error text. When error return text will be formate, based on text string, properties and language.
     */
    text?: string;
    /**
     * Error description contains detailed information about error. 
     */
    description?: string;
    /**
     * URI to object or entity error associated with.
     */
    entity?: string;
    /**
     * Name of the field error associated with.
     */
    field?: string;
}