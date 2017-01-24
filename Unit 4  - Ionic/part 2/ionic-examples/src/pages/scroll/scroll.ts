import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Scroll page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scroll',
  templateUrl: 'scroll.html'
})
export class ScrollPage {
  icons: string[] = [
    "alert", "albums", "alarm", "analytics", "logo-angular", "logo-apple", "appstore", "archive",
    "at", "baseball", "basket", "battery-charging", "beer", "bicycle", "logo-bitcoin", "boat"
  ]; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScrollPage');
  }

}
