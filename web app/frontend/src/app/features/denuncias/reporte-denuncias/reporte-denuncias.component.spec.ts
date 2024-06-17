import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDenunciasComponent } from './reporte-denuncias.component';

describe('ReporteDenunciasComponent', () => {
  let component: ReporteDenunciasComponent;
  let fixture: ComponentFixture<ReporteDenunciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteDenunciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
