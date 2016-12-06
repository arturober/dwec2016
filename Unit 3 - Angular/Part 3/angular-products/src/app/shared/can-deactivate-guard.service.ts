import { Observable } from 'rxjs/Observable';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

export interface CanDeactivateComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

  constructor() { }

  canDeactivate(component: CanDeactivateComponent,
      route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(component.canDeactivate) {
        return component.canDeactivate();
      }
      return true;
  }
}
