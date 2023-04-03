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

import { Location } from '../model/location';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class LocationsService {

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
     * CreateLocation
     * Create new Location. Validate Location not yet exist.
     * @param body Location data specification for update.
     * @param bearer JWT Bearer token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public locationsCreateLocation(body?: Location, bearer?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public locationsCreateLocation(body?: Location, bearer?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public locationsCreateLocation(body?: Location, bearer?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public locationsCreateLocation(body?: Location, bearer?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.request<any>('post',`${this.basePath}/locations`,
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
     * GetLocation
     * Get location or list of locations from service.
     * @param locationId Location Id to fetch and put records
     * @param bearer JWT Bearer token
     * @param options Options specified additional requirements for returned entity. For example reconcile option will require to send events to data lake and mark as reconciliation. 
     * @param startTime Beginning of time window specified to limit objects with last updated in this time window.
     * @param endTime End of time window specified to limit objects with last updated in this time window.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public locationsGetLocation(locationId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, observe?: 'body', reportProgress?: boolean): Observable<Location>;
    public locationsGetLocation(locationId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Location>>;
    public locationsGetLocation(locationId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Location>>;
    public locationsGetLocation(locationId: string, bearer?: string, options?: string, startTime?: any, endTime?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling locationsGetLocation.');
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

        return this.httpClient.request<Location>('get',`${this.basePath}/locations/${encodeURIComponent(String(locationId))}`,
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
     * GetLocationList
     * Get location or list of locations from service.
     * @param bearer JWT Bearer token
     * @param options Options specified additional requirements for returned entity. For example reconcile option will require to send events to data lake and mark as reconciliation. 
     * @param startTime Beginning of time window specified to limit objects with last updated in this time window.
     * @param endTime End of time window specified to limit objects with last updated in this time window.
     * @param search Expression to limit number of entities in response.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public locationsGetLocationList(bearer?: string, options?: string, startTime?: any, endTime?: any, search?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Location>>;
    public locationsGetLocationList(bearer?: string, options?: string, startTime?: any, endTime?: any, search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Location>>>;
    public locationsGetLocationList(bearer?: string, options?: string, startTime?: any, endTime?: any, search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Location>>>;
    public locationsGetLocationList(bearer?: string, options?: string, startTime?: any, endTime?: any, search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






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

        return this.httpClient.request<Array<Location>>('get',`${this.basePath}/locations`,
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
     * ModifyLocation
     * Change Location properties to values specified in request. Property not specified will remain same. No element of any collection will be deleted. 
     * @param locationId Location Id to fetch and put records
     * @param body Location data specification for update.
     * @param bearer JWT Bearer token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public locationsModifyLocation(locationId: string, body?: Location, bearer?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public locationsModifyLocation(locationId: string, body?: Location, bearer?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public locationsModifyLocation(locationId: string, body?: Location, bearer?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public locationsModifyLocation(locationId: string, body?: Location, bearer?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling locationsModifyLocation.');
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

        return this.httpClient.request<any>('patch',`${this.basePath}/locations/${encodeURIComponent(String(locationId))}`,
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
     * UpdateLocation
     * Change location specification. Location will be created if not exist.
     * @param locationId Location Id to fetch and put records
     * @param body Location data specification for update.
     * @param bearer JWT Bearer token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public locationsUpdateLocation(locationId: string, body?: Location, bearer?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public locationsUpdateLocation(locationId: string, body?: Location, bearer?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public locationsUpdateLocation(locationId: string, body?: Location, bearer?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public locationsUpdateLocation(locationId: string, body?: Location, bearer?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling locationsUpdateLocation.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/locations/${encodeURIComponent(String(locationId))}`,
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
