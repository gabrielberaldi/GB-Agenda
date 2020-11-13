import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { FirebaseAuthService } from '../services/firebase-auth.service'
import { OverlayService } from '../services/overlay.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private authService: FirebaseAuthService, 
    private router: Router,
    private overlayService: OverlayService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean>{
    return this.checkAuthState(state.url);
  }
  
  canActivateChild(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.canActivate(route, state);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    const url = segments.map(s => `/${s}`).join('');
    return this.checkAuthState(url).pipe(take(1));
  }

  private checkAuthState(redirect: string): Observable<boolean>{
    return this.authService.isAuthenticated.pipe(
      tap(is => {
        if(!is) {
          this.router.navigate(['/sign-in'], { 
            queryParams: { redirect }
          })
          .then(res => {
            this.overlayService.toast({
              message: 'Faça login primeiro!'
            })
          })
        }
      })
    )
  }

}
