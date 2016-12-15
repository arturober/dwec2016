import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
    let id = +route.params['id'];
    if(isNaN(id) || id < 1) {
      alert("Invalid product id: " + route.params['id']);
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
