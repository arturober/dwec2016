import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

/*
  Generated class for the Toasts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-toasts',
  templateUrl: 'toasts.html'
})
export class ToastsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastsPage');
  }

  showGreenToast() {
    let toast = this.toastCtrl.create({
      message: "I'm a toast message",
      duration: 2000, // 2 seconds
      position: 'middle',
      cssClass: "green"
    });

    toast.present();
  }
}
