import { AuthService } from './shared/services/auth.service';
import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogged = false;

  constructor(private authService: AuthService, private zone: NgZone) {}

  ngOnInit() {
    this.authService.logged$.subscribe(
      (logged: boolean) => this.zone.run(() => this.isLogged = logged)
    );
  }
}
