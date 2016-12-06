import { ProductDetailResolve } from './shared/product-detail-resolve.service';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { ProductDetailGuard } from './shared/product-detail-guard.service';
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProductsService } from './shared/products.service';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterPipe } from './shared/product-filter.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarRatingComponent,
    ProductItemComponent,
    WelcomeComponent,
    ProductDetailComponent,
    LoginComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    ProductsService,
    Title,
    ProductDetailGuard,
    CanDeactivateGuard,
    ProductDetailResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
