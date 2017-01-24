import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Alerts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {
  promptAns = "";
  confirmAns = "";
  radioAns = "";
  checkAns = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPage');
  }

  basicAlert() {
    let alert = this.alertCtrl.create({
      title: 'Basic',
      message: 'Hello!, I\'m a basic alert',
      buttons: ['Ok']
    });
    alert.present();
  }

  promptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter your name:",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            this.promptAns = "Cancelled";
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.promptAns = data.name;
          }
        }
      ]
    });

    prompt.present();
  }

  confirmAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Simple question',
      message: 'Do you eat pizza in your breakfast?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.confirmAns = "Yes";
          }
        },
        {
          text: 'No',
          handler: () => {
            this.confirmAns = "No";
          }
        }
      ]
    });
    confirm.present();
  }

  radioAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });

    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black'
    });

    alert.addButton({
      text: 'Cancel',
      handler: data => {
        this.radioAns = "Cancelled";
      }
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.radioAns = data;
      }
    });

    alert.present();
  }

  checkAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'Alderaan',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'Bespin'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Coruscant',
      value: 'Coruscant'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Endor',
      value: 'Endor'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Hoth',
      value: 'Hoth'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Jakku',
      value: 'Jakku'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Naboo',
      value: 'Naboo'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Takodana',
      value: 'Takodana'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Tatooine',
      value: 'Tatooine'
    });

    alert.addButton({
      text: 'Cancel',
      handler: data => {
        this.checkAns = "Cancelled";
      }
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: string[]) => {
        this.checkAns = data.join(" - ");
      }
    });
    alert.present();
  }
}
