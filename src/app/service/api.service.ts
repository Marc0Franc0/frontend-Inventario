import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/entity/Categoria';
import { Producto } from 'src/entity/producto';
import { Marca } from 'src/entity/Marca';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  hostService:string = 'https://backend-inventarioapp-service.onrender.com';
  pathProductos: string = this.hostService+'/api/productos';
  pathCategoria: string = this.hostService+'/api/categorias';
  pathMarcas: string = this.hostService+'/api/marcas';

  public obtenerListaProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.pathProductos + `/obtenertodos`);
  }

  public obtenerListaCategorias( ): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.pathCategoria + `/obtenertodas`

    );
  }

  public obtenerListaMarcas( ): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.pathMarcas + `/obtenertodas`

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

  public crearProducto(producto: Producto):Observable<String> {
    return this.http.post(`${this.pathProductos}/agregarnuevo`,producto,{
      responseType: 'text',
    } );
  }

  public editarProducto(id:number,producto: Producto):Observable<String> {
    return this.http.put(`${this.pathProductos}/editarexistente/`+id ,producto,{
      responseType: 'text',
    } );
  }

}
