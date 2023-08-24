import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosService } from './service/produtos.service';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component'
import { NumericoDirective } from '../shared/directives/numerico.directive';



@NgModule({
  declarations: [
    ListarProdutosComponent,
    InserirProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ProdutosService
  ]
})
export class ProdutosModule { }
