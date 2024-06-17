import { TestBed } from '@angular/core/testing';

import { ConsultaAtlasService } from './consulta-atlas.service';

describe('ConsultaAtlasService', () => {
  let service: ConsultaAtlasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaAtlasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
