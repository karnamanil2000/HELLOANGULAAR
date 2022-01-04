import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AccountService } from '../account.service';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationViewModel: Register;
  $records!: Observable<string[]>;
  userDetails: Register[] = [];
  userEmails!: string[];
  alert = {type:'',isShowAlert:false, message:''};
  @ViewChild("registrationForm") form !: FormControl;
  constructor(private service: AccountService) { 
    this.registrationViewModel = new Register();
  }

  ngOnInit(): void {
    //this.$records = this.service.getUserEmails();
    this.service.getUserDetails()
    .subscribe(data => {
      this.userDetails = data;
      console.log(this.userDetails);
      this.userEmails = new Array(this.userDetails.length);
      for (let index = 0; index < this.userDetails.length; index++) {
        const element = this.userDetails[index];
        this.userEmails[index] = element.email;
      }
      console.log(this.userEmails)
      this.$records = of(this.userEmails);
    });
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
