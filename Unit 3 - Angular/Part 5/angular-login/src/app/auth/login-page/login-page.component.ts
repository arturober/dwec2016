import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private email: string = "";
  private password: string = "";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      ok => this.router.navigate(['/users']),
      error => alert(error)
    );
  }

  loginGoogle(token: string) {
    this.authService.loginGoogle(token).subscribe(
      ok => this.router.navigate(['/users']),
      error => alert(error)
    );
  }

  loginFacebook(token: string) {
    this.authService.loginFacebook(token).subscribe(
      ok => this.router.navigate(['/users']),
      error => alert(error)
    );
  }

  goRegister() {
    this.router.navigate(['/auth/register']);
  }

}
