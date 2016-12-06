import * as console from 'console';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IProduct } from './iproduct';
import { Injectable } from '@angular/core';

const PRODUCT_URL = 'http://192.168.65.128/products-angular/products';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get(PRODUCT_URL)
      .map((response: Response) => {
        return <IProduct[]>response.json();
      }).catch((response: Response) => {
        return Observable.throw("Error getting products");
      });
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get(PRODUCT_URL + '/' + id)
      .map((response: Response) => {
        return <IProduct>response.json();
      }).catch((response: Response) => {
        return Observable.throw(`Error getting product ${id}`);
      });
  }

  changeRating(idProduct: number, rating: number): Observable<boolean> {
    return this.http.put(PRODUCT_URL + '/rating/' + idProduct, { rating: rating })
      .map((response: Response) => {
        let respObj: { ok: boolean, error?: string } = response.json();
        if (!respObj.ok) Observable.throw(respObj.error);
        return respObj.ok; // It should be always true
      })
      .catch((response: Response) =>
        Observable.throw("Error changing rating!"));
  }

}
