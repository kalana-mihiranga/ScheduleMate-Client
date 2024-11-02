import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { CommonService } from '../page/common/common.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private commonService: CommonService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.commonService.getItem("ROLE");

    const allowedRoles = route.data['roles'] as Array<string>;

    if (userRole && allowedRoles.includes(userRole)) {
      return true;
    }

    this.router.navigate(['/notAuth']);
    return false;
  }
}
