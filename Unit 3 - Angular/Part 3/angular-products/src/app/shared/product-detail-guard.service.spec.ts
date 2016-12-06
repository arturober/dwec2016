/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductDetailGuardService } from './product-detail-guard.service';

describe('Service: ProductDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailGuardService]
    });
  });

  it('should ...', inject([ProductDetailGuardService], (service: ProductDetailGuardService) => {
    expect(service).toBeTruthy();
  }));
});
