import { TestBed } from '@angular/core/testing';

import { CalciServiceService } from './calci-service.service';

describe('CalciServiceService', () => {
  let service: CalciServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalciServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
