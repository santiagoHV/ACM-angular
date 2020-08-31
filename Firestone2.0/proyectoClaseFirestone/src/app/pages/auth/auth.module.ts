import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { ComponentsModule } from '../../components/components.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AccountComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
