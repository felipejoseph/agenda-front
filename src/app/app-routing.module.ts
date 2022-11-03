import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  { path:"home",component:HomeComponent },
  { path:"cadastro", component: NovoCadastroComponent},
  { path:"home/editar/:id", component: EditarClienteComponent}

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class AppRoutingModule{}
