import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkPatternComponent } from './dark-pattern.component';

describe('DarkPatternComponent', () => {
  let component: DarkPatternComponent;
  let fixture: ComponentFixture<DarkPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
