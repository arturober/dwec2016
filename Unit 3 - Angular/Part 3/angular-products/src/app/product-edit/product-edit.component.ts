import { CanDeactivateComponent } from '../shared/can-deactivate-guard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, CanDeactivateComponent {
  private idProd: number;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.idProd = +this.route.snapshot.params['id'];
  }

  goBack() {
    this.router.navigate(['/products', this.idProd]);
  }

  canDeactivate() {
    return confirm("Do you want to leave this page?. Unsaved changes will be lost...");
  }

}
