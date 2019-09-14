import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteServiceService } from 'src/app/Service/cliente-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Estas seguro?',
      text: "No se podra recuperar los datos.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.value) {
        this.clienteService.eliminar(cliente.idcliente).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
          }
        );
        Swal.fire(
          'Eliminado!',
          'El Cliente ha sido eliminado con exito',
          'success'
        )
      }
    })
  }

}
