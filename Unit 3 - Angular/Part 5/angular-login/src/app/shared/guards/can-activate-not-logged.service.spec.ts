/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanActivateNotLoggedService } from './can-activate-not-logged.service';

describe('CanActivateNotLoggedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateNotLoggedService]
    });
  });

  it('should ...', inject([CanActivateNotLoggedService], (service: CanActivateNotLoggedService) => {
    expect(service).toBeTruthy();
  }));
});
