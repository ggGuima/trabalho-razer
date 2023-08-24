import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutosModule } from './produtos/produtos.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { PedidosModule } from './pedidos/pedidos.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    ProdutosModule,
    NgSelectModule,
    PedidosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
