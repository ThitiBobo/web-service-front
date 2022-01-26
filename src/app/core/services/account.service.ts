import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {RegisterRequestAdapter, User} from "../../shared/models/user";
import {environment} from "../../../environments/environment";


// TODO
@Injectable({ providedIn: 'root' })
export class AccountService {

  private userSubject!: BehaviorSubject<User>;
  public user!: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {

      this.userSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();

  }

  public isUserExist(): boolean{
    return localStorage.getItem('user') != undefined
  }
  public get userValue(): User {
    return this.userSubject.value;
  }

  set userValue(user){
    this.userSubject.next(user)
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(email: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}/auth/signin`, { email, password })
      .pipe(map(user => {
        console.log("user : ")
        console.log(user)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.userValue = user
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    // @ts-ignore
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }

  register(user: User) {
    console.log('post signup')
    let item = RegisterRequestAdapter.adapt(user)
    return this.http.post(`${environment.apiUrl}/auth/signup`, item);
  }
}
