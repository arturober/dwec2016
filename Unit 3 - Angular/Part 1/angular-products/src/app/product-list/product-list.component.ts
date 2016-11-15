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
    image: 'Image', desc: 'Product',
    price: 'Price', avail: 'Available'
  };

  products: IProduct[] = [{
    id: 1,
    description: 'SSD hard drive',
    available: new Date('2016-10-03'),
    price: 75,
    imageUrl: 'assets/ssd.jpg',
    rating: 5
  }, {
    id: 2,
    description: '500GB hard drive',
    available: new Date('2016-08-30'),
    price: 45.9,
    imageUrl: 'assets/hdd.jpg',
    rating: 3
  }, {
    id: 3,
    description: 'LGA1151 Motherboard',
    available: new Date('2016-09-15'),
    price: 96.95,
    imageUrl: 'assets/motherboard.jpg',
    rating: 4
  }];

  constructor() { }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
  }

}
