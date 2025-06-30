import { TestBed } from '@angular/core/testing';

import { BullhornService } from './bullhorn.service';

describe('BullhornService', () => {
  let service: BullhornService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BullhornService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
