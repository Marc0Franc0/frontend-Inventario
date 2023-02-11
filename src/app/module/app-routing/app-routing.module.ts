import { HomeComponent } from './../../components/home/home.component';
import { LoginComponent } from './../../components/login/login.component';

import { ProductosComponent } from './../../components/productos/productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
