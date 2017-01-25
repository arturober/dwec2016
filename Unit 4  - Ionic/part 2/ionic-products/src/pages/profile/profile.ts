import { ChangePasswordPage } from '../change-password/change-password';
import { UsersService } from '../../providers/users-service';
import { IUser } from '../../models/user';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: IUser;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public usersService: UsersService,
    public toast: ToastController) {}

  ionViewDidLoad() {
      this.usersService.getMyProfile()
        .subscribe(
          user => this.user = user
        );
  }

  openChangePass() {
    let modal = this.modalCtrl.create(ChangePasswordPage, {name: this.user.name});
    modal.onDidDismiss(data => {
      if(data.changed) this.showToast(3000, "Password updated successfully!");
    });
    modal.present();
  }

  private showToast(duration: number, message: string) {
    let toast = this.toast.create({
      duration,
      message
    });
    toast.present();
  }
}
