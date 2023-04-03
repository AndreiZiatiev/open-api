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
import { Attachment } from './attachment';
import { Binding } from './binding';
import { BindingType } from './bindingType';
import { EntityState } from './entityState';
import { EntityType } from './entityType';
import { History } from './history';
import { Identity } from './identity';

/**
 * Updatable entity. Entity can be accessed by API and referenced.
 */
export interface Entity { 
    /**
     * Reference to id of folder for current entity. It include full URI of parent entity in name always  starting from party.
     */
    parent?: Identity;
    /**
     * Type of the entity.
     */
    type?: EntityType;
    /**
     * State of the entity
     */
    state?: EntityState;
    /**
     * List of additional names for the entity.
     */
    alias?: Array<string>;
    /**
     * Encrypted token for access to entity data.
     */
    token?: string;
    /**
     * The folder that is the container of the entity
     */
    containingFolder?: string;
    /**
     * The organization that is the custodian of the entity
     */
    managingOrganization?: string;
    /**
     * Source system originated the entity. If not specified entity instantiated by core system.
     */
    source?: BindingType;
    /**
     * Reference to entity system bind to.
     */
    bindings?: Array<Binding>;
    /**
     * List of tags for entity association.
     */
    tags?: Array<Identity>;
    /**
     * History of the entity instance.
     */
    history?: History;
    /**
     * Attachments for the entity. It is a Structure to attach data to any Resource in various formats, like URL, base64, etc.
     */
    attachments?: Array<Attachment>;
    /**
     * Party GUID to manage the tenancy of the Entity
     */
    partyId?: string;
}