import { ProductsService } from '../../providers/products-service';
import { IProduct } from '../../models/product';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ProductInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-info',
  templateUrl: 'product-info.html'
})
export class ProductInfoPage {
  product: IProduct;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public productsService: ProductsService) {
    this.product = navParams.data;
  }

  ionViewDidLoad() {
    this.productsService.getProduct(this.product.id)
      .subscribe(
        product => this.product = product
      );
  }

  goBack() {
    this.navCtrl.parent.parent.pop();
  }

}
