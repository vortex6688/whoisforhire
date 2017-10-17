import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from "../employer/signup/signup.component";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private modalService: NgbModal) {

    window.addEventListener('mouseup', function(event){
      var box = document.querySelector(".main-navigation");
      var button = document.querySelector(".menu-toggle");
      if (event.target != box && event.target != button){
            box.classList.add('collapsed');
        }
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
