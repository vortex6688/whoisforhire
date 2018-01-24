import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService} from './auth.service';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.afAuth.authState.map(auth => {
      if(!auth) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    });
  }
}