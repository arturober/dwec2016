import { ProductsService } from '../services/products.service';
import { NgForm, NgModel } from '@angular/forms/src/directives';
import { IProduct } from '../interfaces/iproduct';
import { CanDeactivateComponent } from '../../shared/can-deactivate-guard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, CanDeactivateComponent {
  private product: IProduct;
  @ViewChild('productForm') form: NgForm; // Reference #productForm

  constructor(private route: ActivatedRoute,
    private router: Router, private productService: ProductsService) { }

  ngOnInit() {
    this.product = this.route.snapshot.data['product'];
    this.product.available = this.product.available.toString().substr(0, 10);
  }

  goBack() {
    this.router.navigate(['/products', this.product.id]);
  }

  canDeactivate() {
    if (this.form.pristine) return true; // pristine is the opposite of dirty

    return confirm("Do you want to leave this page?. Unsaved changes will be lost...");
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.dirty && ngModel.valid,
      [errorClass]: ngModel.dirty && ngModel.invalid
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) return;
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.product.imageUrl = reader.result;
    });
  }

  submit() {
    // Other validations, etc... (call return if you want to cancel the submit)
    this.productService.updateProduct(this.product)
      .subscribe(
        ok => {
          this.form.reset(); // Now the form is not dirty and we can leave
          this.router.navigate(["/products", this.product.id])
        },
        error => console.error(error)
      );
  }
}
