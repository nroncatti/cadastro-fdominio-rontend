import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestCriaValor, ResponseCriaValor, ResponseDominio } from './dominio.model';
import { ResponseValores } from './dominio.model';

@Injectable({
  providedIn: 'root'
})
export class DominioService {

  codigoDominio:number;
  dominiosUrl = '/dominios'

  valoresUrl = '/dominios/v1/'

  url_post_valor = '/dominios/valores'

  constructor(private http: HttpClient) { }

  listar(): Observable<ResponseDominio> {
    return this.http.get<ResponseDominio>(this.dominiosUrl);
  }

  listarValores(codigoDominio:string): Observable<ResponseValores>{
    const _url = `${this.valoresUrl}/${codigoDominio}`;
    return this.http.get<ResponseValores>(_url);
  }

  criarValor(request:RequestCriaValor): Observable<ResponseCriaValor> {
    return this.http.post<ResponseCriaValor>(this.url_post_valor, request)
  }

}
