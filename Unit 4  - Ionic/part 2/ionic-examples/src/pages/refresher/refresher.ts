import { Component } from '@angular/core';
import { NavController, NavParams, Refresher } from 'ionic-angular';

/*
  Generated class for the Refresher page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-refresher',
  templateUrl: 'refresher.html'
})
export class RefresherPage {
  items: String[] = [
    "Star wars",
    "Lord of the rings",
    "Terminator",
    "Pulp fiction"
  ];
  refreshed = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  refreshItems(refresher: Refresher) {
    // Simulating an external service call with a timeout
    setTimeout(() => {
      if(!this.refreshed) {
        this.items.push("Truman show", "Avatar", "Matrix", "Reservoir dogs");
        this.items.sort();
        this.refreshed = true;
      }
      refresher.complete();
    }, 2000);
  }

}
