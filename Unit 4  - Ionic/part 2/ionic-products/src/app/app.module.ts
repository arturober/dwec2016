import { NewProductPage } from '../pages/new-product/new-product';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { AuthService } from '../providers/auth-service';
import { LoginPage } from '../pages/login/login';
import { Http } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { ProductsService } from '../providers/products-service';
import { UsersService } from '../providers/users-service';
import { ProductCommentsPage } from '../pages/product-comments/product-comments';
import { ProductInfoPage } from '../pages/product-info/product-info';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ProductsPage } from '../pages/products/products';
import { ProfilePage } from '../pages/profile/profile';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';

let storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token')),
  }), http);
}


@NgModule({
  declarations: [
    MyApp,
    ProductsPage,
    ProductDetailPage,
    ProductInfoPage,
    ProductCommentsPage,
    ProfilePage,
    LoginPage,
    ChangePasswordPage,
    NewProductPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductsPage,
    ProductDetailPage,
    ProductInfoPage,
    ProductCommentsPage,
    ProfilePage,
    LoginPage,
    ChangePasswordPage,
    NewProductPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsService,
    UsersService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    Storage,
    AuthService
  ]
})
export class AppModule {}
