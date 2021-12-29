import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationViewModel: Register;
  records!: Observable<string[]>;
  alert = {type:'',isShowAlert:false, message:''};
  @ViewChild("registrationForm") form !: FormControl;
  constructor(private service: AccountService) { 
    this.registrationViewModel = new Register();
  }

  ngOnInit(): void {
    //const service = new AccountService();
    this.records = this.service.getUserEmails();
  }
  closeAlert() {
    this.alert.isShowAlert = false;
  }
  submitRegistration(): void {
    this.service.saveUserRegistration(this.registrationViewModel)
    .subscribe(item => {
      this.alert.isShowAlert = true;
      this.alert.type = "success";
      this.alert.message = "saved success";
      this.form.reset();
    },
    error => {
      this.alert.isShowAlert = false;
      this.alert.type = "danger";
      this.alert.message = "error occured";
    })
  }
}
