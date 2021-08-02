import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from 'src/app/app-component/app.component';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9FAaf5BF6WYKi_4Sn87KNo2rrLlLdGIQ'
    })
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class ContactusComponent implements OnInit {
  lat = 0;
  lng = 0;
  constructor() { }

  ngOnInit() {
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

}
