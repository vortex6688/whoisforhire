import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AuthService } from "../auth.service";
import { LoginComponent } from "../login/login.component";


@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;

  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.router.navigate(['/employer']);
      }
    });
  }

  onSubmitSignup() {
    this.authService.register(this.email, this.password)
      .then(res => {
        this.router.navigate(['/']);
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
