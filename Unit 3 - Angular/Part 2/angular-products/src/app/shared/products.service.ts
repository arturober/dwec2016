import { IProduct } from './iproduct';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): IProduct[] {
    return [{
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
  }
}
