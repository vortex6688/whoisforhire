import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from "../auth/signup/signup.component";
import { LoginComponent } from "../auth/login/login.component";
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;

  constructor(private modalService: NgbModal,
    private router: Router,
    public authService: AuthService,
    private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });

    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/process']);
  }

  toggleNav() {
    document.querySelector(".main-navigation").classList.toggle('collapsed');
      if (document.querySelector(".main-navigation").classList.contains('collapsed') ) {
        document.querySelector("body").classList.remove('overflow-hidden');
      } else {
        document.querySelector("body").classList.add('overflow-hidden');
      }
  }

  openNav() {
    document.querySelector(".main-navigation").classList.toggle('collapsed');
    document.querySelector("body").classList.remove('overflow-hidden');
  } 
}
