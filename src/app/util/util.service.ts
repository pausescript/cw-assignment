import { ApiResponse } from './apiresponse';
import { Injectable } from '@angular/core';
import {of as observableOf,  Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public handleApiResponseError(error?): Observable<ApiResponse> {
      console.log(error);
      return observableOf(new ApiResponse(null, error.error.ErrorCode, error.error.ErrorMessage));
  }
}
