import { PopoverComponent } from './popover-component';
import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';


@Component({
  selector: 'page-popovers',
  templateUrl: 'popovers.html'
})
export class PopoversPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoversPage');
  }

  showPopOver(event) {
    let popover = this.popoverCtrl.create(PopoverComponent, {param: 1});
    popover.present({
      ev: event
    });
  }
}
