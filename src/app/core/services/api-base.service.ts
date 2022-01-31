import { Injectable } from '@angular/core';

import {catchError, retry} from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {environment} from "@env/environment";

const API_URL = environment.apiUrl + '/';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService<T> {

  protected apiUrl = API_URL;
  protected httpOptions = HTTP_OPTIONS

  constructor() { }

  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  protected log(message: string) {
    console.log(message);
  }
}
