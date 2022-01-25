import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from "../../shared/models/user";
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
    if (!(localStorage.getItem('user') === null)) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();
    }
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}/auth/signin`, { email, password })
      .pipe(map(user => {
        console.log("user : ")
        console.log(user)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    // @ts-ignore
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/auth/register`, user);
  }
}
