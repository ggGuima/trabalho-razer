import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pedidos } from 'src/app/shared/models/pedidos.model';
import { PedidosService } from '../service/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-pedido',
  templateUrl: './inserir-pedido.component.html',
  styleUrls: ['./inserir-pedido.component.css']
})


export class InserirPedidoComponent implements OnInit {

  @ViewChild('formPedido') formPedido! : NgForm;
  pedido!: Pedidos;

  constructor(
    private pedidosService: PedidosService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.pedido = new Pedidos();

  }

  inserir(): void {
    if(this.formPedido.form.valid) {
      this.pedidosService.inserir(this.pedido);
      this.router.navigate(["/pedidos"])
    }
  }

}
