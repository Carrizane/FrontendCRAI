import { Component, OnInit } from '@angular/core';
import { EmpleadoServiceService } from '../Service/empleado-service.service';
import { AutorServiceService } from '../Service/autor-service.service';
import { ClienteServiceService } from '../Service/cliente-service.service';
import { LibroserviceService } from '../Service/libroservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contadorEmpleado: number;
  contadorAutor: number;
  contadorCliente: number;
  contadorLibro: number;

  constructor(private empleadoService:EmpleadoServiceService,private autorService:AutorServiceService,private clienteService:ClienteServiceService,private libroService:LibroserviceService) { }

  ngOnInit() {
    this.empleadoService.contador().subscribe(contadorEmpleado => this.contadorEmpleado = contadorEmpleado);
    this.autorService.contador().subscribe(contadorAutor => this.contadorAutor = contadorAutor);
    this.clienteService.contador().subscribe(contadorCliente => this.contadorCliente = contadorCliente);
    this.libroService.contador().subscribe(contadorLibro => this.contadorLibro = contadorLibro);
  }

}
