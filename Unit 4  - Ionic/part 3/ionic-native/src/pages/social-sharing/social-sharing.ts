import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

@Component({
  selector: 'page-social-sharing',
  templateUrl: 'social-sharing.html'
})
export class SocialSharingPage {
  message: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  share() {
    SocialSharing.shareViaWhatsApp(this.message, null, null);
  }
}
