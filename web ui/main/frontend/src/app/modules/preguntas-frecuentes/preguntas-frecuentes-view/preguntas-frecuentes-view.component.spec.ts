import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasFrecuentesViewComponent } from './preguntas-frecuentes-view.component';

describe('PreguntasFrecuentesViewComponent', () => {
  let component: PreguntasFrecuentesViewComponent;
  let fixture: ComponentFixture<PreguntasFrecuentesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntasFrecuentesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasFrecuentesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
