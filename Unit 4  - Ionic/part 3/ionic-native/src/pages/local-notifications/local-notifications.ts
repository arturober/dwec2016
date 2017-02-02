import { LocalNotifications } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the LocalNotifications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-local-notifications',
  templateUrl: 'local-notifications.html'
})
export class LocalNotificationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  createNotification() {
    LocalNotifications.schedule({
      id: 1,
      text: 'Hello!, I\'m a notification',
      at: new Date(new Date().getTime() + 10000),
      led: '0000FF', // Blue led 
      sound: null
    });
  }

  cancelNotification() {
    LocalNotifications.cancel(1);
  }
}
