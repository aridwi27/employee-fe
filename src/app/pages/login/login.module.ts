import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFeaturesModule } from 'src/app/features/login/login-features.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginFeaturesModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
