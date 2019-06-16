import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { RequestOptions, Headers } from '@angular/http';

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

@Injectable({
    providedIn: 'root'
})
export class SignupService {
    private url = 'http://localhost:3012/users';

    constructor(private http: HttpClient) { }

    setUser(user: User) {
        debugger;
        // const userValue = JSON.stringify(user);
        return this.http.post(this.url, user, {});
    }

    getUser() {
        return this.http.get(`${this.url}`);
    }
}