import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from '@goods/core/services/validators.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'goods-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userlist;
  public email;
  public password;
  public getInfo = localStorage.getItem('userInfo');

  constructor(
    private valid: ValidatorsService,
    private formBilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.userlist = this.formBilder.group({
      email: ['', [Validators.required, this.valid.validEmail]],
      password: ['', [Validators.required, this.valid.validPassword]]
    });

    if (this.getInfo) {
      const userData = JSON.parse(this.getInfo);
      this.email = userData.email;
      this.password = userData.password;
    }
  }

  goToShop() {
      this.router.navigate(['/brezza']);

  }
}
