import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactoComponent } from './componente/contacto/contacto.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { ProductosComponent } from './componente/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    ProductosComponent,
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
