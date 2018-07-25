import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service.client';


@Injectable()
export class AuthGuard implements CanActivate {


 constructor(private UserService: UserService, private router: Router) {}

 canActivate() {
   return this.UserService.loggedIn();

 }

}


