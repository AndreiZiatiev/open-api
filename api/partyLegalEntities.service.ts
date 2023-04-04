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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { LegalEntity } from '../model/legalEntity';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PartyLegalEntitiesService {

    protected basePath = 'http://localhost:8090';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * CreateLegalEntity
     * Create new legal entity. Validate legal entity not exist for this client
     * @param partyId Id of party operation executed for. When start with $ it is Id, else it is name of object. When id not specified it is means operation apply to every party.
     * @param body Document with legal entity specification.
     * @param bearer JWT Bearer token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public partyLegalEntitiesCreateLegalEntity(partyId: string, body?: LegalEntity, bearer?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public partyLegalEntitiesCreateLegalEntity(partyId: string, body?: LegalEntity, bearer?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public partyLegalEntitiesCreateLegalEntity(partyId: string, body?: LegalEntity, bearer?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public partyLegalEntitiesCreateLegalEntity(partyId: string, body?: LegalEntity, bearer?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (partyId === null || partyId === undefined) {
            throw new Error('Required parameter partyId was null or undefined when calling partyLegalEntitiesCreateLegalEntity.');
        }



        let headers = this.defaultHeaders;
        if (bearer !== undefined && bearer !== null) {
            headers = headers.set('bearer', String(bearer));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/parties/${encodeURIComponent(String(partyId))}/legalentities`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * GetLegalEntity
     * Get legal entity or list of legal entities from service.
     * @param partyId Id of party operation executed for. When start with $ it is Id, else it is name of object. When id not specified it is means operation apply to every party.
     * @param legalentityId Id of legal entity operation executed for. When start with $ it is Id, else it is name of object. When id not specified it is means operation apply to every client.
     * @param bearer JWT Bearer token
     * @param options Options specified additional requirements for returned entity. For example reconcile option will require to send events to data lake and mark as reconciliation. 
     * @param startTime Beginning of time window specified to limit objects with last updated in this time window.
     * @param endTime End of time window specified to limit objects with last updated in this time window.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public partyLegalEntitiesGetLegalEntity(partyId: string, legalentityId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, observe?: 'body', reportProgress?: boolean): Observable<LegalEntity>;
    public partyLegalEntitiesGetLegalEntity(partyId: string, legalentityId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LegalEntity>>;
    public partyLegalEntitiesGetLegalEntity(partyId: string, legalentityId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LegalEntity>>;
    public partyLegalEntitiesGetLegalEntity(partyId: string, legalentityId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (partyId === null || partyId === undefined) {
            throw new Error('Required parameter partyId was null or undefined when calling partyLegalEntitiesGetLegalEntity.');
        }

        if (legalentityId === null || legalentityId === undefined) {
            throw new Error('Required parameter legalentityId was null or undefined when calling partyLegalEntitiesGetLegalEntity.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (options !== undefined && options !== null) {
            queryParameters = queryParameters.set('options', <any>options);
        }
        if (startTime !== undefined && startTime !== null) {
            queryParameters = queryParameters.set('startTime', <any>startTime);
        }
        if (endTime !== undefined && endTime !== null) {
            queryParameters = queryParameters.set('endTime', <any>endTime);
        }

        let headers = this.defaultHeaders;
        if (bearer !== undefined && bearer !== null) {
            headers = headers.set('bearer', String(bearer));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<LegalEntity>('get',`${this.basePath}/parties/${encodeURIComponent(String(partyId))}/legalentities/${encodeURIComponent(String(legalentityId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * GetLegalEntityList
     * Get legal entity or list of legal entities from service.
     * @param partyId Id of party operation executed for. When start with $ it is Id, else it is name of object. When id not specified it is means operation apply to every party.
     * @param bearer JWT Bearer token
     * @param options Options specified additional requirements for returned entity. For example reconcile option will require to send events to data lake and mark as reconciliation. 
     * @param startTime Beginning of time window specified to limit objects with last updated in this time window.
     * @param endTime End of time window specified to limit objects with last updated in this time window.
     * @param search Expression to limit number of entities in response.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public partyLegalEntitiesGetLegalEntityList(partyId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, search?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<LegalEntity>>;
    public partyLegalEntitiesGetLegalEntityList(partyId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<LegalEntity>>>;
    public partyLegalEntitiesGetLegalEntityList(partyId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<LegalEntity>>>;
    public partyLegalEntitiesGetLegalEntityList(partyId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (partyId === null || partyId === undefined) {
            throw new Error('Required parameter partyId was null or undefined when calling partyLegalEntitiesGetLegalEntityList.');
        }






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (options !== undefined && options !== null) {
            queryParameters = queryParameters.set('options', <any>options);
        }
        if (startTime !== undefined && startTime !== null) {
            queryParameters = queryParameters.set('startTime', <any>startTime);
        }
        if (endTime !== undefined && endTime !== null) {
            queryParameters = queryParameters.set('endTime', <any>endTime);
        }
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }

        let headers = this.defaultHeaders;
        if (bearer !== undefined && bearer !== null) {
            headers = headers.set('bearer', String(bearer));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<LegalEntity>>('get',`${this.basePath}/parties/${encodeURIComponent(String(partyId))}/legalentities`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ModifyLegalEntity
     * Change legal entity properties to values specified in request. Property not specified will remain same. No element of any collection will be deleted. 
     * @param partyId Id of party operation executed for. When start with $ it is Id, else it is name of object. When id not specified it is means operation apply to every party.
     * @param legalentityId Id of legal entity operation executed for. When start with $ it is Id, else it is name of object. When id not specified it is means operation apply to every client.
     * @param body Document with legal entity specification.
     * @param bearer JWT Bearer token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public partyLegalEntitiesModifyLegalEntity(partyId: string, legalentityId: string, body?: LegalEntity, bearer?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public partyLegalEntitiesModifyLegalEntity(partyId: string, legalentityId: string, body?: LegalEntity, bearer?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public partyLegalEntitiesModifyLegalEntity(partyId: string, legalentityId: string, body?: LegalEntity, bearer?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public partyLegalEntitiesModifyLegalEntity(partyId: string, legalentityId: string, body?: LegalEntity, bearer?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (partyId === null || partyId === undefined) {
            throw new Error('Required parameter partyId was null or undefined when calling partyLegalEntitiesModifyLegalEntity.');
        }

        if (legalentityId === null || legalentityId === undefined) {
            throw new Error('Required parameter legalentityId was null or undefined when calling partyLegalEntitiesModifyLegalEntity.');
        }



        let headers = this.defaultHeaders;
        if (bearer !== undefined && bearer !== null) {
            headers = headers.set('bearer', String(bearer));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('patch',`${this.basePath}/parties/${encodeURIComponent(String(partyId))}/legalentities/${encodeURIComponent(String(legalentityId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * UpdateLegalEntity
     * Change legal entity specification. Legal entity will be created if not exist. 
     * @param partyId Id of party operation executed for. When start with $ it is Id, else it is name of object. When id not specified it is means operation apply to every party.
     * @param legalentityId Id of legal entity operation executed for. When start with $ it is Id, else it is name of object. When id not specified it is means operation apply to every client.
     * @param body Document with legal entity specification.
     * @param bearer JWT Bearer token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public partyLegalEntitiesUpdateLegalEntity(partyId: string, legalentityId: string, body?: LegalEntity, bearer?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public partyLegalEntitiesUpdateLegalEntity(partyId: string, legalentityId: string, body?: LegalEntity, bearer?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public partyLegalEntitiesUpdateLegalEntity(partyId: string, legalentityId: string, body?: LegalEntity, bearer?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public partyLegalEntitiesUpdateLegalEntity(partyId: string, legalentityId: string, body?: LegalEntity, bearer?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (partyId === null || partyId === undefined) {
            throw new Error('Required parameter partyId was null or undefined when calling partyLegalEntitiesUpdateLegalEntity.');
        }

        if (legalentityId === null || legalentityId === undefined) {
            throw new Error('Required parameter legalentityId was null or undefined when calling partyLegalEntitiesUpdateLegalEntity.');
        }



        let headers = this.defaultHeaders;
        if (bearer !== undefined && bearer !== null) {
            headers = headers.set('bearer', String(bearer));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/parties/${encodeURIComponent(String(partyId))}/legalentities/${encodeURIComponent(String(legalentityId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}