import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import {FacebookLoadService} from '../../shared/services/facebook-load.service';

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent implements OnInit {
  @Output() loginFacebook: EventEmitter<string> = new EventEmitter<string>();

  constructor(private button: ElementRef,
    private facebookServ: FacebookLoadService) { }

  ngOnInit() {
    this.loadFacebookAPI();
  }

  login() {
    this.facebookServ.login()
      .subscribe(
        (response) => {
          this.loginFacebook.emit(response.authResponse.accessToken);
        },
        (error) => console.error(error)
      );
  }

  loadFacebookAPI() {
    this.facebookServ.load()
      .subscribe(
        (ok) => this.button.nativeElement.addEventListener('click', (e) => this.login()),
        (error) => console.error("Facebook API couldn't be loaded")
      );
  }

}
