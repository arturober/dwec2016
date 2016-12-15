import { ProductsService } from '../services/products.service';
import { IProduct } from '../interfaces/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productsService: ProductsService) { }

  ngOnInit() {
    this.product = this.route.snapshot.data['product'];
  }
  
  changeRating(rating: number) {
    this.productsService.changeRating(this.product.id, rating)
      .subscribe(
        (resp) => this.product.rating = rating,
        (error) => alert(error)
      );
  }

  goBack() {
    this.router.navigate(['/products']);
  }

  editProduct() {
    this.router.navigate(['/products/edit', this.product.id]);
  }
}
