import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


export interface IAuthGuard {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable({
  providedIn: 'root'
})
 
export class AuthGuard implements CanActivate, IAuthGuard {

  constructor(private authService: AuthService, private router: Router, private authAuth: AngularFireAuth) {}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isLoggedIn ) {
       
        return true;
      } else {
      this.router.navigate(['pagina-principala']);
      return false;
    }
    }
  }
  
  