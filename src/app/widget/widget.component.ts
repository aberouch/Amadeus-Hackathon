import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { FlightdataService } from '../services/flightdata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  flightEarly: any;
  flightData : any;
  flightLong: any;
  
  flightsLonger$:Observable<any>;
  flightsEarly$:Observable<any>;
  flights$:Observable<any>;
  flights:Observable<any>;
  
  currentLocation: any;
  errorMsg: string;
  myInterval = 1000;
  
  constructor(public locationService: LocationService,
    public flightService : FlightdataService) { }

  ngOnInit() {
    this.getFlightData(12);
    
    
    // this.getUserLocation();
  }

  getFlightData(hours){
    this.flights$ = this.flightService.getFlightDetails(12);
    this.flightService.getFlightDetails(12).subscribe(flightData =>  {
      this.flightData = (flightData.Flights)
      this.getFlightEarly(48);
    });
  }


  getFlightEarly(hours){
    this.flightsEarly$ = this.flightService.getFlightDetails(48);
    this.flightService.getFlightDetails(48).subscribe(flightDataEarly =>  {
      this.flightEarly = (flightDataEarly.Flights)
      this.getFlightLonger(72);

    });
  }

  getFlightLonger(hours){
    this.flightsLonger$ = this.flightService.getFlightDetails(72);
    this.flightService.getFlightDetails(72).subscribe(flightDataEarly =>  {
      this.flightLong = (flightDataEarly.Flights)
    
    });
  }



  // Gets browser's location
  getUserLocation() {

    let self = this;
    const accuracy = { enableHighAccuracy: true };

    function loop() {

      self.locationService.getLocation(accuracy)
        .subscribe(function (position) {
          self.currentLocation = position.coords;
          if (self.currentLocation) {
            self.myInterval = 20000;
          }
        },
          function (error) {
            self.errorMsg = error;
            console.log(error)
          });

      setTimeout(loop, self.myInterval);

    }
    loop();
  }

}
