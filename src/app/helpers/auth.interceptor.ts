import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private api:ApiService) {}

  /*Se consutla si el token existe para analizar con un condicional la situacion de existencia o no.
  En caso de existir se agrega en todas las peticiones http al servidor un header de autorizacion con el token
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


const token = this.api.getToken();

if(token){

  const cloned = request.clone({
headers: request.headers.set('Authorization',`Bearer ${token}`)
  })
  return next.handle(cloned);
}

    return next.handle(request);
  }
}
