import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { ActivatedRoute } from '@angular/router';
import { ResponseValores } from '../dominio.model';
import { DominioService } from '../dominio.service';

@Component({
  selector: 'app-lista-valor',
  templateUrl: './lista-valor.component.html',
  styleUrls: ['./lista-valor.component.css']
})
export class ListaValorComponent implements OnInit {

  responseValores:ResponseValores;
  codigoDominio: string;

  constructor(private dominioService:DominioService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.codigoDominio = this.route.snapshot.paramMap.get('codigoDominio')
    this.dominioService.listarValores(this.codigoDominio)
    .subscribe(res => this.responseValores = res  )
  }

}
