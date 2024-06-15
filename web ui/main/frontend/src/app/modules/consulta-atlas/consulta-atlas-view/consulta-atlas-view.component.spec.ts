import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAtlasViewComponent } from './consulta-atlas-view.component';

describe('ConsultaAtlasViewComponent', () => {
  let component: ConsultaAtlasViewComponent;
  let fixture: ComponentFixture<ConsultaAtlasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaAtlasViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaAtlasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
