import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { ComponentsModule } from '../../components/components.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AuthModule { }
