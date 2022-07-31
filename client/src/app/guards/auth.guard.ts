import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "../services/user.service";

@Injectable()
export class AuthGuard implements CanActivate{
  isAuth: any = {}
  constructor(private user: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    this.user.isUser.subscribe((value: any) => this.isAuth = value)

    if (this.isAuth.role === 'ADMIN') {
      return true
    }

    return false
  }
}
