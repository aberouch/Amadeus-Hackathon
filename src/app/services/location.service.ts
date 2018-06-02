import { Injectable } from '@angular/core';
import { Http,RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { HttpHeaders, HttpParams } from '@angular/common/http';

const GEOLOCATION_ERRORS = {
  'errors.location.unsupportedBrowser': 'Browser does not support location services',
  'errors.location.permissionDenied': 'You have rejected access to your location',
  'errors.location.positionUnavailable': 'Unable to determine your location',
  'errors.location.timeout': 'Service timeout has been reached'
};


@Injectable()
export class LocationService {

  position : any;
  myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

  constructor(private http: Http) { }

  
  
  public getLocation(geoLocationOptions?: any): Observable<any> {
    geoLocationOptions = geoLocationOptions || { timeout: 5000 };

        return Observable.create(observer => {

          if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
              (position) => {
                observer.next(position);
                observer.complete();
              },
              (error) => {
                switch (error.code) {
                  case 1:
                    console.log("Permission denied");
                    observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
                    break;
                  case 2:
                    console.log("Geolocation currently unavailable");
                    observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
                    break;
                  case 3:
                    console.log("Geolocation timed out. Try again later");
                    observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
                    break;
                }
              },
              geoLocationOptions);
        } else {
              observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
        }

        });



      }
}

    export let geolocationServiceInjectables: Array<any> = [
      {provide: LocationService, useClass: LocationService }
    ];

