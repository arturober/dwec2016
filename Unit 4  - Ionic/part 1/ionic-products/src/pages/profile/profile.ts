import { UsersService } from '../../providers/users-service';
import { IUser } from '../../models/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
    public usersService: UsersService) {}

  ionViewDidLoad() {
      this.usersService.getMyProfile()
        .subscribe(
          user => this.user = user
        );
  }

}
