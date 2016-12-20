import { Observable } from 'rxjs/Observable';
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
      // If the component implements the interface's method, we'll call it.
      return component.canDeactivate? component.canDeactivate() : true;
  }
}
