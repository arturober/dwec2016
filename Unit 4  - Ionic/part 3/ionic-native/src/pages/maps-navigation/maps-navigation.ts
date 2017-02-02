import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from 'ionic-native';

@Component({
  selector: 'page-maps-navigation',
  templateUrl: 'maps-navigation.html'
})
export class MapsNavigationPage {
  lat = 38.289257;
  lng = -0.558296;
  zoom = 17;
  info = "Come here please!";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  navigate() {
    let options: LaunchNavigatorOptions = {};
    
    LaunchNavigator.navigate([this.lat, this.lng], options)
      .then(ok => console.log("Navigation launched!"));
  }
}
