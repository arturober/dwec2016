import { IUser } from '../models/user.model';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL } from '../../app.constants';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  constructor(private http: AuthHttp) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get(SERVER_URL + '/users')
      .map((response: Response) => {
        return <IUser[]>response.json().users;
      }).catch((error) => Observable.throw("Error getting users"));
  }
}
