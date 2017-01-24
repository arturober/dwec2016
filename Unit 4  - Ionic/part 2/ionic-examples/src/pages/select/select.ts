import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Select page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select',
  templateUrl: 'select.html'
})
export class SelectPage {
  selectedConsole: string;
  selectedConsoles: string[] = [];
  consoles: {val: string, title: string}[] = [
    {val: "nes", title: "NES"},
    {val: "n64", title: "Nintendo64"},
    {val: "ps", title: "Playstation"},
    {val: "md", title: "Mega Drive"},
    {val: "saturn", title: "Saturn"},
    {val: "snes", title: "SNES"},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }

}
