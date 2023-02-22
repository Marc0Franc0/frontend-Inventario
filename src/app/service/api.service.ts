import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { catchError, observable, Observable } from 'rxjs';
import { Categoria } from 'src/entity/Categoria';
import { Producto } from 'src/entity/producto';
import { Marca } from 'src/entity/Marca';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
@Output() disparadorDebtnCatMarc : EventEmitter<string> = new EventEmitter();
@Output() disparadorListaProductos : EventEmitter<Producto[]>= new EventEmitter();
@Output() disparadorListaCategorias :EventEmitter<Categoria[]>=new EventEmitter();
@Output() disparadorListaMarcas :EventEmitter<Marca[]>=new EventEmitter();
  hostService:string = 'https://backend-inventarioapp-service.onrender.com';
  pathProductos: string = this.hostService+'/api/productos';
  pathCategorias: string = this.hostService+'/api/categorias';
  pathMarcas: string = this.hostService+'/api/marcas';
//Alertas
public alertaOK(text:string){
  return Swal.fire({
    position: 'top-end',
    icon: 'success',
    text:text,
    title: 'Hecho',
    showConfirmButton: false,
    timer: 2700

  });

}

public alertaERROR(text:string){
  return Swal.fire({
    position: 'top-end',
    icon: 'error',
    text:text,
    title: 'Hubo un error',
    showConfirmButton: false,
    timer: 2700

  });
}
public alertaWARNING(text:string){
  return Swal.fire({
    position: 'top-end',
    icon: 'warning',
    text:text,
    title: 'Hubo un error',
    showConfirmButton: false,
    timer: 2700

  });
}
  //Consultas al servidor
  public obtenerListaProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.pathProductos + `/obtenertodos`);
  }

  public obtenerListaCategorias( ): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.pathCategorias + `/obtenertodas`

    );
  }

  public obtenerListaMarcas( ): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.pathMarcas + `/obtenertodas`

    );
  }

  public obtenerCategoria(name: string): Observable<Categoria> {
    return this.http.get<Categoria>(this.pathCategorias + `/obtenercategoria`, {
      params: {
        name,
      },
    });
  }
  public obtenerMarca(name: string): Observable<Categoria> {
    return this.http.get<Categoria>(this.pathCategorias + `/obtenercategoria`, {
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

  public crearProducto(producto: Producto):Observable<any> {
    return this.http.post(`${this.pathProductos}/agregarnuevo`,producto,{observe:"response"});
  }

  public editarProducto(id:number,producto: Producto):Observable<String> {
    return this.http.put(`${this.pathProductos}/editarexistente/`+id ,producto,{
      responseType: 'text',
    } );
  }

  public crearCategoria(categoria:Categoria){
return this.http.post(`${this.pathCategorias}/agregarnueva`,categoria,{responseType:'text'});
  }
  public editarCategoria(id:number,categoria: Categoria):Observable<String> {
    return this.http.put(`${this.pathCategorias}/editarexistente/`+id ,categoria,{
      responseType: 'text',
    } );
  }
  public eliminarCategoria(id: number) {
    return this.http.delete(`${this.pathCategorias}/eliminarcategoria/` + id, {
      responseType: 'text',
    });
  }


public crearMarca(marca:Marca){

  return this.http.post(`${this.pathMarcas}/agregarnueva`,marca,{responseType:'text'});
}
public editarMarca(id:number,marca: Marca):Observable<String> {
  return this.http.put(`${this.pathMarcas}/editarexistente/`+id ,marca,{
    responseType: 'text',
  } );
}


}
