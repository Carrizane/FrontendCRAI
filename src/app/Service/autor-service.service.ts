import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Autor } from '../Cruds/autor/autor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorServiceService {

  constructor(private http:HttpClient) { }

  private Url = 'http://localhost:8080/autores/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  getAutores(){
    return this.http.get<Autor[]>(this.Url)
  }

  create(autor: Autor): Observable<Autor>{
    return this.http.post<Autor>(this.Url, autor, {headers: this.httpHeaders});
  }

  getAutor(id): Observable<Autor>{
    return this.http.get<Autor>(`${this.Url}/${id}`)
  }

  actualizar(autor: Autor): Observable<Autor>{
    return this.http.put<Autor>(`${this.Url}/${autor.idautor}`, autor, {headers: this.httpHeaders})
  }

  eliminar(id: number): Observable<Autor>{
    return this.http.delete<Autor>(`${this.Url}/${id}`, {headers: this.httpHeaders})
  }

  contador(): Observable<number>{
    return this.http.get<number>(`${this.Url}/count`, {headers: this.httpHeaders})
  }

}
