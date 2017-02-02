import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook } from 'ionic-native';

@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html'
})
export class FacebookPage {
  accessToken = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    Facebook.getLoginStatus()
    .then(resp => {
      if(resp.status === "connected")
        this.accessToken = resp.authResponse.accessToken;
    });
  }

  login() {
    Facebook.login(["public_profile", "email"])
    .then(resp => {
      if(resp.status === "connected")
        this.accessToken = resp.authResponse.accessToken;
    })
    .catch(e => console.error(e));
  }

  logout() {
    Facebook.logout().then(() => this.accessToken = "");
  }
}
