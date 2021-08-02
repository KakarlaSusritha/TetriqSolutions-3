import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home-management-module/components/home/home.component';

 //dasboard
import { ContactusComponent } from '../home-management-module/components/contactus/contactus.component';
import { CareerComponent } from '../home-management-module/components/career/career.component';
import { LatestNewsComponent } from '../home-management-module/components/latest-news/latest-news.component';
import { OurServicesComponent } from '../home-management-module/components/our-services/our-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent},
  { path: 'contactus', component: ContactusComponent},
  {path: '', component:  HomeComponent},
  {path: 'career', component: CareerComponent},
  {path: 'aboutus', component: LatestNewsComponent},
  {path: 'services', component: OurServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
