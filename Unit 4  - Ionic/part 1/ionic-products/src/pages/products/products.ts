import { ProductDetailPage } from '../product-detail/product-detail';
import { IProduct } from '../../models/product';
import { ProductsService } from '../../providers/products-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Products page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  products: IProduct[] = [];
  title: string = "Products";
  mine: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public productsService: ProductsService) {  }

  ionViewDidLoad() {
    if(this.navParams.get('showMine')) { // Show my products only
       this.title = "My products";
       this.mine = true;
    }

    let products$; // Variable for the observable
    if(this.mine) {
      products$ = this.productsService.getMyProducts();      
    } else {
      products$ = this.productsService.getProducts();
    }
    
    products$.subscribe(
      (products) => this.products = products
    );
  }

  goDetail(product: IProduct) {
    this.navCtrl.push(ProductDetailPage, product);
  }

}
