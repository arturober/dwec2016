import { UsersService } from '../../providers/users-service';
import { Component } from '@angular/core';
import { NavParams, ViewController, ToastController } from 'ionic-angular';

/*
  Generated class for the ChangePassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html'
})
export class ChangePasswordPage {
  name: string;
  password: string;
  password2: string;

  constructor(public viewCtrl: ViewController, public navParams: NavParams,
              public userServ: UsersService, public toast: ToastController) {
    this.name = navParams.get("name");
  }

  changePass() {
    if(this.password != this.password2) {
      this.showToast(3000, "Passwords do not match!");
      return;
    }
    
    this.userServ.changePassword(this.password)
      .subscribe(
        ok => this.viewCtrl.dismiss({changed: true}),
        error => this.showToast(3000, error)
      );
  }

  cancel() {
    this.viewCtrl.dismiss({changed: false});
  }

  private showToast(duration: number, message: string) {
    let toast = this.toast.create({
      duration,
      message
    });
    toast.present();
  }
}
