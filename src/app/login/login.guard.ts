import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService:AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
     let logged = localStorage.getItem("token");

      if (logged) {
        return true;
      }
      this.router.navigate(["login"]);
      return false;
  }
}
