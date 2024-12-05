import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterShifterComponent } from './letter-shifter.component';

describe('LetterShifterComponent', () => {
  let component: LetterShifterComponent;
  let fixture: ComponentFixture<LetterShifterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterShifterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterShifterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
