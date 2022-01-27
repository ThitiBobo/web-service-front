import { Injectable } from '@angular/core';
import {ApiBaseService} from "./api-base.service";
import {Category} from "../../shared/models/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Movie} from "../../shared/models/movie";
import {Character} from "../../shared/models/character";

const PATH = 'characters/';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends ApiBaseService<Movie>{

  private path = PATH

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Character[]> {
    const url = this.apiUrl + this.path
    return this.http.get<any[]>(url).pipe(
      retry(3), catchError(this.handleError<Character[]>('character.list', [])));
  }

  getByActor(code: number): Observable<Character[]>{
    const url = this.apiUrl + this.path + 'actors/' + code
    return this.http.get<any[]>(url).pipe(
      retry(3), catchError(this.handleError<Character[]>('character.getByActor', [])));
  }
}
