import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginComponent } from './../components/login/login.component';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Categoria } from 'src/entity/Categoria';
import { Producto } from 'src/entity/producto';
import { Marca } from 'src/entity/Marca';
import { Credentials } from 'src/entity/Credentials';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) {}
  hostService: string = 'https://backend-inventarioapp-service.onrender.com';
  pathProductos: string = this.hostService + '/productos';
  pathCategoria: string = this.hostService + '/categorias';
  pathMarcas: string = this.hostService + '/marcas';
 username:string ='';
 password:string='';

login(creds:Credentials):any{

    return this.http.post("http://localhost:8080/api/v1/auth/authenticate",creds);
}

isAuth():boolean{
  const token = localStorage.getItem('Token');

  //Se interpeta si el token existe o si esta expirado
  if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('Token')){
    return false;
  }
  return true
}
  public obtenerListaProductos() {

 return this.http.get("http://localhost:8080/api/v1/demo-controller");


  }

  public obtenerListaCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.pathCategoria + `/obtenertodas`);
  }

  public obtenerListaMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.pathMarcas + `/obtenertodas`);
  }

  public obtenerCategoria(name: string): Observable<Categoria> {
    return this.http.get<Categoria>(this.pathCategoria + `/obtenercategoria`, {
      params: {
        name,
      },
    });
  }

  public eliminarProducto(id: number) {
    return this.http.delete(`${this.pathProductos}/eliminarproducto/` + id, {
      responseType: 'text',
    });
  }

  public crearProducto(producto: Producto): Observable<String> {
    return this.http.post(`${this.pathProductos}/agregarnuevo`, producto, {
      responseType: 'text',
    });
  }

  public editarProducto(id: number, producto: Producto): Observable<String> {
    return this.http.put(
      `${this.pathProductos}/editarexistente/` + id,
      producto,
      {
        responseType: 'text',
      }
    );
  }


  getToken(){
    return localStorage.getItem('Token')
  }


}
