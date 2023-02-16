

import { HomeComponent } from './../../components/home/home.component';


import { ProductosComponent } from './../../components/productos/productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //Esta ruta es protegida en caso de no existir un token o estar expirado utilizando el guard AuthGuard
    path:'', component:HomeComponent},
  { path: 'productos', component: ProductosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
