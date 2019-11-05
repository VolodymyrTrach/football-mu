import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminPageActivateGuard {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userType = sessionStorage.getItem('userType');
    if (userType === '1') {
      return true;
    } else {
      return false;
    }
  }
}

