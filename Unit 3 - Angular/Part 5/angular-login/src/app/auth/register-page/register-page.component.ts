import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms/src/directives';
import { IUser } from '../../users/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  user: IUser;
  password2: string;

  constructor(private router: Router, private authService: AuthService) {
    this.password2 = '';
    this.user = {
      name: '',
      email: '',
      password: '',
      avatar: ''
    };
  }

  ngOnInit() { }

  register() {
    if(this.user.password !== this.password2) return;

    this.authService.register(this.user)
      .subscribe(
        (ok) => this.goBack(),
        (error) => alert(error)
      );
  }

  goBack() {
    this.router.navigate(['/auth/login']);
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.dirty && ngModel.valid,
      [errorClass]: ngModel.dirty && ngModel.invalid
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) return;
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.user.avatar = reader.result;
    });
  }
}
