import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosService } from './service/pedidos.service';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { InserirPedidoComponent } from './inserir-pedido/inserir-pedido.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { NgForm } from '@angular/forms';
import { CpfPipe } from '../shared/pipes/cpf.pipe';



@NgModule({
  declarations: [
    ListarPedidosComponent,
    InserirPedidoComponent,
    EditarPedidoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    Shared

    ],
    providers: [
      PedidosService
    ]
})
export class PedidosModule { }
