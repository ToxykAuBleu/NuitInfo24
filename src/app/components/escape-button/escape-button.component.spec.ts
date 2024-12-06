import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeButtonComponent } from './escape-button.component';

describe('EscapeButtonComponent', () => {
  let component: EscapeButtonComponent;
  let fixture: ComponentFixture<EscapeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscapeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscapeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
