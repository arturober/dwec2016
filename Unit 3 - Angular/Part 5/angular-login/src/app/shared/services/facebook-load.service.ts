import { FACEBOOK_ID } from '../../app.constants';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class FacebookLoadService {
  private isLoaded: boolean = false;
  private isLoading: boolean = false;
  private loadObsv: Observable<boolean> = null;

  constructor() { }

  load(): Observable<boolean> {
    if (this.isLoaded) return Observable.of(true);
    else if (this.isLoading) return this.loadObsv;
    this.isLoading = true;

    let prom: Promise<boolean> = new Promise((resolve, reject) => {
      let js,
        id = 'facebook-jssdk',
        ref = document.getElementsByTagName('script')[0];

      js = document.createElement('script');
      js.id = id;
      js.async = true;
      js.src = "//connect.facebook.net/es_ES/sdk.js";
      ref.parentNode.insertBefore(js, ref);

      window.fbAsyncInit = () => {
        FB.init({
          appId: FACEBOOK_ID,
          xfbml: true,
          version: 'v2.8'
        });
        this.isLoaded = true;
        this.isLoading = false;
        resolve(true);
      };
    });

    this.loadObsv = Observable.fromPromise(prom);
    return this.loadObsv;
  }

  login(): Observable<FB.LoginStatusResponse> {
    if(!this.isLoaded) return Observable.throw("Facebook SDK is not loaded!");

    let prom: Promise<FB.LoginStatusResponse> = new Promise((resolve, reject) => {
      FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          resolve(response);
        } else {
          FB.login((response) => {
            if (response.status === 'connected') {
              resolve(response);
            } else {
              reject("Facebook login failed");
            }
          }, { scope: 'public_profile,email' });
        }
      });
    });

    return Observable.fromPromise(prom);
  }

}
