import { Categoria } from './../../../entity/Categoria';
import { Producto } from './../../../entity/producto';
import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-procesadores',
  templateUrl: './procesadores.component.html',
  styleUrls: ['./procesadores.component.css']
})

export class ProcesadoresComponent {
  categoria: Categoria | undefined;
  listaProductos:Producto[] | undefined;
constructor(private api:ApiService){}

ngOnInit(){
  this.api.obtenerCategoria("Procesadores").subscribe(rta=>{
    this.categoria=rta;
    console.log(this.categoria);
this.listaProductos=this.categoria.productos;
})
    }

}
