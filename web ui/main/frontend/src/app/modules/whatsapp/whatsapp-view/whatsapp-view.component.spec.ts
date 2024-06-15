import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappViewComponent } from './whatsapp-view.component';

describe('WhatsappViewComponent', () => {
  let component: WhatsappViewComponent;
  let fixture: ComponentFixture<WhatsappViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
