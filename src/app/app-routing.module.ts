import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductoComponent } from './componentes/producto/producto.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"producto",component:ProductoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
