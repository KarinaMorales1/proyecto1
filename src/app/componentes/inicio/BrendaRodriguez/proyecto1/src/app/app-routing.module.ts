import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componente/contacto/contacto.component';
import { ProductosComponent } from './componente/productos/productos.component';
import { InicioComponent } from './componente/inicio/inicio.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'productos',component:ProductosComponent},
  {path:'contacto',component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
