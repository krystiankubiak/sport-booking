import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
/*import { SearchComponent } from './tv/search/search.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Page404Component } from './pages/page-404/page-404.component';
import { ShowDetailsComponent } from './tv/show-details/show-details.component';
import { ShowDetailsResolver } from './tv/show-details/show-details.resolver';
import { LoggedInGuard } from './auth/logged-in.guard';
*/
import { SportingFacilityComponent } from './sporting-facility/sporting-facility.component';
import { ListOfSportingFacilitiesComponent } from './list-of-sporting-facilities/list-of-sporting-facilities.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
{
    path: 'sportingFacilities',
    component: ListOfSportingFacilitiesComponent
  }
  /*,
  {
    path: 'tv/:id',
    component: ShowDetailsComponent,
    resolve: {
      show: ShowDetailsResolver
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [
      // LoggedInGuard
    ]
  },
  {
    path: '**',
    component: Page404Component
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
 // providers: [ShowDetailsResolver, LoggedInGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
