import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    NovoCadastroComponent,
    HomeComponent,
    EditarClienteComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
