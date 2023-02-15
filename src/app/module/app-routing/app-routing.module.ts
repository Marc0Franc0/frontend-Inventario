
import { AuthGuard } from './../../guards/auth.guard';
import { HomeComponent } from './../../components/home/home.component';
import { LoginComponent } from './../../components/login/login.component';

import { ProductosComponent } from './../../components/productos/productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //Esta ruta es protegida en caso de no existir un token o estar expirado utilizando el guard AuthGuard
    path:'home', component:HomeComponent,canActivate:[AuthGuard]},
  { path: 'productos', component: ProductosComponent},
  { path: '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
