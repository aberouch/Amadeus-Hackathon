import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightdataService } from '../services/flightdata.service';
import * as moment from 'moment';

@Component({
  selector: 'app-datatest',
  templateUrl: './datatest.component.html',
  styleUrls: ['./datatest.component.css']
})


export class DatatestComponent implements OnInit {

    flights$:Observable<any>;
    flights:Observable<any>;

    flightData : any;
    now = moment();

  constructor(
    public flightService : FlightdataService
  ) { }

  ngOnInit() {
    this.getFlightData();
  }

  getFlightData(){
    this.flights$ = this.flightService.getFlightDetails();
    this.flightService.getFlightDetails().subscribe(flightData =>  this.flightData = (flightData.Flights));
  }

}
