import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddUserComponent } from './components/employee-add-user/employee-add-user.component';
import { EmployeeDetailUserComponent } from './components/employee-detail-user/employee-detail-user.component';
import { EmployeeHomeComponent } from './components/employee-home/employee-home.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeHomeComponent,
  },
  {
    path: 'add-user',
    component: EmployeeAddUserComponent,
  },  {
    path: 'detail-user',
    component: EmployeeDetailUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
