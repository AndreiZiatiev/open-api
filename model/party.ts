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
import { Entity } from './entity';
import { Identity } from './identity';
import { PartyType } from './partyType';
import { Region } from './region';

/**
 * Party represents all participants of the Medical Network. Party have multiple types and base on type provide or consume different services across Network.
 */
export interface Party { 
    /**
     * Party Identity, we will use Guid for globaly unique party id. Name specify name by which party want to be represented in the network and need to be globally unique too.
     */
    identity: Identity;
    /**
     * Party is a  resource used by API.  Entity maintain most common resource information. Parent for entity of Party must be empty, as party is a root of object hierarchy.
     */
    entity?: Entity;
    /**
     * Type of the Party. Client can be Person, Clinic or Provider.
     */
    type?: PartyType;
    /**
     * Main operational region (AWS) for client to make it align with systems in this region for compliance or performance. 
     */
    region?: Region;
    /**
     * Party code used to identify party in human friendly documents..
     */
    partyCode?: string;
}