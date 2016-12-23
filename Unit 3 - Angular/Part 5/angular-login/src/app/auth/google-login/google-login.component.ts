import { GOOGLE_CLIENT_ID } from '../../app.constants';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {
  auth: gapi.auth2.GoogleAuth;
  @Output() loginGoogle: EventEmitter<string> = new EventEmitter<string>();

  constructor(private button: ElementRef) { }

  ngOnInit() {
    gapi.load('auth2', () => {
      this.auth = gapi.auth2.init({
        client_id: GOOGLE_CLIENT_ID,
        cookie_policy: 'single_host_origin'
      });
      
      this.auth.attachClickHandler(this.button.nativeElement, {},
          (googleUser) => {
            this.loginGoogle.emit((<any>googleUser).Zi.access_token);
          }, (error) => {
            console.log(error);
          });
    });
  }

}
