import { ProductsService } from '../../providers/products-service';
import { IProduct } from '../../models/product';
import { Component } from '@angular/core';
import { Events, NavController, NavParams, ToastController } from 'ionic-angular';

/*
  Generated class for the NewProduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-product',
  templateUrl: 'new-product.html'
})
export class NewProductPage {
  product: IProduct = {
    description: "",
    price: 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toast: ToastController, public productsService: ProductsService,
    public events: Events) { }

  create() {
    this.productsService.createProduct(this.product)
      .subscribe(
      (prod) => {
        this.events.publish('product:created', prod);
        this.navCtrl.pop();
      },
      (error) => this.showToast(3000, error)
      );
  }

  cancel() {
    this.navCtrl.pop();
  }

  private showToast(duration: number, message: string) {
    let toast = this.toast.create({
      duration,
      message
    });
    toast.present();
  }
}
