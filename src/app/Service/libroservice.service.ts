import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from '../Cruds/libro/libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroserviceService {

  constructor(private http:HttpClient) { }

  private Url = 'http://localhost:8080/libros/'
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  getLibros(){
    return this.http.get<Libro[]>(this.Url)
  }

  create(libro: Libro): Observable<Libro>{
    return this.http.post<Libro>(this.Url, libro, {headers: this.httpHeaders});
  }

  getLibro(id): Observable<Libro>{
    return this.http.get<Libro>(`${this.Url}/${id}`)
  }

  actualizar(libro: Libro): Observable<Libro>{
    return this.http.put<Libro>(`${this.Url}/${libro.idlibro}`, libro, {headers: this.httpHeaders})
  }

  eliminar(id: number): Observable<Libro>{
    return this.http.delete<Libro>(`${this.Url}/${id}`, {headers: this.httpHeaders})
  }

  contador(): Observable<number>{
    return this.http.get<number>(`${this.Url}/count`, {headers: this.httpHeaders})
  }

}
