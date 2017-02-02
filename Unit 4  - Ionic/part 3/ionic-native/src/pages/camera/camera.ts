import { CameraOptions, Camera } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Camera page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
  image: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  takePhoto() {
    let options: CameraOptions = {
      targetWidth: 640, // max width 640px
      targetHeight: 640, // max height 640px
      allowEdit: true,
      destinationType: Camera.DestinationType.DATA_URL // Base64
    }

    this.getPicture(options);
  }

  pickFromGallery() {
    let options: CameraOptions = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 640, // max width 640px
      targetHeight: 640, // max height 640px
      destinationType: Camera.DestinationType.DATA_URL // Base64
    }

    this.getPicture(options);
  }

  private getPicture(options: CameraOptions) {
    Camera.getPicture(options).then((imageData) => {
      // If it's base64:
      this.image = 'data:image/jpeg;base64,' + imageData;
    }).catch((err) => {
      // Handle error
    });
  }

}
