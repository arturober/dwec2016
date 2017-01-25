import { ProductsPage } from '../products/products';
import { AlertController } from 'ionic-angular/components/alert/alert';
import { AuthService } from '../../providers/auth-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public authService: AuthService,
              public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.authService.login(this.email, this.password)
      .subscribe(
        () => this.navCtrl.setRoot(ProductsPage),
        (error) => this.showErrorLogin(error)
      );
  }

  private showErrorLogin(error) {
    let alert = this.alertCtrl.create({
      title: 'Login error',
      subTitle: error,
      buttons: ['Ok']
    });
    alert.present();
  }
}
