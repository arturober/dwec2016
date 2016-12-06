import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductsService } from './products.service';
import { IProduct } from './iproduct';
import { Resolve } from '@angular/router/src/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductDetailResolve implements Resolve<IProduct> {

  constructor(private productService: ProductsService, 
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IProduct> {
    return this.productService.getProduct(route.params['id'])
      .catch(error => {
        this.router.navigate(['/products']);
        return Observable.of(null)
      });
  }

}
