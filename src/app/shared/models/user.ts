import {Injectable} from "@angular/core";

export class User {
  private _id!: string;
  private _username!: string;
  private _email!: string;
  private _roles!: string[];
  private _token!: string;
  private _tokenType!: string;
  private _password!: string;


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get roles(): string[] {
    return this._roles;
  }

  set roles(value: string[]) {
    this._roles = value;
  }

  get accessToken(): string {
    return this._token;
  }

  set accessToken(value: string) {
    this._token = value;
  }

  get tokenType(): string {
    return this._tokenType;
  }

  set tokenType(value: string) {
    this._tokenType = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}

@Injectable({
  providedIn: "root",
})
export class RegisterRequestAdapter {
  public static adapt(user: User): any {
    return {
      username: user.username,
      email: user.email,
      roles: user.roles,
      password: user.password
    }
  }
}

