import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import { AuthService } from "../auth.service";
import { LoginComponent } from "../login/login.component";


@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  user: Observable<firebase.User>

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private authService: AuthService, private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
    console.log(this.afAuth.authState);
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signup(email, password);
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .catch((err) => console.log(err));
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
      } else {
        console.log('user not logged in', (err) => console.log(err));
      }
    });
  }

  openLogIn() {
    if(this.activeModal) {
      this.activeModal.close();
    }
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'Employer Log In Form';
  }

  logout() {
    this.authService.logout();
  }
}
