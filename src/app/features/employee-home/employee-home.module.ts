import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeHomeTableComponent } from './components/employee-home-table/employee-home-table.component';
import { EmployeeHomeCardComponent } from './components/employee-home-card/employee-home-card.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmployeeHomeTableComponent,
    EmployeeHomeCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    EmployeeHomeTableComponent,
    EmployeeHomeCardComponent
  ]
})
export class EmployeeHomeModule { }
