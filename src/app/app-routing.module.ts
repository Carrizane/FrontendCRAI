import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorComponent } from './Cruds/autor/autor.component';
import { FormAutorComponent } from './Cruds/autor/form-autor/form-autor.component';
import { LibroComponent } from './Cruds/libro/libro.component';
import { FormLibroComponent } from './Cruds/libro/form-libro/form-libro.component';
import { ClienteComponent } from './Cruds/cliente/cliente.component';
import { FormClienteComponent } from './Cruds/cliente/form-cliente/form-cliente.component';
import { EmpleadoComponent } from './Cruds/empleado/empleado.component';
import { FormEmpleadoComponent } from './Cruds/empleado/form-empleado/form-empleado.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:AutorComponent},
  {path:'autores', component:AutorComponent},
  {path:'autores/form', component:FormAutorComponent},
  {path:'autores/form/:id', component:FormAutorComponent},
  {path:'libros', component:LibroComponent},
  {path:'libros/form', component:FormLibroComponent},
  {path:'libros/form/:id', component:FormLibroComponent},
  {path:'clientes', component:ClienteComponent},
  {path:'clientes/form', component:FormClienteComponent},
  {path:'clientes/form/:id', component:FormClienteComponent},
  {path:'empleados', component:EmpleadoComponent},
  {path:'empleados/form', component:FormEmpleadoComponent},
  {path:'empleados/form/:id', component:FormEmpleadoComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AutorComponent,
  FormAutorComponent,
  LibroComponent,
  FormLibroComponent,
  ClienteComponent,
  FormClienteComponent,
  EmpleadoComponent,
  FormEmpleadoComponent,
  HomeComponent
]
