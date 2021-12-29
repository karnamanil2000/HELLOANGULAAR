import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { CustomFieldValidatorDirective } from './register/custom-field-validator.directive';
import { AlreadyExistsValidatorDirective } from './register/already-exists-validator.directive';
import { AccountService } from './account.service';
//import { AccountService } from './account.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CustomFieldValidatorDirective,
    AlreadyExistsValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
