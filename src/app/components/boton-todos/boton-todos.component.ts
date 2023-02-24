import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Producto } from 'src/entity/producto';

@Component({
  selector: 'app-boton-todos',
  templateUrl: './boton-todos.component.html',
  styleUrls: ['./boton-todos.component.css']
})
export class BotonTodosComponent {
  listaProductos: Producto[] | undefined;
constructor(private api:ApiService){}

  //Métodos para navegar entre las diferentes categorías
  irAtodos() {
    this.api.obtenerListaProductos().subscribe((listaProductosDB) => {
      this.api.disparadorListaProductos.emit(listaProductosDB);

    });
  }

}
