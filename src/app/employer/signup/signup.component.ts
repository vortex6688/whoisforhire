import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private authService: AuthService) {}

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }
}
