import { DeviceMotion, DeviceMotionAccelerationData } from 'ionic-native';
import { Subscription } from 'rxjs/Subscription';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-device-motion',
  templateUrl: 'device-motion.html'
})
export class DeviceMotionPage {
  subscription: Subscription;
  isSubscribed = false;
  accel: DeviceMotionAccelerationData = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  startMotion() {
    this.subscription = DeviceMotion.watchAcceleration({frequency: 1000})
      .subscribe((acceleration: DeviceMotionAccelerationData) => {
        this.accel = acceleration;
      });

    this.isSubscribed = true;
  }

  stopMotion() {
    this.subscription.unsubscribe();

    this.isSubscribed = false;
  }
}
