import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaCiudadanaViewComponent } from './bandeja-ciudadana-view.component';

describe('BandejaCiudadanaViewComponent', () => {
  let component: BandejaCiudadanaViewComponent;
  let fixture: ComponentFixture<BandejaCiudadanaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandejaCiudadanaViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandejaCiudadanaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
