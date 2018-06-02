import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Http,RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()



export class FlightdataService {
  early: number = 48;
  hours: number = 12;
  token: string = 'ayJr25HPgiFLJJbR4MjHbarND6g3WVF8v/xUMaL31Zasf97aC8RP4w==';
  url : string = `http://travelent-flights.azurewebsites.net/api/GetFlights?EventId=xxxx&OriginCity=DUB&NumberOfOutboundHoursBeforeEvent=12&NumberOfInboundHoursAfterEvent=4`;
  url_early : string = `http://travelent-flights.azurewebsites.net/api/GetFlights?EventId=xxxx&OriginCity=DUB&NumberOfOutboundHoursBeforeEvent=48&NumberOfInboundHoursAfterEvent=48`;
  url_long : string = `http://travelent-flights.azurewebsites.net/api/GetFlights?EventId=xxxx&OriginCity=DUB&NumberOfOutboundHoursBeforeEvent=72&NumberOfInboundHoursAfterEvent=72`

  headers = new Headers();
  params : any;
 

  flightData : any 
  
  constructor(private http: Http) { }

    // Get formatted flight details
    
    getFlightDetails(horas){
    this.hours = horas  ;
    this.headers.append('x-functions-key', this.token);
    let options = new RequestOptions({ headers: this.headers });
    if(horas===12){
      return this.http.get(this.url).map((res) => res.json())
    }
    if(horas===48){
      return this.http.get(this.url_early).map((res) => res.json())
    }
    if(horas===72){
      return this.http.get(this.url_long).map((res) => res.json())
    }
}
}
