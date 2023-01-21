import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/entity/producto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
pathProductos:string="http://localhost:8080/productos";
pathPersonas:string="http://localhost:8080/personas";
pathCarritos:string="http://localhost:8080/carritos";

 public obtenerListaProductos():Observable<Producto[]>{

return this.http.get<Producto[]>(this.pathProductos+`/obtenertodos`);

  }

}
