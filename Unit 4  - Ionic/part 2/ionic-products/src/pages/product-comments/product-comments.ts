import { IComment } from '../../models/comment';
import { ProductsService } from '../../providers/products-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ProductComments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-comments',
  templateUrl: 'product-comments.html'
})
export class ProductCommentsPage {
  comments: IComment[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public productsService: ProductsService) {
  }

  ionViewDidLoad() {
    this.productsService.getComments(this.navParams.data.id)
      .subscribe(
        comments => this.comments = comments
      );
  }

}
