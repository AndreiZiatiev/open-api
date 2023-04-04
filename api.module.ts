import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ContactsService } from './api/contacts.service';
import { LocationsService } from './api/locations.service';
import { PartiesService } from './api/parties.service';
import { PartyAccountsService } from './api/partyAccounts.service';
import { PartyContactsService } from './api/partyContacts.service';
import { PartyLegalEntitiesService } from './api/partyLegalEntities.service';
import { PartyLocationsService } from './api/partyLocations.service';
import { PartyPersonsService } from './api/partyPersons.service';
import { PersonsService } from './api/persons.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ContactsService,
    LocationsService,
    PartiesService,
    PartyAccountsService,
    PartyContactsService,
    PartyLegalEntitiesService,
    PartyLocationsService,
    PartyPersonsService,
    PersonsService,
    UsersService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
