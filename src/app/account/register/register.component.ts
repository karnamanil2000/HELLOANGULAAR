import { Component, OnInit } from '@angular/core';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationViewModel: Register  = new Register();
  constructor() { }

  ngOnInit(): void {
  }

}
