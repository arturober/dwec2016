import { ProductsService } from '../services/products.service';
import { NgForm, NgModel } from '@angular/forms/src/directives';
import { IProduct } from '../interfaces/iproduct';
import { CanDeactivateComponent } from '../../shared/can-deactivate-guard.service';
import { CanDeactivateModalComponent } from '../../modals/can-deactivate-modal/can-deactivate-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, CanDeactivateComponent {
  private product: IProduct;
  @ViewChild('productForm') form: NgForm; // Reference #productForm

  constructor(private route: ActivatedRoute,
    private router: Router, private modalService: NgbModal,
    private productService: ProductsService) { }

  ngOnInit() {
    this.product = this.route.snapshot.data['product'];
    this.product.available = this.product.available.toString().substr(0, 10);
  }

  goBack() {
    this.router.navigate(['/products', this.product.id]);
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (this.form.pristine) return true;

    const modalRef = this.modalService.open(CanDeactivateModalComponent);
    modalRef.componentInstance.title = "Edit product"; // @Input() title
    return modalRef.result.then( // Promise<boolean>
      () => true, // .close was called
      () => false // .dismiss was called
    );
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
