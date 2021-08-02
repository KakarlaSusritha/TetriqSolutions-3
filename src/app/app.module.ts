import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// routing module
import { AppRoutingModule } from './routing/app-routing.module';
// components
import { AppComponent } from './app-component/app.component';

// external modules
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { NgMarqueeModule } from 'ng-marquee';


// modules
import { MaterialModule } from './shared/material/material.module';
import { HomeManagementModule } from './home-management-module/home-management.module';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HomeManagementModule,
    NgxHmCarouselModule,
    FormsModule,
    NgMarqueeModule 
  ],

  bootstrap: [AppComponent],
  providers: [],
  entryComponents: []
})
export class AppModule { }
