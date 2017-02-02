import { GMAPS_API_KEY } from './app.constants';
import { MapsNavigationPage } from '../pages/maps-navigation/maps-navigation';
import { AgmCoreModule } from 'angular2-google-maps/core';
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
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


@NgModule({
  declarations: [
    MyApp,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    BarcodePage,
    DeviceMotionPage,
    LocalNotificationsPage,
    SqlLitePage,
    GooglePlusPage,
    FacebookPage,
    ImagePickerPage,
    ContactsPage,
    AdmobPage,
    SocialSharingPage,
    MapsNavigationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: GMAPS_API_KEY
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    BarcodePage,
    DeviceMotionPage,
    LocalNotificationsPage,
    SqlLitePage,
    GooglePlusPage,
    FacebookPage,
    ImagePickerPage,
    ContactsPage,
    AdmobPage,
    SocialSharingPage,
    MapsNavigationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
