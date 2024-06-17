import { TestBed } from '@angular/core/testing';

import { BandejaCiudadanaService } from './bandeja-ciudadana.service';

describe('BandejaCiudadanaService', () => {
  let service: BandejaCiudadanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandejaCiudadanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
