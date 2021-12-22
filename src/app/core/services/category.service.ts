import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ApiBaseService} from "./api-base.service";
import {Category} from "../../shared/models/category";


const PATH = 'categories/';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiBaseService<Category> {

  private path = PATH

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Category[]> {
    const url = this.apiUrl + this.path
    return this.http.get<any[]>(url).pipe(
      retry(3), catchError(this.handleError<Category[]>('getAllCategories', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
