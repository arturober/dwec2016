import { GPLUS_WEB_CLIENT_ID } from '../../app/app.constants';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from 'ionic-native';

@Component({
  selector: 'page-google-plus',
  templateUrl: 'google-plus.html'
})
export class GooglePlusPage {
  isLogged = false;
  response = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    // Check if we are logged in. webClientId is the web clientID from google developer console
    GooglePlus.trySilentLogin({'webClientId': GPLUS_WEB_CLIENT_ID})
      .then(res => {
        this.response = res;
        this.isLogged = true;
      })
      .catch(err => console.error(err));
  }

  login() {
    GooglePlus.login({'webClientId': GPLUS_WEB_CLIENT_ID})
      .then(res => {
        this.response = res;
        this.isLogged = true;
      })
      .catch(err => console.error(err));
  }

  logout() {
    GooglePlus.logout()
      .then(res => this.isLogged = false)
      .catch(err => console.error(err));
  }

  disconnect() {
    GooglePlus.disconnect()
      .then(res => this.isLogged = false)
      .catch(err => console.error(err));
  }
}
