import { Injectable } from '@angular/core';
import {ApiBaseService} from "./api-base.service";
import {Category} from "../../shared/models/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Movie} from "../../shared/models/movie";
import {Actor} from "../../shared/models/actor";

const PATH = 'actors/';

@Injectable({
  providedIn: 'root'
})
export class ActorService extends ApiBaseService<Actor>{

  private path = PATH

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Actor[]> {
    const url = this.apiUrl + this.path
    return this.http.get<any[]>(url).pipe(
      retry(3), catchError(this.handleError<Actor[]>('actor.list', [])));
  }
}
