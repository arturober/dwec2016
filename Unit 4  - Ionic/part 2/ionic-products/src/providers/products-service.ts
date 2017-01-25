import { AuthHttp } from 'angular2-jwt';
import { IComment } from '../models/comment';
import { URL_SERVER } from '../app/app.constants';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the ProductsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductsService {

  constructor(public http: AuthHttp) { }

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

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post(URL_SERVER + '/products/', product)
      .map((response: Response) => {
        let json = response.json();
        if(!json.ok) throw response;
        return json.product;
      })
      .catch((response: Response) => {
        if(response.status === 200) {
          return Observable.throw(response.json().error);
        }
        return Observable.throw("Error creating the product");
      });
  }

  deleteProduct(id: number): Observable<boolean> {
    return this.http.delete(URL_SERVER + '/products/' + id)
      .map((response: Response) => {
        return response.json().ok;
      });
  }

  getComments(id: number): Observable<IComment[]> {
    return this.http.get(URL_SERVER + '/comments/product/' + id)
      .map((response: Response) => {
        return <IComment[]>response.json().comments;
      });
  }

}
