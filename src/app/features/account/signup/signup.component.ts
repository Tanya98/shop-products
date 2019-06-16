import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from '@goods/core/services/validators.service';
import { SignupService } from '@goods/core/services/signup.service';
import { HttpClient } from '@angular/common/http';
import { User } from '@goods/core/models';

@Component({
  selector: 'goods-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('form') signUpForm: NgForm;

  public userlist;
  public firstName;
  public lastName;
  public email;
  public password;

  constructor(
    private formBilder: FormBuilder,
    private router: Router,
    private valid: ValidatorsService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.userlist = this.formBilder.group({
      firstName: ['', [Validators.required, this.valid.validName, Validators.minLength(3)]],
      lastName: ['', [Validators.required, this.valid.validName, Validators.minLength(3)]],
      email: ['', [Validators.required, this.valid.validEmail]],
      password: ['', [Validators.required]]
    });
  }

  addData(value) {
    const userInfo = JSON.stringify(value);

    const firstName = value.firstName !== '';
    const lastName = value.lastName !== '';
    const email = value.email !== '';
    const password = value.password !== '';

    if (firstName && lastName && email && password) {
      localStorage.setItem('userInfo', userInfo);
      this.router.navigate(['/login']);
    }
  }
}
