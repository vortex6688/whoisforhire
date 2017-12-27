import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AuthService } from "../../auth/auth.service";
import { SignupComponent } from "../signup/signup.component";


@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  providers: [AngularFireAuth]
})
export class LoginComponent {

  user: Observable<firebase.User>

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private authService: AuthService, private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.authState;
  }

  onLogIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password);
  }
/*
  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(function (error){
      console.log('${error.message} Please try again');
    })
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .catch(function (error){
      console.log('${error.message} Please try again');
    })
  }
*/
  openSignUp() {
    if(this.activeModal) {
      this.activeModal.close();
    }
    const modalRef = this.modalService.open(SignupComponent);
    modalRef.componentInstance.name = 'Employer Sign Up Form';
  }

  logout() {
    this.authService.logout();
  }
}
