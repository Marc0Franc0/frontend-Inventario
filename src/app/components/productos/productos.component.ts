import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';
import { Producto } from 'src/entity/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
listaProductos:Producto[] | undefined;
  constructor(private api:ApiService){}

  ngOnInit(){
    this.api.obtenerListaProductos().subscribe(rta=>{this.listaProductos=rta;console.log(this.listaProductos)})
      }
  obtenerListaProductos(){
    this.api.obtenerListaProductos().subscribe(rta=>{console.log(rta)});
  }
}
