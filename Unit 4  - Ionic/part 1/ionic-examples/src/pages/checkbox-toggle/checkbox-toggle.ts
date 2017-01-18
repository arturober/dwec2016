import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CheckboxToggle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkbox-toggle',
  templateUrl: 'checkbox-toggle.html'
})
export class CheckboxTogglePage {
  options = {
    opt1: true,
    opt2: false,
    opt3: true,
    opt4: false
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckboxTogglePage');
  }

}
