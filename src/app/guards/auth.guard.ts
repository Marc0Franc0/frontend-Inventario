import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private api: ApiService,private router:Router) {}
  canActivate(): boolean {
    if (!this.api.isAuth()) {
      console.log('token no válido o expirado');
      this.router.navigate([''])
      return false;
    }

    return true;
  }
}
