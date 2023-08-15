import { TestBed } from '@angular/core/testing';

import { AppartService } from './appart.service';

describe('AppartService', () => {
  let service: AppartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
