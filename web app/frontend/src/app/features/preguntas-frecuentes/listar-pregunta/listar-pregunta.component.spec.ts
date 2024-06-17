import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPreguntaComponent } from './listar-pregunta.component';

describe('ListarPreguntaComponent', () => {
  let component: ListarPreguntaComponent;
  let fixture: ComponentFixture<ListarPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPreguntaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
