import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

const VALID_EMAIL = '29tatyana04@gmail.com';
const VALID_PASSWORD = '12345677';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        let credentials: any = localStorage.getItem('userInfo');

        if (credentials) {
            credentials = JSON.parse(credentials);
            if (credentials.email !== '' && credentials.password !== '') {
                return true;
            }
        }

        // if (credentials) {
        //     credentials = JSON.parse(credentials);

        //     if (credentials.email === VALID_EMAIL && credentials.password === VALID_PASSWORD) {
        //         return true;
        //     }
        // }

        // this.router.navigate(['login']);
        // alert('You didn\tt sign up!');
        return false;
    }
}
