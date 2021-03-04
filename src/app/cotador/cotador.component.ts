import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseValores } from '../dominios/dominio.model';
import { DominioService } from '../dominios/dominio.service';

@Component({
  selector: 'app-cotador',
  templateUrl: './cotador.component.html',
  styleUrls: ['./cotador.component.css']
})
export class CotadorComponent implements OnInit {

  responseValores:ResponseValores;
  codigoDominio: string;

  constructor(private dominioService:DominioService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.codigoDominio = '1'
    this.dominioService.listarValores(this.codigoDominio)
    .subscribe(res => this.responseValores = res  )
    
  }

}
