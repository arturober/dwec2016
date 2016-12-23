/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FacebookLoadService } from './facebook-load.service';

describe('FacebookLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookLoadService]
    });
  });

  it('should ...', inject([FacebookLoadService], (service: FacebookLoadService) => {
    expect(service).toBeTruthy();
  }));
});
