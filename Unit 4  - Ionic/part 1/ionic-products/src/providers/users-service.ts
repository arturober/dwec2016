import { URL_SERVER } from '../app/app.constants';
import { IUser } from '../models/user';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersService {

  constructor(public http: Http) {
    console.log('Hello UsersService Provider');
  }

  getMyProfile(): Observable<IUser> {
    return this.http.get(URL_SERVER + '/profile')
      .map((response: Response) => {
        return <IUser>response.json().user;
      });
  }
}
