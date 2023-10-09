import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class IsAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem("token")) {
      return true; 
    } else {
      this.router.navigate(['/auth'],{queryParams:{"message":"Yours Are Not Login"}});
      return false;
    }
  }
}