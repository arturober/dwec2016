import { IComment } from '../models/comment';
import { URL_SERVER } from '../app/app.constants';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the ProductsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductsService {

  constructor(public http: Http) {
    
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get(URL_SERVER + '/products')
      .map((response: Response) => {
        return <IProduct[]>response.json().products;
      });
  }

  getMyProducts(): Observable<IProduct[]> {
    return this.http.get(URL_SERVER + '/products/my')
      .map((response: Response) => {
        return <IProduct[]>response.json().products;
      });
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get(URL_SERVER + '/products/' + id)
      .map((response: Response) => {
        return <IProduct>response.json().product;
      });
  }

  getComments(id: number): Observable<IComment[]> {
    return this.http.get(URL_SERVER + '/comments/product/' + id)
      .map((response: Response) => {
        return <IComment[]>response.json().comments;
      });
  }

}
