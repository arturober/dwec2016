import { MapsNavigationPage } from '../pages/maps-navigation/maps-navigation';
import { SocialSharingPage } from '../pages/social-sharing/social-sharing';
import { AdmobPage } from '../pages/admob/admob';
import { ContactsPage } from '../pages/contacts/contacts';
import { ImagePickerPage } from '../pages/image-picker/image-picker';
import { FacebookPage } from '../pages/facebook/facebook';
import { GooglePlusPage } from '../pages/google-plus/google-plus';
import { SqlLitePage } from '../pages/sql-lite/sql-lite';
import { LocalNotificationsPage } from '../pages/local-notifications/local-notifications';
import { DeviceMotionPage } from '../pages/device-motion/device-motion';
import { BarcodePage } from '../pages/barcode/barcode';
import { CameraPage } from '../pages/camera/camera';
import { VibrationPage } from '../pages/vibration/vibration';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = VibrationPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Admob', component: AdmobPage },
      { title: 'Barcode scanner', component: BarcodePage },
      { title: 'Camera', component: CameraPage },
      { title: 'Contacts', component: ContactsPage },
      { title: 'Device motion', component: DeviceMotionPage },
      { title: 'Facebook Auth', component: FacebookPage },
      { title: 'Geolocation', component: GeolocationPage },
      { title: 'Google Auth', component: GooglePlusPage },
      { title: 'Image picker', component: ImagePickerPage },
      { title: 'Local notifications', component: LocalNotificationsPage },
      { title: 'Maps and Navigation', component: MapsNavigationPage },
      { title: 'Social sharing', component: SocialSharingPage },
      { title: 'SQLite', component: SqlLitePage },
      { title: 'Vibration', component: VibrationPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
