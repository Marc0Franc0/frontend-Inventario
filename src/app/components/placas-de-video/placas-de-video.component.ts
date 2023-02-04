import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Categoria } from 'src/entity/Categoria';
import { Producto } from 'src/entity/producto';

@Component({
  selector: 'app-placas-de-video',
  templateUrl: './placas-de-video.component.html',
  styleUrls: ['./placas-de-video.component.css']
})
export class PlacasDeVideoComponent {

constructor(private api:ApiService){

}

categoria: Categoria | undefined;
  listaProductos:Producto[] | undefined;
  ngOnInit(){
    this.api.obtenerCategoria("Placas de video").subscribe(rta=>{
      this.categoria=rta;
      console.log(this.categoria);
  this.listaProductos=this.categoria.productos;
  })
      }
}
