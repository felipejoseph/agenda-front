import { Cliente } from './../models/clientes.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ListagemService } from './../services/listagem.service';
import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, OnInit } from "@angular/core";



@Component({
    selector: 'app-novo-cadastro',
    templateUrl: './novo-cadastro.component.html',
    styleUrls: ['./novo-cadastro.component.scss']
})

export class NovoCadastroComponent implements OnInit {

  @Output() aocadastrar = new EventEmitter<any>();

  constructor(private service: ListagemService, private Router: Router, private route: ActivatedRoute, private fb: FormBuilder){}

  ngOnInit(){

  }


  id!:number;
  nomeCliente!: String;
  email!: String;
  endereco!: String;
  bairro!: String;
  complemento!: String;
  cidade!: String;


  cadastrar(){
    const cadastrado : Cliente = {id:this.id ,nomeCliente:this.nomeCliente,email:this.email,endereco:this.endereco, bairro: this.bairro, complemento:this.complemento,cidade: this.cidade}

    this.service.adicionar(cadastrado).subscribe(resultado => {
      console.log(resultado);

    })
  }


}
