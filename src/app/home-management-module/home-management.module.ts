import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs';
import { HomeManagementRoutingModule } from './home-management-routing.module';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';

// components
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { ContactNowComponent } from './components/contact-now/contact-now.component';
import { NgMarqueeModule } from 'ng-marquee';
import { NgScrolltopModule } from 'ng-scrolltop';
import { AgmCoreModule } from '@agm/core';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CareerComponent } from './components/career/career.component';

@NgModule({
  declarations: [
     HeaderComponent,
     FooterComponent,
     CarouselComponent,
     HomeComponent,
     OurServicesComponent,
     LatestNewsComponent,
     ContactNowComponent,
     ContactusComponent,
     CareerComponent,
     ],
  imports: [
    CommonModule,
    HomeManagementRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgxHmCarouselModule,
    NgMarqueeModule,
    NgScrolltopModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlJfE8N_UNOctgE71Bd7DL2K-vdS1U1Eg'
    })
  ]
})
export class HomeManagementModule { }
