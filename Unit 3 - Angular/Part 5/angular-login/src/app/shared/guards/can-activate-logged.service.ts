import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CanActivateLogged implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
    return this.authService.isLogged()
      .do(val => {
        if(!val) { // Can't go to this route
          this.router.navigate(['/auth/login']);
        }
      });
  }
}
