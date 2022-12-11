import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddUserComponent } from './employee-add-user.component';

describe('EmployeeAddUserComponent', () => {
  let component: EmployeeAddUserComponent;
  let fixture: ComponentFixture<EmployeeAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
