import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { ActivatedRoute, RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { DatatestComponent } from './datatest/datatest.component';
import { WidgetComponent } from './widget/widget.component';

import { FlightdataService } from './services/flightdata.service';
import { LocationService } from './services/location.service';


import { MomentPipe } from './pipes/moments.pipe';
import { TimePipe } from './pipes/flightTime.pipe';
 
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'data',  component: DatatestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DatatestComponent,
    WidgetComponent,
    MomentPipe,
    TimePipe
    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    FlightdataService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
