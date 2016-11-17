import { ProductsService } from '../shared/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/iproduct';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  showImage: boolean = true;
  filterSearch: string = '';

  headers = {
    image: 'Image', description: 'Product',
    price: 'Price', available: 'Available',
    rating: 'Rating'
  };

  products: IProduct[];

  constructor(private productsServ: ProductsService) { }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    this.products = this.productsServ.getProducts();
  }

}
