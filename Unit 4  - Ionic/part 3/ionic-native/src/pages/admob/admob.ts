import { ADMOB_INTERSTITIAL_ID } from '../../app/app.constants';
import { AdMob } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-admob',
  templateUrl: 'admob.html'
})
export class AdmobPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    AdMob.onAdDismiss()
    .subscribe(() => { console.log('Ad closed'); });
  }

  showAd() {
    AdMob.prepareInterstitial(ADMOB_INTERSTITIAL_ID)
    .then(() => { console.log("Ad prepared!"); AdMob.showInterstitial(); })
    .catch(e => console.error("Error:",e));
  }
}
