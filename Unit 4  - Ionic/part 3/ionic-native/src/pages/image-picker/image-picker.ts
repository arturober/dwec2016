import { ImagePickerOptions, ImagePicker } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ImagePicker page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-image-picker',
  templateUrl: 'image-picker.html'
})
export class ImagePickerPage {
  images = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  pickImages() {
    let options: ImagePickerOptions = {
      maximumImagesCount: 10,
      width: 640, // Max width (aspect ratio is preserved)
      height: 640, // Max height
    }

    ImagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        this.images.push(results[i]);
      }
    }).catch(error => console.error(error));
  }

}
