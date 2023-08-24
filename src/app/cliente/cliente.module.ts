import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './service/cliente.service';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirClienteComponent } from './inserir-cliente/inserir-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { NumericoDirective } from '../shared/directives/numerico.directive';
import { NgxMaskPipe, IConfig} from 'ngx-mask'  

import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { CpfPipe } from '../shared/pipes/cpf.pipe';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    ListarClienteComponent,
    InserirClienteComponent,
    EditarClienteComponent,
    NumericoDirective,
    ModalClienteComponent,
    CpfPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
