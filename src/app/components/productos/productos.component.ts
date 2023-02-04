import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';
import { Producto } from 'src/entity/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
listaProductos:Producto[] | undefined;
producto:Producto={
  "id":0,
  "nombre":"",

  "imagen_url":"",
  "precio":0,
  "cantidad_en_stock":0
}

productoEditar:Producto={
  "id":0,
  "nombre":"",

  "imagen_url":"",
  "precio":0,
  "cantidad_en_stock":0
}


  constructor(private api:ApiService, private router:Router){}

  ngOnInit(){
    this.api.obtenerListaProductos().subscribe(rta=>{this.listaProductos=rta;console.log(this.listaProductos)})
      }



  obtenerListaProductos(){
    this.api.obtenerListaProductos().subscribe(rta=>{console.log(rta)});
  }



irProcesadores(){
  this.router.navigate(['procesadores']);
}

irMemoriasRam(){
this.router.navigate(['memoriasRam']);
}

irMonitores(){
this.router.navigate(['monitores']);
}
irPlacasDeVideo(){
  this.router.navigate(['placasDeVideo']);
  }

  irTeclados(){
    this.router.navigate(['teclados']);
    }

    eliminarProducto(id:number){
      this.api.eliminarProducto(id).subscribe(rta=>{
alert(rta);
location.reload();

      }
      );

    }
    crearProducto(){

      this.api.crearProducto(this.producto).subscribe(
        data => {
          alert(data);
          location.reload();
        })


  }
  editarProducto(){
    this.api.editarProducto(this.productoEditar.id,this.productoEditar).subscribe(
      data => {
        alert(data);
        location.reload();
      })


}
inicializarProducto(productoAlmacenado:Producto){
  this.productoEditar.id=productoAlmacenado.id;
  this.productoEditar.nombre=productoAlmacenado.nombre;
  this.productoEditar.imagen_url=productoAlmacenado.imagen_url;
  this.productoEditar.precio=productoAlmacenado.precio;
  this.productoEditar.cantidad_en_stock=productoAlmacenado.cantidad_en_stock;
}

}
