import { NewProductPage } from '../pages/new-product/new-product';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import { ProductsPage } from '../pages/products/products';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { ProfilePage } from '../pages/profile/profile';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: Nav;

  rootPage: any = null;

  constructor(public platform: Platform, public authService: AuthService,
              public storage: Storage) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      this.authService.isLogged()
        .subscribe(
          (ok) => this.rootPage = ok?ProductsPage:LoginPage,
          (error) => this.rootPage = LoginPage,
          () => Splashscreen.hide()
        );
    });
  }

  goProfile() {
    this.nav.push(ProfilePage);
  }

  goMyProducts() {
    this.nav.push(ProductsPage, {showMine: true});
  }

  goNewProduct() {
    this.nav.push(NewProductPage);
  }

  logout() {
    this.storage.remove('id_token').then(
      () => this.nav.setRoot(LoginPage)
    );
  }
}
