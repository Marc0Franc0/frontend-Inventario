
import { Marca } from './../../../entity/Marca';
import { Observable } from 'rxjs';
import { Categoria } from './../../../entity/Categoria';
import { ApiService } from './../../service/api.service';
import { AfterViewInit,ViewChild, Component, Input } from '@angular/core';
import { Producto } from 'src/entity/producto';
import { Router } from '@angular/router';
import { Credentials } from 'src/entity/Credentials';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent  {

  //Siguientes dos variables utilizadas en el select de categoria
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';
  //Siguientes dos variables utilizadas en el select de marca
  MarcaElegida: string = '0';
  verMarcaElegida: string = '';
  //Listas para almacenar todas las categorias,marcas y productos del servidor
  listaCategorias: Categoria[] | undefined;
  listaMarcas: Marca[] | undefined;
  listaProductos: Producto[] | undefined ;
  //Se utiliza para mapear una sola cateogria y asi obtener la lista de productos de esa categoria mapeada
  categoria: Categoria | undefined;

//Siguientes dos métodos utilizados para la seleccion de categorias y marcas
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }

  capturarMarca() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }

  producto: Producto = {
    id: 0,
    nombre: '',

    imagen_url: '',
    precio: 0,
    cantidad_en_stock: 0,
    marca: '',
    categoria:'',
  };

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
    //Inicializo la lista de productos almacenadas en la base de datos
    this.api.obtenerListaProductos().subscribe(rta => {
    this.listaProductos=rta;
    console.log(rta);
    });


    //Inicializo la lista de categorias almacenadas en la base de datos
    this.api.obtenerListaCategorias().subscribe((rta) => {
      this.listaCategorias = rta;
      console.log(this.listaCategorias);
    });

    //Inicializo la lista de categorias almacenadas en la base de datos
    this.api.obtenerListaMarcas().subscribe((rta) => {
      this.listaMarcas = rta;
      console.log(this.listaMarcas);
    });
  }

  /*  obtenerListaProductos(){
    this.api.obtenerListaProductos().subscribe(rta=>{console.log(rta)});
  }
 */


  //Botones para navegar entre las diferentes categorías
 irAtodos() {
    this.api.obtenerListaProductos().subscribe((rta) => {
      this.listaProductos = rta;
    });
  }

  irProcesadores() {
    this.api.obtenerCategoria('Procesadores').subscribe((rta) => {
      this.categoria = rta;
      console.log(this.categoria);
      this.listaProductos = this.categoria.productos;
    });
  }

  irMemoriasRam() {
    this.api.obtenerCategoria('Memorias ram').subscribe((rta) => {
      this.categoria = rta;
      console.log(this.categoria);
      this.listaProductos = this.categoria.productos;
    });
  }

  irMonitores() {
    this.api.obtenerCategoria('Procesadores').subscribe((rta) => {
      this.categoria = rta;
      console.log(this.categoria);
      this.listaProductos = this.categoria.productos;
    });
  }
  irPlacasDeVideo() {
    this.router.navigate(['Monitores']);
  }

  irTeclados() {
    this.router.navigate(['teclados']);
  }

  eliminarProducto(id: number) {
    this.api.eliminarProducto(id).subscribe((rta) => {
      alert(rta);
      location.reload();
    });
  }

  //Botones para la creacion y edición de un producto
  crearProducto() {
    this.producto.marca = this.verSeleccion;
    this.producto.categoria = this.verMarcaElegida;
    this.api.crearProducto(this.producto).subscribe((data) => {
      alert(data);
      location.reload();
    });
  }
  editarProducto() {
    this.productoEditar.categoria = this.verSeleccion;
    this.productoEditar.marca= this.verMarcaElegida;
    this.api
      .editarProducto(this.productoEditar.id, this.productoEditar)
      .subscribe((data) => {
        alert(data);
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
}
