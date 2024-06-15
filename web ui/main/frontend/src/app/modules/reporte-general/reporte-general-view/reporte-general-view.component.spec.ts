import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteGeneralViewComponent } from './reporte-general-view.component';

describe('ReporteGeneralViewComponent', () => {
  let component: ReporteGeneralViewComponent;
  let fixture: ComponentFixture<ReporteGeneralViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteGeneralViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteGeneralViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
