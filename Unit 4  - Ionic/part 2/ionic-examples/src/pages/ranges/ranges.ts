import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Ranges page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ranges',
  templateUrl: 'ranges.html'
})
export class RangesPage {
  brightness = 50;
  saturation = 0;
  warmth = 20;
  structure = {
    lower: 20,
    upper: 80
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RangesPage');
  }

}
