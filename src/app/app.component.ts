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


  ngOnInit(){

  }


}





