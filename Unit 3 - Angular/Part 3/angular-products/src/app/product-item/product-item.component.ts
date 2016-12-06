import { ProductsService } from '../shared/products.service';
import { IProduct } from '../shared/iproduct';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: IProduct;
  @Input() showImage: boolean;

  constructor(private productsServ: ProductsService) { }

  changeRating(rating: number) {
    this.productsServ.changeRating(this.product.id, rating)
      .subscribe(
        (resp) => this.product.rating = rating,
        (error) => alert(error)
      );
  }

  ngOnInit() {
  }

}
