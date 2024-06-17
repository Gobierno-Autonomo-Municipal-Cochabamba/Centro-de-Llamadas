import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaCiudadanaComponent } from './bandeja-ciudadana.component';

describe('BandejaCiudadanaComponent', () => {
  let component: BandejaCiudadanaComponent;
  let fixture: ComponentFixture<BandejaCiudadanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandejaCiudadanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandejaCiudadanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
