import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()



export class FlightdataService {

 
  flightData : any = {
    "Data": {
      "EventId": "xxxx-xxxx-xxxx"
    },
    "Flights": [
      {
        "Outbound": {
          "DepartureDate": "2018-10-12T06:00:00+02:00",
          "ArrivalDate": "2018-10-12T12:35:00+01:00",
          "Origin": {
            "AirportIATACode": "MAD",
            "AirportName": "ADOLFO SUAREZ BARAJAS",
            "CityISOCode": "MAD",
            "CountryISOCode": "ES"
          },
          "Destination": {
            "AirportIATACode": "DUB",
            "AirportName": "DUBLIN INTERNATIONAL",
            "CityISOCode": "DUB",
            "CountryISOCode": "IE"
          }
        },
        "Inbound": {
          "DepartureDate": "2018-10-14T08:50:00+01:00",
          "ArrivalDate": "2018-10-14T16:05:00+02:00",
          "Origin": {
            "AirportIATACode": "DUB",
            "AirportName": "DUBLIN INTERNATIONAL",
            "CityISOCode": "DUB",
            "CountryISOCode": "IE"
          },
          "Destination": {
            "AirportIATACode": "MAD",
            "AirportName": "ADOLFO SUAREZ BARAJAS",
            "CityISOCode": "MAD",
            "CountryISOCode": "ES"
          }
        },
        "Currency": "USD",
        "PricePerPax": "340.20",
        "HasConnections": false
      }
    ]
   }
  
  constructor() { }

  getFlightDetails(){
    

    return this.flightData.Flights;
  }

}
