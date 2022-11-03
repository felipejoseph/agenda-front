import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListagemService } from './../services/listagem.service';
import { Component, OnInit } from '@angular/core';
import { NovoCadastroComponent } from '../novo-cadastro/novo-cadastro.component';
import { Cliente } from '../models/clientes.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss'],
})
export class EditarClienteComponent implements OnInit {
  constructor(
    private service: ListagemService,
    private Router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  public form!: FormGroup;

  id!: number;
  nomeCliente!: String;
  email!: String;
  endereco!: String;
  bairro!: String;
  complemento!: String;
  cidade!: String;

  updateForm(cliente: any) {
    this.form.patchValue!({
      id: cliente.id,
      nomeCliente: cliente.nomeCliente,
    });
  }

  ngOnInit() {
    this.route.params
      .pipe(
        map((params: any) => params['id']),

        mergeMap((id) => this.service.loadByid(id))
      )
      .subscribe((cliente) => this.updateForm(cliente));

    this.form = this.fb.group({
      id: ['cliente.id'],
      nome: [
        'cliente.nomeCliente',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
    });
  }
}
