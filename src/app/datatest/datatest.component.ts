import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightdataService } from '../flightdata.service';
import * as moment from 'moment';

@Component({
  selector: 'app-datatest',
  templateUrl: './datatest.component.html',
  styleUrls: ['./datatest.component.css']
})


export class DatatestComponent implements OnInit {

    flightData : any;
    now = moment();

  constructor(
    public flightService : FlightdataService
  ) { }

  ngOnInit() {
    this.flightData = this.flightService.getFlightDetails();

  }

}
