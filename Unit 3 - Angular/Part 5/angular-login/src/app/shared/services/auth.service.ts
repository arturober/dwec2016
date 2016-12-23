import { IUser } from '../../users/models/user.model';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { SERVER_URL } from '../../app.constants';
import { EventEmitter, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  logged: boolean = false;
  logged$: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: Http, private authHttp: AuthHttp) { }

  private setLogged(logged: boolean, token: string = '') {
    this.logged = logged;
    this.logged$.emit(logged);
    if(logged && token) localStorage.setItem('id_token', token);
    else if(!logged) localStorage.removeItem('id_token');
  }

  private anyLogin(url: string, data: any): Observable<boolean> {
    return this.http.post(url, data)
      .map((response: Response) => {
        let resp: any = response.json();
        if(resp.ok) {
          this.setLogged(true, resp.token);
          return true;
        } else {
          throw resp.error;
        }
      }).catch((error) => {
        if(error instanceof Response) 
          return Observable.throw("Login error");
        else
          return Observable.throw(error);
      });
  };

  login(email: string, password: string): Observable<boolean> {
    return this.anyLogin(SERVER_URL + '/login', { email, password });
  }

  isLogged(): Observable<boolean> {
    if(!this.logged && localStorage.getItem('id_token')) {
      return this.authHttp.get(SERVER_URL + '/login')
        .map((response:Response) => true)
        .catch((response: Response) => Observable.of(false))
        .do(logged => this.setLogged(logged));
    }
    return Observable.of(this.logged);
  }

  loginGoogle(access_token: string) {
    return this.anyLogin(SERVER_URL + '/login/google', { access_token });
  }

  loginFacebook(accessToken: string) {
    return this.anyLogin(SERVER_URL + '/login/facebook', { accessToken });
  }

  register(user:IUser): Observable<boolean> {
    return this.http.post(SERVER_URL + '/register', user)
      .map((response: Response) => {
        let resp: any = response.json();
        if(resp.ok) return true;
        else throw resp.error;
      }).catch((error) => {
        if(error instanceof Response) 
          return Observable.throw("Login error");
        else
          return Observable.throw(error);
      });
  }

  logout() {
    this.setLogged(false);
  }
}
