import { Component, OnInit } from '@angular/core';
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
  constructor(private service: AccountService) { 
    this.registrationViewModel = new Register();
  }

  ngOnInit(): void {
    //const service = new AccountService();
    this.records = this.service.getUserEmails();
  }
}
