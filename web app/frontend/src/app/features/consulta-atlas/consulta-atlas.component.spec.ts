import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAtlasComponent } from './consulta-atlas.component';

describe('ConsultaAtlasComponent', () => {
  let component: ConsultaAtlasComponent;
  let fixture: ComponentFixture<ConsultaAtlasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaAtlasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaAtlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
