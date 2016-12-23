import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent},
      {path: '', redirectTo: 'login'},
      {path: '**', redirectTo: 'login'}
    ])
  ],
  declarations: [GoogleLoginComponent, FacebookLoginComponent, LoginPageComponent, RegisterPageComponent],
  exports: [GoogleLoginComponent, FacebookLoginComponent],
  providers: []
})
export class AuthModule { }
