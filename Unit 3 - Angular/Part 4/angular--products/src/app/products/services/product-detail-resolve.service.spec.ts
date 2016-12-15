/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductDetailResolveService } from './product-detail-resolve.service';

describe('Service: ProductDetailResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailResolveService]
    });
  });

  it('should ...', inject([ProductDetailResolveService], (service: ProductDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
