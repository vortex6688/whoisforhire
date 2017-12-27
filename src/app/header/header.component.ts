import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from "../auth/signup/signup.component";
import { LoginComponent } from "../auth/login/login.component";
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal, private router: Router, public authService: AuthService, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
  }

  openSignUp() {
    const modalRef = this.modalService.open(SignupComponent);
    modalRef.componentInstance.name = 'Employer Registration Form';
  }

  openLogIn() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'Employer Registration Form';
  }

  logout() {
    this.authService.logout();
  }

  openNav() {
    document.querySelector(".main-navigation").classList.toggle('collapsed');
    document.querySelector("body").classList.toggle('overflow-hidden');
  } 
}
