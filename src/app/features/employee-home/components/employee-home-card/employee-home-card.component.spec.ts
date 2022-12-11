import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHomeCardComponent } from './employee-home-card.component';

describe('EmployeeHomeCardComponent', () => {
  let component: EmployeeHomeCardComponent;
  let fixture: ComponentFixture<EmployeeHomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHomeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
