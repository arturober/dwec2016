import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Gestures page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html'
})
export class GesturesPage {
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  public pinch: number = 0;
  public rotate: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturesPage');
  }

  pressEvent(e) {
    this.press++
  }

  panEvent(e) {
    this.pan++
  }

  swipeEvent(e) {
    this.swipe++
  }

  tapEvent(e) {
    this.tap++
  }

  pinchEvent(e) {
    this.swipe++
  }

  rotateEvent(e) {
    this.tap++
  }
}
