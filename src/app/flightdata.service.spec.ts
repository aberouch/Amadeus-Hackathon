import { TestBed, inject } from '@angular/core/testing';

import { FlightdataService } from './flightdata.service';

describe('FlightdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightdataService]
    });
  });

  it('should be created', inject([FlightdataService], (service: FlightdataService) => {
    expect(service).toBeTruthy();
  }));
});
