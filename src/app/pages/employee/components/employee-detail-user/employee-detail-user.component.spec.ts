import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailUserComponent } from './employee-detail-user.component';

describe('EmployeeDetailUserComponent', () => {
  let component: EmployeeDetailUserComponent;
  let fixture: ComponentFixture<EmployeeDetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
