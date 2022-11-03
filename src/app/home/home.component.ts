import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './../models/clientes.model';
import { ListagemService } from './../services/listagem.service';
import { Component, OnInit, Input} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cadastrar!: any[];



  constructor(private service: ListagemService, private Router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.service.retornaGetLista().subscribe((cadastrar : Cliente[])=>{
      console.table(cadastrar)
      this.cadastrar = cadastrar;
    })


  }
  onEdit(id: any){
    this.Router.navigate(['editar', id], {relativeTo: this.route});

  }


}
