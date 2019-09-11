import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../Cruds/cliente/cliente';
import {catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http:HttpClient, private router:Router) { }

  private Url = 'http://localhost:8080/clientes/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  getClientes(){
    return this.http.get<Cliente[]>(this.Url)
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.Url, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        console.log(e.error.Mensaje);
        swal.fire('Error al crear el cliente', e.error.Mensaje,'error');
        return throwError(e);
      })
    );
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.Url}/${id}`)
  }

  actualizar(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.Url}/${cliente.idcliente}`, cliente, {headers: this.httpHeaders})
  }

  eliminar(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.Url}/${id}`, {headers: this.httpHeaders})
  }

  contador(): Observable<number>{
    return this.http.get<number>(`${this.Url}/count`, {headers: this.httpHeaders})
  }
  
}
