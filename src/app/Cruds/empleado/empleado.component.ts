import { Component, OnInit } from '@angular/core';
import { EmpleadoServiceService } from 'src/app/Service/empleado-service.service';
import { Router } from '@angular/router';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleados: Empleado[];

  constructor(private empleadoService:EmpleadoServiceService, private router:Router) { }

  ngOnInit() {
    this.empleadoService.getEmpleados().subscribe(empleados=>this.empleados = empleados);
  }

  eliminar(empleado: Empleado): void{
    this.empleadoService.eliminar(empleado.idempleado).subscribe(
      response => {
        this.empleados = this.empleados.filter(emp => emp !== empleado)
      })
  }

}
