import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/clientes.model';


@Injectable({
  providedIn: 'root'
})
export class ListagemService {
  private listagem:any[];
  private url = 'http://localhost:8090/home';
  private urleditar = 'http://localhost:8090/home/editar/';


  constructor(private httpClient: HttpClient) {
    this.listagem = [];

  }



  get listagemToda(){
    return this.listagem;
  }

  retornaGetLista(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.url);
  };

  adicionar(listagem: any): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.url, listagem);
  }

  loadByid(id: any): Observable<Cliente>{
    return this.httpClient.get<Cliente>(this.urleditar + id)
  }

  editar(listagem: any): Observable<Cliente>{
    return this.httpClient.put<Cliente>(this.urleditar, listagem)

  }

}
