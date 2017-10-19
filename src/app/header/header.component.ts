import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from "../employer/signup/signup.component";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private modalService: NgbModal, private router: Router) {

    window.addEventListener('mouseup', function(event){
      var box = document.querySelector(".main-navigation");
      var button = document.querySelector(".menu-toggle");
      if (event.target != box && event.target != button){
            box.classList.add('collapsed');
        }
    });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
  }

  toggleNav() {
    document.querySelector(".main-navigation").classList.toggle('collapsed');
  }

  open() {
    const modalRef = this.modalService.open(SignupComponent);
    modalRef.componentInstance.name = 'Employer Registration Form';
  }
}
