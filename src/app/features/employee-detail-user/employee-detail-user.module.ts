import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsEmployeeComponent } from './components/details-employee/details-employee.component';



@NgModule({
  declarations: [
    DetailsEmployeeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailsEmployeeComponent
  ]
})
export class EmployeeDetailUserModule { }
