import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Categoria } from 'src/entity/Categoria';

@Component({
  selector: 'app-botones-categorias',
  templateUrl: './botones-categorias.component.html',
  styleUrls: ['./botones-categorias.component.css']
})
export class BotonesCategoriasComponent {
  listaCategorias: Categoria[] | undefined;
 //Utilizada para editar una categoria
 categoriaEditar: any = {
  id: 0,
  nombre: '',
  productos: [],
};

//Se utiliza para mapear una sola cateogria y asi obtener la lista de productos de esa categoria mapeada
categoriaNavegar: Categoria | undefined;
  constructor(private api:ApiService){}

  ngOnInit(){

     //Inicializo la lista de categorias almacenadas en la base de datos
     this.api.obtenerListaCategorias().subscribe((listaCategorias) => {
      this.listaCategorias = listaCategorias;
      this.api.disparadorListaCategorias.emit(listaCategorias);
    });
  }
  inicializarCategoria(categoriaAlmacenada: any) {
    this.categoriaEditar.id = categoriaAlmacenada.id;
    this.categoriaEditar.nombre = categoriaAlmacenada.nombre;
    this.categoriaEditar.productos = categoriaAlmacenada.productos;
  }

  irAcategoria(categoria: string) {
    this.api.obtenerCategoria(categoria).subscribe((categoriaNavegar) => {
      this.api.disparadorListaProductos.emit(categoriaNavegar.productos);
    });
  }

  editarCategoria() {
    this.api
      .editarCategoria(this.categoriaEditar.id, this.categoriaEditar)
      .subscribe(
        (data: any) => {
          //alert(data);
          this.api.alertaOK(data);
          setTimeout('document.location.reload()', 2800);
        },
        (error) => this.api.alertaERROR(error.error)
      );
  }
}
