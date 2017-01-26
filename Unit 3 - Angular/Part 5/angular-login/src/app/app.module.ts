import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanActivateNotLogged } from './shared/guards/can-activate-not-logged.service';
import { CanActivateLogged } from './shared/guards/can-activate-logged.service';
import { FacebookLoadService } from './shared/services/facebook-load.service';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AUTH_PROVIDERS, AuthConfig, AuthHttp } from 'angular2-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule, // This module is ours!
    MenuModule, // This module is ours!
    RouterModule.forRoot([ // Lazy loaded modules
      { path: 'users', canActivate: [CanActivateLogged], loadChildren: './users/users.module#UsersModule' },
      { path: 'auth', canActivate: [CanActivateNotLogged], loadChildren: './auth/auth.module#AuthModule' },
      { path: '', redirectTo: 'users', pathMatch: 'prefix' },
      { path: '**', redirectTo: 'users' }
    ]),
    NgbModule.forRoot()
  ],
  providers: [
    FacebookLoadService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
