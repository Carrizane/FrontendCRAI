import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteServiceService } from 'src/app/Service/cliente-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService:ClienteServiceService, private router:Router) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(clientes=>this.clientes = clientes);
  }

  eliminar(cliente: Cliente): void{
    this.clienteService.eliminar(cliente.idcliente).subscribe(
      response => {
        this.clientes = this.clientes.filter(cli => cli !== cliente)
      })
  }

}
