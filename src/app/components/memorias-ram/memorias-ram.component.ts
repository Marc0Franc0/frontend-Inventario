import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';
import { Categoria } from 'src/entity/Categoria';
import { Producto } from 'src/entity/producto';

@Component({
  selector: 'app-memorias-ram',
  templateUrl: './memorias-ram.component.html',
  styleUrls: ['./memorias-ram.component.css']
})
export class MemoriasRamComponent {
  categoria: Categoria | undefined;
  listaProductos:Producto[] | undefined;
  constructor(private api:ApiService){}
  ngOnInit(){
    this.api.obtenerCategoria("Memorias Ram").subscribe(rta=>{
      this.categoria=rta;
      console.log(this.categoria);
  this.listaProductos=this.categoria.productos;
  })
      }
}
