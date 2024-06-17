import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDenunciaComponent } from './registrar-denuncia.component';

describe('RegistrarDenunciaComponent', () => {
  let component: RegistrarDenunciaComponent;
  let fixture: ComponentFixture<RegistrarDenunciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarDenunciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
