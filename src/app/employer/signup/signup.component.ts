import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}
