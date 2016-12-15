import { ProductsService } from '../services/products.service';
import { IProduct } from '../interfaces/iproduct';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

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

  products: IProduct[] = [];

  constructor(private productsServ: ProductsService,
              private titleService: Title) { }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    this.titleService.setTitle("Products list | Angular products");
    this.productsServ.getProducts()
      .subscribe(
        (products) => this.products = products, // OK
        (error) => alert(error), // Error
        () => console.log("Products loaded, or not...")
      );
  }

}
