import { Component, OnInit } from '@angular/core';
import { ResponseDominio } from '../dominio.model';
import { DominioService } from '../dominio.service';

@Component({
  selector: 'app-lista-dominio',
  templateUrl: './lista-dominio.component.html',
  styleUrls: ['./lista-dominio.component.css']
})
export class ListaDominioComponent implements OnInit {

  responseDominio: ResponseDominio;

  constructor(private dominioService: DominioService) {}

  ngOnInit() {
    this.dominioService.listar()
    .subscribe(res => this.responseDominio = res)

  }
}