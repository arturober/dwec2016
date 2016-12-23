import { CanActivateNotLogged } from './guards/can-activate-not-logged.service';
import { CanActivateLogged } from './guards/can-activate-logged.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthService, CanActivateLogged, CanActivateNotLogged],
  declarations: []
})
export class SharedModule { }
