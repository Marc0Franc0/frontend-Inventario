import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
constructor(private api:ApiService,
  public rout:Router,

  ){}

  canActivate(route:ActivatedRouteSnapshot ): boolean {



    return true;
  }

}
