import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteServiceService } from 'src/app/Service/cliente-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  private cliente: Cliente = new Cliente();

  constructor(private clienteService:ClienteServiceService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  public  create(): void{
    this.clienteService.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
    )
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Cambios actualizados correctamente.',
      showConfirmButton: false,
      timer: 2500
    })
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente)=>this.cliente=cliente
      )}
    })
  }

  actualizar(): void{
    this.clienteService.actualizar(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes'])
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Cambios actualizados correctamente.',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
