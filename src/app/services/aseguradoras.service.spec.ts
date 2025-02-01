import { TestBed } from '@angular/core/testing';

import { AsegudarorasService } from './aseguradoras.service';

describe('AsegudarorasService', () => {
  let service: AsegudarorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsegudarorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
