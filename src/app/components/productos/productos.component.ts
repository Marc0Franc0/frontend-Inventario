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


  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.disparadorListaProductos.subscribe((listaProductos) => {
      this.listaProductos = listaProductos;
    });
    //Inicializo la lista de categorias emitidas en el servicio
    this.api.disparadorListaCategorias.subscribe(
      (listaCategorias)=> this.listaCategorias = listaCategorias
    )

    //Inicializo la lista de marcas almacenadas emitidas en el servicio
    this.api.disparadorListaMarcas.subscribe(
      (listaMarcas) => this.listaMarcas = listaMarcas
    );

    if (this.listaProductos?.length != 0) {
      //Inicializo la lista de productos almacenadas en la base de datos
      this.api.obtenerListaProductos().subscribe((rta) => {
        this.listaProductos = rta;
        console.log(rta);
      });
    }
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

  //Metodos para la creacion , edición y eliminacion de un producto

  editarProducto() {
    this.productoEditar.categoria = this.verSeleccion;
    this.productoEditar.marca = this.verMarcaElegida;
    this.api
      .editarProducto(this.productoEditar.id, this.productoEditar)
      .subscribe(
        (data: any) => {
          this.api.alertaOK(data);
          setTimeout('document.location.reload()', 2800);
        },
        (error) => this.api.alertaERROR(error.error)
      );
  }
  eliminarProducto(id: number) {
    this.api.eliminarProducto(id).subscribe((data: any) => {
      this.api.alertaOK(data);
      setTimeout('document.location.reload()', 2800);
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

  //Botones para la edicion y eliminacion de una categoría

  eliminarCategoria(id: number) {
    this.api.eliminarCategoria(id).subscribe((rta) => {
      alert(rta);
      location.reload();
    });
  }




}
