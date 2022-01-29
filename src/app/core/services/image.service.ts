import {Injectable} from '@angular/core';
import {ApiBaseService} from "./api-base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../../shared/models/movie";
import {catchError, retry} from "rxjs/operators";
import {FileToImport} from "@shared/models/file-to-import";

const PATH = 'images';

@Injectable({
  providedIn: 'root'
})
export class ImageService extends ApiBaseService<any> {

  private path = PATH

  constructor(private http: HttpClient) {
    super();
  }

  get(): Observable<any> {
    const url = this.apiUrl + this.path
    return this.http.get<any>(url).pipe(
      retry(3), catchError(this.handleError<Movie[]>('image.get', [])));
  }

  upload(fileToImport: FileToImport, booleanValue?: boolean): Observable<any> {
    const formData = new FormData();
    formData.append('force', booleanValue? booleanValue.toString() : "false");
    formData.append('file', fileToImport.file)
    console.log(fileToImport.file)
    const url = this.apiUrl + this.path + '/upload'
    return this.http.post(url, formData).pipe(
      retry(3), catchError(this.handleError<Movie[]>('image.get', [])))
  }
}
