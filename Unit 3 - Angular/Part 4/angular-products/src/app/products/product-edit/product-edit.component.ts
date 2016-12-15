import { NgModel } from '@angular/forms/src/directives';
import { IProduct } from '../interfaces/iproduct';
import { CanDeactivateComponent } from '../../shared/can-deactivate-guard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, CanDeactivateComponent {
  private product: IProduct;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.product = this.route.snapshot.data['product'];
    this.product.available = new Date(this.product.available);
  }

  goBack() {
    this.router.navigate(['/products', this.product.id]);
  }

  canDeactivate() {
    return confirm("Do you want to leave this page?. Unsaved changes will be lost...");
  }

  setProductDate(date: string) {
    this.product.available = new Date(date);
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.dirty && ngModel.valid,
      [errorClass]: ngModel.dirty && ngModel.invalid
    };
  }

  getDate(model: NgModel) {
    if (model.valid) return this.product.available.toISOString().slice(0, 16);
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) return;
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.product.imageUrl = reader.result;
    });
  }

}
