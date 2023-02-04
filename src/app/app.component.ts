import { Categoria } from './../entity/Categoria';
import { Router } from '@angular/router';
import { Producto } from './../entity/producto';
import { Component } from '@angular/core';
import { ApiService } from './service/api.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';


/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private api: ApiService, private router: Router) {}
  productos: Producto[] | undefined;
  categorias: Categoria[] | undefined;
producto:Producto={
  "id":0,
  "nombre":"",

  "imagen_url":"",
  "precio":0,
  "cantidad_en_stock":0
}

  ngOnInit() {

  }
   irProductos() {
    this.router.navigate(['productos']);
  }

}





