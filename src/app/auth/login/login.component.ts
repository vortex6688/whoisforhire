import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AuthService } from "../../auth/auth.service";
import { SignupComponent } from "../signup/signup.component";


@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit{

  email: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService, private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.router.navigate(['/employer']);
      }
    });
  }

  onSubmitLogin() {
    this.authService.login(this.email, this.password)
      .then(res => {
        this.router.navigate(['/employer']);
      })
      .catch(err => {
        this.errorMessage = err.message;
        console.log(err);
      });
  }

  logout() {
    this.authService.logout();
  }
}
