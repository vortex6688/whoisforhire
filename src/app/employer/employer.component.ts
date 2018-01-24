import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'employer-component',
  templateUrl: './employer.component.html'
})
export class EmployerComponent {
  constructor (private authService: AuthService, private router: Router) {}
}
