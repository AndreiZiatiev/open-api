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

import { Person } from '../model/person';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PersonsService {

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
     * GetPerson
     * Get person or list of persons from service.
     * @param personId Person Id to fetch and put records
     * @param options Options specified additional requirements for returned entity. For example reconcile option will require to send events to data lake and mark as reconciliation. 
     * @param startTime Beginning of time window specified to limit objects with last updated in this time window.
     * @param endTime End of time window specified to limit objects with last updated in this time window.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsGetPerson(personId: string, options?: string, startTime?: any, endTime?: any, observe?: 'body', reportProgress?: boolean): Observable<Person>;
    public personsGetPerson(personId: string, options?: string, startTime?: any, endTime?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Person>>;
    public personsGetPerson(personId: string, options?: string, startTime?: any, endTime?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Person>>;
    public personsGetPerson(personId: string, options?: string, startTime?: any, endTime?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (personId === null || personId === undefined) {
            throw new Error('Required parameter personId was null or undefined when calling personsGetPerson.');
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

        return this.httpClient.request<Person>('get',`${this.basePath}/persons/${encodeURIComponent(String(personId))}`,
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
     * GetPersonList
     * Get person or list of persons from service.
     * @param options Options specified additional requirements for returned entity. For example reconcile option will require to send events to data lake and mark as reconciliation. 
     * @param startTime Beginning of time window specified to limit objects with last updated in this time window.
     * @param endTime End of time window specified to limit objects with last updated in this time window.
     * @param search Expression to limit number of entities in response.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public personsGetPersonList(options?: string, startTime?: any, endTime?: any, search?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Person>>;
    public personsGetPersonList(options?: string, startTime?: any, endTime?: any, search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Person>>>;
    public personsGetPersonList(options?: string, startTime?: any, endTime?: any, search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Person>>>;
    public personsGetPersonList(options?: string, startTime?: any, endTime?: any, search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





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

        return this.httpClient.request<Array<Person>>('get',`${this.basePath}/persons`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
