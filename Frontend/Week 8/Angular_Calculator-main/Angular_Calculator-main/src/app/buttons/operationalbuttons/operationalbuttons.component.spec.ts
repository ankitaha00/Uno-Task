import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalbuttonsComponent } from './operationalbuttons.component';

describe('OperationalbuttonsComponent', () => {
  let component: OperationalbuttonsComponent;
  let fixture: ComponentFixture<OperationalbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalbuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationalbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
