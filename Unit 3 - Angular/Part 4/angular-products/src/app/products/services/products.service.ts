import { SERVER_URL } from '../../app.constants';
import { IProduct } from '../interfaces/iproduct';
import * as console from 'console';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const PRODUCT_URL = SERVER_URL + '/products';

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

  updateProduct(product: IProduct): Observable<boolean> {
    return this.http.put(PRODUCT_URL + '/' + product.id, product)
      .map((response: Response) => {
        let respObj: { ok: boolean, error?: string } = response.json();
        if (!respObj.ok) throw respObj.error;
        return respObj.ok;
      })
      .catch((response: Response) => Observable.throw(`Error updating product ${product.id}!`));
  }

}
