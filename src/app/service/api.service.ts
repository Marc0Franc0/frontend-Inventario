import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/entity/Categoria';
import { Producto } from 'src/entity/producto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  hostService:string = 'https://backend-inventarioapp-service.onrender.com';
  pathProductos: string = this.hostService+'/productos';
  pathPersonas: string = this.hostService+'/personas';
  pathCarritos: string = this.hostService+'/carritos';
  pathCategoria: string = this.hostService+'/categorias';

  public obtenerListaProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.pathProductos + `/obtenertodos`);
  }

  public obtenerListaCategorias( ): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.pathCategoria + `/obtenertodas`

    );
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

  public crearProducto(producto: Producto, categoria:string):Observable<String> {
    return this.http.post(`${this.pathProductos}/agregarnuevo/`+categoria, producto,{
      responseType: 'text',
    } );
  }

  public editarProducto(id:number,producto: Producto,cat:string):Observable<String> {
    return this.http.put(`${this.pathProductos}/editarexistente/`+id+"/"+cat, producto,{
      responseType: 'text',
    } );
  }

}
