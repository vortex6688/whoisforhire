import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from "../auth/signup/signup.component";
import { LoginComponent } from "../auth/login/login.component";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {


  constructor(private modalService: NgbModal, private router: Router) {
  }

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

  isOpen:boolean;

  openNav() {
    document.querySelector(".main-navigation").classList.toggle('collapsed');
  } 
}
