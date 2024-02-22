import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericbuttonsComponent } from './numericbuttons.component';

describe('NumericbuttonsComponent', () => {
  let component: NumericbuttonsComponent;
  let fixture: ComponentFixture<NumericbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericbuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
