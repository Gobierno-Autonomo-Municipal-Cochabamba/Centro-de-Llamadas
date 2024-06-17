import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteWhatsappComponent } from './reporte-whatsapp.component';

describe('ReporteWhatsappComponent', () => {
  let component: ReporteWhatsappComponent;
  let fixture: ComponentFixture<ReporteWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteWhatsappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
