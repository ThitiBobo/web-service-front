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
  private selectedCategory: String = 'UK'
  private selectedCategoryName: String = 'Sans catégorie'

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Category[]> {
    const url = this.apiUrl + this.path
    return this.http.get<any[]>(url).pipe(
      retry(3), catchError(this.handleError<Category[]>('category.list', [])));
  }

  getSelectedCategory(){ return this.selectedCategory;}
  setSelectedCategory(category: String){this.selectedCategory = category;}

  getSelectedCategoryName(){ return this.selectedCategoryName;}
  setSelectedCategoryName(categoryName: String) {
    this.selectedCategoryName = categoryName
  }
}
