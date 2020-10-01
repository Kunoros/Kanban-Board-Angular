import { TestBed } from '@angular/core/testing';

import { BoradService } from './borad.service';

describe('BoradService', () => {
  let service: BoradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
