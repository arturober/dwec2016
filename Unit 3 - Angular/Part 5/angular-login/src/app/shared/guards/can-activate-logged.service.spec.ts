/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanActivateLoggedService } from './can-activate-logged.service';

describe('CanActivateLoggedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateLoggedService]
    });
  });

  it('should ...', inject([CanActivateLoggedService], (service: CanActivateLoggedService) => {
    expect(service).toBeTruthy();
  }));
});
