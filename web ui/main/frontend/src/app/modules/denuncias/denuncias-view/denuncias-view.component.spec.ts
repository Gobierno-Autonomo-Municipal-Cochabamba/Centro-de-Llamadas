import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciasViewComponent } from './denuncias-view.component';

describe('DenunciasViewComponent', () => {
  let component: DenunciasViewComponent;
  let fixture: ComponentFixture<DenunciasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DenunciasViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenunciasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
