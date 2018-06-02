import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightdataService } from '../services/flightdata.service';
import * as moment from 'moment';

@Component({
  selector: 'app-datatest',
  templateUrl: './datatest.component.html',
  styleUrls: ['./datatest.component.css']
})


export class DatatestComponent implements OnInit {

  @Input() singleFlight: any;

  constructor( ) { }

  ngOnInit() {}

  
}
