import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    ComponentesComponent,
    ContactoComponent,
    ProductoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
