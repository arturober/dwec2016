import { Vibration } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html'
})
export class VibrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  vibrate() {
    Vibration.vibrate(1000);
  }

  vibrate2() {
    // 0,5s vibrate, 0,5s pause, 1s vibrate
    Vibration.vibrate([500,500,1000]);
  }

}
