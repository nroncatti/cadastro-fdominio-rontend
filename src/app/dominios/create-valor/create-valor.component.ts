import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestCriaValor } from '../dominio.model';
import { DominioService } from '../dominio.service';

@Component({
  selector: 'app-create-valor',
  templateUrl: './create-valor.component.html',
  styleUrls: ['./create-valor.component.css']
})
export class CreateValorComponent implements OnInit {

  request: RequestCriaValor = {

    nome: '',
    codigoGenerico: '',
  }

  codigoDominio: string;

  constructor(private dominioService:DominioService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.request.codigoGenerico = this.route.snapshot.paramMap.get('codigoDominio')
     
    
  }
  
  salvarValor() {
    this.dominioService.criarValor(this.request).subscribe(res => {
      this.request = res;
      alert('Registro adicionado com sucesso!')
          });     
  }

  load() {
    location.reload();
    
  }

}

