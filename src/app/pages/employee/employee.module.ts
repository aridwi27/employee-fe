import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeHomeComponent } from './components/employee-home/employee-home.component';
import { EmployeeAddUserComponent } from './components/employee-add-user/employee-add-user.component';
import { EmployeeDetailUserComponent } from './components/employee-detail-user/employee-detail-user.component';
import { EmployeeHomeModule } from 'src/app/features/employee-home/employee-home.module';
import { EmployeeAddUserModule } from 'src/app/features/employee-add-user/employee-add-user.module';


@NgModule({
  declarations: [
    EmployeeHomeComponent,
    EmployeeAddUserComponent,
    EmployeeDetailUserComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    EmployeeHomeModule,
    EmployeeAddUserModule
  ]
})
export class EmployeeModule { }
