import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateDominioComponent } from './dominios/create-dominio/create-dominio.component';
import { CreateValorComponent } from './dominios/create-valor/create-valor.component';
import { ListaValorComponent } from './dominios/lista-valor/lista-valor.component';
import { ListaDominioComponent } from './dominios/lista-dominio/lista-dominio.component';
import { MenuComponent } from './dominios/menu/menu.component';
import { DominioService } from './dominios/dominio.service';
import { AtualizaValorComponent } from './dominios/atualiza-valor/atualiza-valor.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDominioComponent,
    CreateValorComponent,
    ListaValorComponent,
    MenuComponent,
    ListaDominioComponent,
    AtualizaValorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DominioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
