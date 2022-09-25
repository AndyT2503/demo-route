import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate, CanActivateChild, CanLoad {

  callApi() {
    return of(false);
  }
  constructor(private router: Router){}
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.callApi().pipe(map(x => {
      return x
    }));
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.callApi().pipe(map(x => {
      return x
    }));
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Observable<boolean | UrlTree> {

    return this.callApi().pipe(map(x => {
      if (x) {
        return x;
      } else {
        return this.router.createUrlTree(['home'])
      }
    }));
  }

}
