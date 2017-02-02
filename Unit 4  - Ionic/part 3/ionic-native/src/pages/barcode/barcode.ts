import { BarcodeScanner } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Barcode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})
export class BarcodePage {
  data = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  scan() {
    BarcodeScanner.scan().then((barcodeData) => {
      this.data = barcodeData; 
    }, (err) => {
      // An error occurred
    });
  }

}
