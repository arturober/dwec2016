import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { MenuModule } from './menu/menu.module';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { APP_ROUTES } from './app.routes';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    MenuModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    Title,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
