import { Injectable } from '@angular/core';
import {ApiBaseService} from "./api-base.service";
import {Category} from "../../shared/models/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Movie} from "../../shared/models/movie";

const PATH = 'movies/';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends ApiBaseService<Movie>{

  private path = PATH

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Movie[]> {
    const url = this.apiUrl + this.path
    return this.http.get<any[]>(url).pipe(
      retry(3), catchError(this.handleError<Movie[]>('movie.list', [])));
  }

  getByCategory(code: String): Observable<Movie[]>{
    const url = this.apiUrl + this.path + 'getByCategory/' + code
    return this.http.get<any[]>(url).pipe(
      retry(3), catchError(this.handleError<Movie[]>('category.getByCategoy', [])));
  }
}
