import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseDominio } from './dominio.model';

@Injectable({
  providedIn: 'root'
})
export class DominioService {

  dominiosUrl = '/dominios'

  constructor(private http: HttpClient) { }

  listar(): Observable<ResponseDominio> {
    return this.http.get<ResponseDominio>(this.dominiosUrl);
  }
}
