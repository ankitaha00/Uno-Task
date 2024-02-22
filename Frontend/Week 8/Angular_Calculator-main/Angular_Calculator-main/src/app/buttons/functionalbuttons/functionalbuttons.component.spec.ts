import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalbuttonsComponent } from './functionalbuttons.component';

describe('FunctionalbuttonsComponent', () => {
  let component: FunctionalbuttonsComponent;
  let fixture: ComponentFixture<FunctionalbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalbuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
