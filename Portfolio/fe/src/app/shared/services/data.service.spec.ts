/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import { IData } from '../models/data';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DataService', () => {
  let dataService: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
      schemas: [NO_ERRORS_SCHEMA]
    });
    dataService = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`dataService should be defined`, inject([DataService], (service: DataService) => {
    expect(dataService).toBeTruthy();
  }))


  it(`getData() should http GET images`, () => {
    const url: string = "https://firebasestorage.googleapis.com/v0/b/alexandraciausu-a6df7.appspot.com/o/file.json?alt=media";
    const expectedData: IData =
    {
      day: [{
        url: "url"
      }],
      night: [{
        url: "url"
      }],
      bridal: [{
        url: "url"
      }],
      special: [{
        url: "url"
      }]
    };
    dataService.getData().subscribe((res: IData) => {
      expect(res).toEqual(expectedData);
    });
    const req = httpMock.expectOne(url);
    expect(req.request.method).toEqual("GET");
    req.flush(expectedData);
    httpMock.verify();
  })

  afterEach(() => {
    httpMock.verify();
  })


  it(`should test for 404 error`, inject([DataService], (service: DataService) => {
    const url: string = "https://firebasestorage.googleapis.com/v0/b/alexandraciausu-a6df7.appspot.com/o/file.json?alt=media";
    const emsg: string = 'deliberate 404 error';

    dataService.getData().subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );
    const req = httpMock.expectOne(url);
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  }));


  
  it(`should test for network error`, () => {
    const url: string = "https://firebasestorage.googleapis.com/v0/b/alexandraciausu-a6df7.appspot.com/o/file.json?alt=media";
    const emsg = 'simulated network error';
    dataService.getData().subscribe(
      data => fail('should have failed with the network error'),
      (error: HttpErrorResponse) => {
        expect(error.error.message).toEqual(emsg, 'message');
      }
    );

    const req = httpMock.expectOne(url);
    const mockError = new ErrorEvent('Network error', {
      message: emsg
    });

    req.error(mockError);
  });

})

