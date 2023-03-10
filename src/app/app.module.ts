
import { AppRoutingModule } from './module/app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material-module/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductosComponent } from './components/productos/productos.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JWT_OPTIONS } from '@auth0/angular-jwt';
import { CreacionBotonesComponent } from './components/creacion-botones/creacion-botones.component';
import { FooterComponent } from './components/footer/footer.component';
import { BotonesCategoriasComponent } from './components/botones-categorias/botones-categorias.component';
import { BotonMarcasComponent } from './components/boton-marcas/boton-marcas.component';
import { BotonTodosComponent } from './components/boton-todos/boton-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NavbarComponent,
    HomeComponent,
    CreacionBotonesComponent,
    FooterComponent,
    BotonesCategoriasComponent,
    BotonMarcasComponent,
    BotonTodosComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
AppRoutingModule,
FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
