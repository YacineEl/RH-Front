import { TestBed } from '@angular/core/testing';

import { BulletinPaieService } from './bulletin-paie.service';

describe('BulletinPaieService', () => {
  let service: BulletinPaieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulletinPaieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
