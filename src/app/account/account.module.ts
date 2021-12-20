import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { CustomFieldValidatorDirective } from './register/custom-field-validator.directive';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CustomFieldValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AccountModule { }
