import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';
import { Categoria } from 'src/entity/Categoria';
import { Marca } from 'src/entity/Marca';
import { Producto } from 'src/entity/producto';

@Component({
  selector: 'app-creacion-botones',
  templateUrl: './creacion-botones.component.html',
  styleUrls: ['./creacion-botones.component.css']
})
export class CreacionBotonesComponent {
  constructor(private api:ApiService){}
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
ngOnInit(){
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
crearMarca() {
  this.api.crearMarca(this.marcaCrear).subscribe((rta) => {
    alert(rta);
    location.reload();
  });
}


crearCategoria() {
  this.api.crearCategoria(this.categoriaCrear).subscribe((rta) => {
    alert(rta);
    location.reload();
  });
}

crearProducto() {
  this.producto.categoria = this.verSeleccion;
  this.producto.marca = this.verMarcaElegida;
//   console.log("Categoria:",this.verSeleccion);
 // console.log("Marca:",this.verMarcaElegida);
  this.api.crearProducto(this.producto).subscribe((data) => {
    alert(data);
    location.reload();
  });
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

}
