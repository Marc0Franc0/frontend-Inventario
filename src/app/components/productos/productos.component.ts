import { Observable } from 'rxjs';
import { Categoria } from './../../../entity/Categoria';
import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';
import { Producto } from 'src/entity/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  listaProductos: Producto[] | undefined;
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';
  listaCategorias: Categoria[] | undefined;
  categoria: Categoria = {
    id: 0,
    nombre: '',
    productos: [],
  };
  categoriaAbuscar: Categoria | undefined;
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion

    this.verSeleccion = this.opcionSeleccionado;
  }

  capturar2() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }

  producto: Producto = {
    id: 0,
    nombre: '',

    imagen_url: '',
    precio: 0,
    cantidad_en_stock: 0,
  };

  encontrarProductoaEditar() {}
  productoEditar: Producto = {
    id: 0,
    nombre: '',

    imagen_url: '',
    precio: 0,
    cantidad_en_stock: 0,
  };

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {

this.api.obtenerListaProductos().subscribe((rta)=>this.listaProductos=rta);

    //Inicializo la lista de categorias almacenadas en la base de datos
    this.api.obtenerListaCategorias().subscribe((rta) => {
      this.listaCategorias = rta;
      console.log(this.listaCategorias);
    });
  }

  /*  obtenerListaProductos(){
    this.api.obtenerListaProductos().subscribe(rta=>{console.log(rta)});
  }
 */

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
  crearProducto() {
    this.api
      .crearProducto(this.producto, this.verSeleccion)
      .subscribe((data) => {
        alert(data);
        location.reload();
      });
  }
  editarProducto() {
    this.api
      .editarProducto(this.productoEditar.id, this.productoEditar, this.verSeleccion)
      .subscribe((data) => {
        alert(data);
        location.reload();
      });
  }
  inicializarProducto(productoAlmacenado: Producto) {
    this.productoEditar.id = productoAlmacenado.id;
    this.productoEditar.nombre = productoAlmacenado.nombre;
    this.productoEditar.imagen_url = productoAlmacenado.imagen_url;
    this.productoEditar.precio = productoAlmacenado.precio;
    this.productoEditar.cantidad_en_stock =
      productoAlmacenado.cantidad_en_stock;
  }
}
