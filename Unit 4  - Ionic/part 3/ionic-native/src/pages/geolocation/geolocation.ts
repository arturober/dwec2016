import { Subscription } from 'rxjs/Subscription';
import { Geolocation } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html'
})
export class GeolocationPage {
  lat: number;
  lng: number;
  lat2: number;
  lng2: number;
  geoSubscription: Subscription;
  isSubscribed = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  geolocate() {
    Geolocation.getCurrentPosition().then(resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    })
  }

  startGeo() {
    this.geoSubscription = Geolocation.watchPosition()
      .filter((data: any) => data.code === undefined)
      .subscribe(data => {
        this.lat2 = data.coords.latitude;
        this.lng2 = data.coords.longitude;
      });

    this.isSubscribed = true;
  }

  stopGeo() {
    this.geoSubscription.unsubscribe();
    this.isSubscribed = false;
  }
}
