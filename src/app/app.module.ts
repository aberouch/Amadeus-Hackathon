import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, RouterModule, Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { DatatestComponent } from './datatest/datatest.component';
import { FlightdataService } from './flightdata.service';

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
    MomentPipe,
    TimePipe
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FlightdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
