import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Categoria } from 'src/entity/Categoria';
import { Producto } from 'src/entity/producto';

@Component({
  selector: 'app-teclados',
  templateUrl: './teclados.component.html',
  styleUrls: ['./teclados.component.css']
})
export class TecladosComponent {
  constructor(private api:ApiService){

  }

  categoria: Categoria | undefined;
    listaProductos:Producto[] | undefined;
    ngOnInit(){
      this.api.obtenerCategoria("Teclados").subscribe(rta=>{
        this.categoria=rta;
        console.log(this.categoria);
    this.listaProductos=this.categoria.productos;
    })
        }
        eliminarProducto(id:number){
          this.api.eliminarProducto(id).subscribe(rta=>{
    alert(rta);
    location.reload();

          }
          );

        }
}
