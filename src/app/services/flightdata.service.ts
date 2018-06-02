import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Http,RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()



export class FlightdataService {

  token: string = 'ayJr25HPgiFLJJbR4MjHbarND6g3WVF8v/xUMaL31Zasf97aC8RP4w==';
  url : string = 'http://travelent-flights.azurewebsites.net/api/GetFlights?EventId=xxxx&OriginCity=LAX&NumberOfOutboundHoursBeforeEvent=12&NumberOfInboundHoursAfterEvent=12'
  headers = new Headers();
  params : any;
 

  flightData : any 
  
  constructor(private http: Http) { }

  // getFlightDetails(){
  //   return this.flightData.Flights;
  // }

  // getFlightDetails(){
  //   return this.http.get('http://travelent-flights.azurewebsites.net/api/GetFlights?EventId=xxxx&OriginCity=MAD&NumberOfOutboundHoursBeforeEvent=12&NumberOfInboundHoursAfterEvent=12', this.options)
  //   .map((res) => res.json());

  // }


    getFlightDetails(){
    this.headers.append('x-functions-key', this.token);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.url).map((res) => res.json())
    }
}

2