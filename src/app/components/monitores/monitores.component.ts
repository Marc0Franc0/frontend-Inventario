import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Categoria } from 'src/entity/Categoria';
import { Producto } from 'src/entity/producto';

@Component({
  selector: 'app-monitores',
  templateUrl: './monitores.component.html',
  styleUrls: ['./monitores.component.css']
})
export class MonitoresComponent {
  categoria: Categoria | undefined;
  listaProductos:Producto[] | undefined;
  constructor(private api:ApiService){}
  ngOnInit(){
    this.api.obtenerCategoria("Monitores").subscribe(rta=>{
      this.categoria=rta;
      console.log(this.categoria);
  this.listaProductos=this.categoria.productos;
  })
      }
}
