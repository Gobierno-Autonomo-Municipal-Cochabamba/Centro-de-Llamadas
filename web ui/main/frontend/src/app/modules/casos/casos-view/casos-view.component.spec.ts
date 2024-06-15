import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosViewComponent } from './casos-view.component';

describe('CasosViewComponent', () => {
  let component: CasosViewComponent;
  let fixture: ComponentFixture<CasosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasosViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
