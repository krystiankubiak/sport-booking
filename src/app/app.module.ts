import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { HomeComponent } from './home/home.component';
import { SportingFacilityComponent } from './sporting-facility/sporting-facility.component';
import { AppRoutingModule } from './app-routing.module';
import { ListOfSportingFacilitiesComponent } from './list-of-sporting-facilities/list-of-sporting-facilities.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    HomeComponent,
    SportingFacilityComponent,
    ListOfSportingFacilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
