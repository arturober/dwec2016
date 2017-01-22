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

@NgModule({
  declarations: [
    MyApp,
    ProductsPage,
    ProductDetailPage,
    ProductInfoPage,
    ProductCommentsPage,
    ProfilePage
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
    ProfilePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsService,
    UsersService
  ]
})
export class AppModule {}
