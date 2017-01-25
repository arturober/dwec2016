import { URL_SERVER } from '../app/app.constants';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: Http, public storage: Storage,
              public authHttp: AuthHttp) {
  }

  login(email: string, password: string): Observable<{}> {
    return this.http.post(URL_SERVER + '/auth/login', {email: email, password: password})
      .flatMap((response: Response) => {
        console.log(response);
        let json = response.json();
        if(!json.ok) throw response;
        return Observable.fromPromise(this.storage.set('id_token', response.json().token));
      })
      .catch((response: Response) => {
        console.log(response);
        if (response.status == 200)
          return Observable.throw(response.json().error);
        else
          return Observable.throw(`Unknown error: ${response.statusText} (${response.status})`);
      });
  }

  isLogged(): Observable<boolean> {
    return Observable.fromPromise(this.storage.get('id_token'))
      .flatMap((token) => {
        if (!token) return Observable.of(false);
        return this.authHttp.get(URL_SERVER + '/auth/token')
          .map((response: Response) => response.json().ok?true:false);
      })
      .catch((error) => {
        return Observable.of(false);
      });
  }
}
