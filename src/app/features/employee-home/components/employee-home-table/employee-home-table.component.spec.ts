import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHomeTableComponent } from './employee-home-table.component';

describe('EmployeeHomeTableComponent', () => {
  let component: EmployeeHomeTableComponent;
  let fixture: ComponentFixture<EmployeeHomeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHomeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHomeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
