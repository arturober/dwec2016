import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Segment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html'
})
export class SegmentPage {
  type: string = "heroes";
  heroes: string[] = [
    "Batman", "Superman", "Spiderman", "Hulk", "Mazinger Z"
  ];
  villains: string[] = [
    "Dr Eggman", "The Joker", "Darth Vader", "Hannibal Lecter"
  ];
  weapons: string[] = [
    "Missile", "Laser gun", "Tank", "X Rays"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }

}
