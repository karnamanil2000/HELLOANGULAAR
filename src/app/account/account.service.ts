import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Register } from "./register/register";

@Injectable()
export class AccountService {
    constructor(private httpClient: HttpClient){}
    // public getUserEmails(): Observable<string[]> {
    //     return of(["anil@gmail.com"]);
    // }
    public getUserDetails(): Observable<Register[]>{
        return this.httpClient.get<Register[]>("http://localhost:3000/UserDetails");
    }
    public saveUserRegistration(userForm: Register): Observable<Register>{
        return this.httpClient.post<Register>("http://localhost:3000/UserDetails",userForm);
    }
}