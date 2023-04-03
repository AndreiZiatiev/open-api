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
import { EntityState } from './entityState';

/**
 * Completion status for stage of execution like: finilization, aproval and so on.
 */
export interface Completion { 
    /**
     * Completion Status for some state of execution.
     */
    status: EntityState;
    /**
     * Date of status acived and satge of activity completed.
     */
    completedAt?: Date;
    /**
     * Person documented completion of this stage by user name.
     */
    completedBy?: string;
    /**
     * Note provided by operator on completion.
     */
    completedNote?: string;
    /**
     * This is link to message, which change status of the issue to specified by this completion.
     */
    completedMessage?: string;
}