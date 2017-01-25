import { AuthHttp } from 'angular2-jwt';
import { URL_SERVER } from '../app/app.constants';
import { IUser } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the UsersService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersService {

  constructor(public http: AuthHttp) {}

  getMyProfile(): Observable<IUser> {
    return this.http.get(URL_SERVER + '/profile')
      .map((response: Response) => {
        return <IUser>response.json().user;
      });
  }

  changePassword(password: string): Observable<boolean> {
    return this.http.post(URL_SERVER + '/profile/password', {password})
      .map((response: Response) => {
        let json = response.json();
        if(json.ok) return true;
        throw response;
      }).catch((response: Response) => {
        return Observable.throw("Couldn't change password");
      });
  }
}
