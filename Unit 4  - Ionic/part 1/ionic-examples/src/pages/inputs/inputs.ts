import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Inputs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html'
})
export class InputsPage {
  person: any = {
    name: "",
    age: "",
    email: "",
    password: "",
    phone: "",
    birthDate: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputsPage');
  }

}
