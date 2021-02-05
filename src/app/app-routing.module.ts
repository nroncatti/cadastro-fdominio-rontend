import { NgModule } from '@angular/core';

import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';
import { ListaDominioComponent } from './dominios/lista-dominio/lista-dominio.component';
import { ListaValorComponent } from './dominios/lista-valor/lista-valor.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listadominio'},
  { path: 'listadominio', component: ListaDominioComponent },
  { path: 'listavalor', component: ListaValorComponent },
  //{ path: '**', pathMatch:'full', redirectTo: 'menu' }
];
  
@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }