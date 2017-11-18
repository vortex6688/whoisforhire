import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from "../auth/signup/signup.component";
import { LoginComponent } from "../auth/login/login.component";

@Component({
  selector: 'process-component',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  constructor(private modalService: NgbModal) {}

  openSignUp() {
    const modalRef = this.modalService.open(SignupComponent);
    modalRef.componentInstance.name = 'Employer Registration Form';
  }

    openLogIn() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'Employer Registration Form';
  }
}
