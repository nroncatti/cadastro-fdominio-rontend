import { Component, OnInit } from '@angular/core';
import { RequestCriaDominio } from '../dominio.model';
import { DominioService } from '../dominio.service';

@Component({
  selector: 'app-create-dominio',
  templateUrl: './create-dominio.component.html',
  styleUrls: ['./create-dominio.component.css']
})
export class CreateDominioComponent implements OnInit {

  request: RequestCriaDominio = {

  codigoDominio: null,
	nomeTabelaFisico: '' ,
	nomeLogico: '',
	nomeCodigoFisico: '' ,
	nomeColunaFisco: ''

  }

  constructor(private dominioService:DominioService) { }

  ngOnInit() {
    this.request.nomeColunaFisco = 'nome',
    this.request.nomeCodigoFisico = 'codigo'
    
  }

  salvarDominio() {
    this.dominioService.criarDominio(this.request).subscribe(res => {
          });     
  }

  load() {
    location.reload()
  }

}
