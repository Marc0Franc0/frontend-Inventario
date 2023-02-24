import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Marca } from 'src/entity/Marca';

@Component({
  selector: 'app-boton-marcas',
  templateUrl: './boton-marcas.component.html',
  styleUrls: ['./boton-marcas.component.css']
})
export class BotonMarcasComponent {

  listaMarcas: Marca[] | undefined;

  //Utilizada para editar una marca
  marcaEditar: any = {
    id: 0,
    nombre: '',
   productos:[]
  };
  constructor(private api:ApiService){}

  editarMarca(){
    this.api
      .editarMarca(this.marcaEditar.id, this.marcaEditar)
      .subscribe((data:any) => {

        this.api.alertaOK(data);
        setTimeout('document.location.reload()',2800);
      },error=>{this.api.alertaERROR(error.error);console.log(error)});

  }

ngOnInit(){

    //Inicializo la lista de categorias almacenadas en la base de datos
    this.api.obtenerListaMarcas().subscribe((listaMarcasBD) => {
      this.listaMarcas=listaMarcasBD;
      this.api.disparadorListaMarcas.emit(listaMarcasBD);
    },error=>this.api.alertaERROR(error.error));

}


inicializarMarca(marcaAlmacenada:Marca){
  this.marcaEditar.id= marcaAlmacenada.id;
  this.marcaEditar.nombre=marcaAlmacenada.nombre;
  this.marcaEditar.productos=marcaAlmacenada.productos;
  }
}
