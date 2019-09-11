import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../Cruds/empleado/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceService {

  private Url = 'http://localhost:8080/empleados/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  getEmpleados(){
    return this.http.get<Empleado[]>(this.Url)
  }

  create(empleado: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(this.Url, empleado, {headers: this.httpHeaders});
  }

  getEmpleado(id): Observable<Empleado>{
    return this.http.get<Empleado>(`${this.Url}/${id}`)
  }

  actualizar(empleado: Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(`${this.Url}/${empleado.idempleado}`, empleado, {headers: this.httpHeaders})
  }

  eliminar(id: number): Observable<Empleado>{
    return this.http.delete<Empleado>(`${this.Url}/${id}`, {headers: this.httpHeaders})
  }

  contador(): Observable<number>{
    return this.http.get<number>(`${this.Url}/count`, {headers: this.httpHeaders})
  }

}
