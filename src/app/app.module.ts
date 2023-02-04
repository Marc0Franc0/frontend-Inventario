import { AppRoutingModule } from './module/app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material-module/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './components/productos/productos.component';
import { ProcesadoresComponent } from './components/procesadores/procesadores.component';
import { MemoriasRamComponent } from './components/memorias-ram/memorias-ram.component';
import { MonitoresComponent } from './components/monitores/monitores.component';
import { PlacasDeVideoComponent } from './components/placas-de-video/placas-de-video.component';
import { TecladosComponent } from './components/teclados/teclados.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProcesadoresComponent,
    MemoriasRamComponent,
    MonitoresComponent,
    PlacasDeVideoComponent,
    TecladosComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
AppRoutingModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
