
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ContactComponent } from '../contact/contact.component';
import { CoursesInterface, MyserviceService } from './myservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate,CanActivateChild,CanDeactivate<ContactComponent> ,Resolve<CoursesInterface[]> {
  
   courses : MyserviceService = inject(MyserviceService)
   constructor() { }
  auth : AuthService = inject(AuthService)  ;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
       return this.auth.IsLogin;
  }
 
   canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.canActivate(childRoute,state)
   }
 
  
    canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
          return component.canExit();
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.courses.getAllCourses();
    }




}
