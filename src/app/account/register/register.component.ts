import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationViewModel: Register;
  records!: Observable<string[]>;
  constructor() { 
    this.registrationViewModel = new Register();
    this.records = of(['anil@gmail.com']);
  }

  ngOnInit(): void {
  }

}
