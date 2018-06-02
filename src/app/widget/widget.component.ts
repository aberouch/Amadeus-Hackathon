import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  currentLocation: any;
  errorMsg: string; 
  myInterval = 1000;
  constructor( public locationService : LocationService) { }

  ngOnInit() {
    console.log(this.currentLocation)
    this.getUserLocation();
 
  }


  // Gets browser's location
  getUserLocation() {
   
    let self = this;
    const accuracy = { enableHighAccuracy: true }; 
    
    function loop() {
    
      self.locationService.getLocation(accuracy)    
      .subscribe( function(position) {
        self.currentLocation = position.coords; 
        console.log(self.currentLocation)
        if(self.currentLocation){
          self.myInterval = 20000;
        }
         }, 
    function(error) { 
        self.errorMsg = error; 
        console.log(error)
    });
            
            setTimeout(loop, self.myInterval);
        
      }
      loop();
    }

}
