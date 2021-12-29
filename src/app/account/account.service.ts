import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

Injectable();
export class AccountService {
    public getUserEmails(): Observable<string[]> {
        return of(["anil@gmail.com"]);
    }
}