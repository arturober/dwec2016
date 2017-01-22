import { IProduct } from '../../models/product';
import { ProductCommentsPage } from '../product-comments/product-comments';
import { ProductInfoPage } from '../product-info/product-info';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ProductDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {
  productInfo = ProductInfoPage;
  productComments = ProductCommentsPage;
  product: IProduct;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

}
