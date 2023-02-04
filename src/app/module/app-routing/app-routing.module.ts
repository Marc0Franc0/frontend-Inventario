import { TecladosComponent } from './../../components/teclados/teclados.component';
import { PlacasDeVideoComponent } from './../../components/placas-de-video/placas-de-video.component';
import { MonitoresComponent } from './../../components/monitores/monitores.component';
import { MemoriasRamComponent } from './../../components/memorias-ram/memorias-ram.component';
import { ProcesadoresComponent } from './../../components/procesadores/procesadores.component';
import { ProductosComponent } from './../../components/productos/productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent},
  { path: 'procesadores', component: ProcesadoresComponent},
  { path: 'memoriasRam', component: MemoriasRamComponent},
  { path: 'monitores', component: MonitoresComponent},
  { path: 'placasDeVideo', component: PlacasDeVideoComponent},
  { path: 'teclados', component: TecladosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
