import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import { AuthService } from "../../auth/auth.service";


@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  providers: [AngularFireAuth]
})
export class SignupComponent implements OnInit {

  user: Observable<firebase.User>

  constructor(public activeModal: NgbActiveModal, private authService: AuthService, private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(function (error){
      alert('${error.message} Please try again')
    })
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .catch(function (error){
      alert('${error.message} Please try again')
    })
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
