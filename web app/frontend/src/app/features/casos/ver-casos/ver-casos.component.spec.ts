import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCasosComponent } from './ver-casos.component';

describe('VerCasosComponent', () => {
  let component: VerCasosComponent;
  let fixture: ComponentFixture<VerCasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerCasosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
