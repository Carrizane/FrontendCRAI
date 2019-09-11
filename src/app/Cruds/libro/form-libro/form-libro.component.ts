import { Component, OnInit } from '@angular/core';
import { LibroserviceService } from 'src/app/Service/libroservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Libro } from '../libro';
import { AutorServiceService } from 'src/app/Service/autor-service.service';
import { Autor } from '../../autor/autor';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css']
})
export class FormLibroComponent implements OnInit {

  private libro: Libro = new Libro();
  autores: Autor[];

  constructor(private libroService:LibroserviceService, private service:AutorServiceService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarLibro()
    this.service.getAutores().subscribe(autores=>this.autores = autores);
  }

  public  create(): void{
    this.libroService.create(this.libro).subscribe(
      response => this.router.navigate(['/libros'])
    )
  }

  cargarLibro(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.libroService.getLibro(id).subscribe((libro)=>this.libro=libro
      )}
    })
  }

  actualizar(): void{
    this.libroService.actualizar(this.libro).subscribe(cliente => {
      this.router.navigate(['/libros'])
    })
  }

}
