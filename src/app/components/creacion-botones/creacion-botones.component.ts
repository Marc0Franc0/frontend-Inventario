import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';
import { Categoria } from 'src/entity/Categoria';
import { Marca } from 'src/entity/Marca';
import { Producto } from 'src/entity/producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creacion-botones',
  templateUrl: './creacion-botones.component.html',
  styleUrls: ['./creacion-botones.component.css'],
})
export class CreacionBotonesComponent {
  constructor(private api: ApiService) {}
  //Listas para almacenar todas las categorias,marcas y productos del servidor
  listaCategorias: Categoria[] | undefined;
  listaMarcas: Marca[] | undefined;
  listaProductos: Producto[] | undefined;

  //Siguientes dos variables utilizadas en el select de categoria
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';
  //Siguientes dos variables utilizadas en el select de marca
  MarcaElegida: string = '0';
  verMarcaElegida: string = '';
  //Utilizada para crear un nuevo producto
  producto: Producto = {
    id: 0,
    nombre: '',

    imagen_url: '',
    precio: 0,
    cantidad_en_stock: 0,
    marca: '',
    categoria: '',
  };
  //Utilizada para crear una nueva categoria
  categoriaCrear: Categoria = {
    id: 0,
    nombre: '',
    productos: [],
  };

  //Utilizada para crear una nueva marca
  marcaCrear: Categoria = {
    id: 0,
    nombre: '',
    productos: [],
  };
  ngOnInit() {
    //Inicializo la lista de categorias emitidas en el service
    this.api.disparadorListaMarcas.subscribe(
      (listaMarcas) => (this.listaMarcas = listaMarcas)
    );

    //Inicializo la lista de categorias emitidas en el service
    this.api.disparadorListaCategorias.subscribe(
      (listaCategorias) => (this.listaCategorias = listaCategorias)
    );
  }
  crearMarca() {
    this.api.crearMarca(this.marcaCrear).subscribe(
      (data) => {
        this.api.alertaOK(data);
        setTimeout('document.location.reload()', 2800);
      },
      (error) => this.api.alertaWARNING(error.error)
    );
  }

  crearCategoria() {
    this.api.crearCategoria(this.categoriaCrear).subscribe(
      (data) => {
        this.api.alertaOK(data);
        setTimeout('document.location.reload()', 2800);
      },
      (error) => this.api.alertaWARNING(error.error)
    );
  }

  crearProducto() {
    if (this.producto.nombre.length > 29) {
      this.api.alertaWARNING('Intente con un nombre mas corto');
    } else {
      this.producto.categoria = this.verSeleccion;
      this.producto.marca = this.verMarcaElegida;
      this.api.crearProducto(this.producto).subscribe(
        (data) => {
          this.api.alertaOK(data);
          setTimeout('document.location.reload()', 2800);
        },
        (error) => this.api.alertaWARNING(error.error)
      );
    }
  }

  //Siguientes dos m??todos utilizados para la seleccion de categorias y marcas
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }

  capturarMarca() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verMarcaElegida = this.MarcaElegida;
  }
}
