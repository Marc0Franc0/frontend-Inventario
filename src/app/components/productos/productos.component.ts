import { Marca } from './../../../entity/Marca';
import { Observable } from 'rxjs';
import { Categoria } from './../../../entity/Categoria';
import { ApiService } from './../../service/api.service';
import { AfterViewInit, ViewChild, Component, Input } from '@angular/core';
import { Producto } from 'src/entity/producto';
import { Router } from '@angular/router';
import { Credentials } from 'src/entity/Credentials';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {

    //Listas para almacenar todas las categorias,marcas y productos del servidor
     listaProductos: Producto[] | undefined;
     listaCategorias: Categoria[] | undefined;
     listaMarcas: Marca[] | undefined;
  //Siguientes dos variables utilizadas en el select de categoria
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';
  //Siguientes dos variables utilizadas en el select de marca
  MarcaElegida: string = '0';
  verMarcaElegida: string = '';
//Utilizada para editar un producto
  productoEditar: Producto = {
    id: 0,
    nombre: '',

    imagen_url: '',
    precio: 0,
    cantidad_en_stock: 0,
    marca: '',
    categoria: '',
  };
   //Utilizada para editar una categoria
   categoriaEditar: any = {
    id: 0,
    nombre: '',
   productos:[]
  };
    //Utilizada para editar una marca
  marcaEditar: any = {
      id: 0,
      nombre: '',
     productos:[]
    };
//Se utiliza para mapear una sola cateogria y asi obtener la lista de productos de esa categoria mapeada
categoriaNavegar: Categoria | undefined;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    //Inicializo la lista de productos almacenadas en la base de datos
    this.api.obtenerListaProductos().subscribe((rta) => {
      this.listaProductos = rta;
      console.log(rta);
    });
        //Inicializo la lista de categorias almacenadas en la base de datos
        this.api.obtenerListaCategorias().subscribe((rta) => {
          this.listaCategorias = rta;
          console.log(this.listaCategorias);
          this.api.disparadorListaCategorias.emit(rta);
        });

    //Inicializo la lista de categorias almacenadas en la base de datos
    this.api.obtenerListaMarcas().subscribe((rta) => {
      this.listaMarcas = rta;
      console.log(this.listaMarcas);
      this.api.disparadorListaMarcas.emit(rta);
    },error=>Swal.fire('No hay conexión a internet', error.error, 'error'));




  }

  //Siguientes dos métodos utilizados para la seleccion de categorias y marcas
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }

  capturarMarca() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verMarcaElegida = this.MarcaElegida;
  }


  //Métodos para navegar entre las diferentes categorías
  irAtodos() {
    this.api.obtenerListaProductos().subscribe((rta) => {
      this.listaProductos = rta;
    });
  }

  //Metodos para la creacion , edición y eliminacion de un producto

  editarProducto() {
    this.productoEditar.categoria = this.verSeleccion;
    this.productoEditar.marca = this.verMarcaElegida;
    this.api
      .editarProducto(this.productoEditar.id, this.productoEditar)
      .subscribe((data:any) => {
        Swal.fire('Hecho', data, 'success');
        location.reload();
      },error=>Swal.fire('Hubo un error', error.error, 'error'));
  }
  eliminarProducto(id: number) {
    this.api.eliminarProducto(id).subscribe((rta) => {
      alert(rta);
      location.reload();
    });
  }
  /*Metodo para darle valor al producto que se utiliza en el formulario para editar, los valores son los que tiene
  el producto seleccionado para editar
  */
  inicializarProducto(productoAlmacenado: Producto) {
    this.productoEditar.id = productoAlmacenado.id;
    this.productoEditar.nombre = productoAlmacenado.nombre;
    this.productoEditar.imagen_url = productoAlmacenado.imagen_url;
    this.productoEditar.precio = productoAlmacenado.precio;
    this.productoEditar.cantidad_en_stock =
      productoAlmacenado.cantidad_en_stock;
    this.productoEditar.marca = productoAlmacenado.marca;
    this.productoEditar.categoria = productoAlmacenado.categoria;
  }


  mostrarBotones(eleccion:string){
this.api.disparadorDebtnCatMarc.emit(eleccion);
this.api.disparadorListaProductos.subscribe(data=>{

  this.listaProductos=data;

});
  }

  //Botones para la edicion y eliminacion de una categoría

  eliminarCategoria(id: number) {

    this.api.eliminarCategoria(id).subscribe((rta) => {
      alert(rta);
      location.reload();
    });
  }


editarCategoria() {
  this.api
    .editarCategoria(this.categoriaEditar.id, this.categoriaEditar)
    .subscribe((data:any) => {
      //alert(data);
      Swal.fire('Hecho', data, 'success');
      //location.reload();
    },error=>Swal.fire('Hubo un error', error.error, 'error'));

}

inicializarCategoria (categoriaAlmacenada:any){

this.categoriaEditar.id = categoriaAlmacenada.id;
  this.categoriaEditar.nombre = categoriaAlmacenada.nombre;
this.categoriaEditar.productos = categoriaAlmacenada.productos;
}

inicializarMarca(marcaAlmacenada:Marca){
this.marcaEditar.id= marcaAlmacenada.id;
this.marcaEditar.nombre=marcaAlmacenada.nombre;
this.marcaEditar.productos=marcaAlmacenada.productos;
}

irAcategoria(categoriaMarca: string) {



  this.api.obtenerCategoria(categoriaMarca).subscribe((rta) => {
    this.categoriaNavegar = rta;
    this.listaProductos = this.categoriaNavegar.productos;
  });


}


editarMarca(){
  this.api
    .editarMarca(this.marcaEditar.id, this.marcaEditar)
    .subscribe((data:any) => {

      Swal.fire('Hecho', data, 'success');

      location.reload();
    },error=>Swal.fire('Hubo un error', error.error, 'error'));

}
}
