import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from "./signup/signup.component";

@Component({
  selector: 'employer-component',
  templateUrl: './employer.component.html'
})
export class EmployerComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(SignupComponent);
    modalRef.componentInstance.name = 'Employer Registration Form';
  }
}
