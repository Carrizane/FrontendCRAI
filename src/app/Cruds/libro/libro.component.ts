import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/Cruds/libro/libro';
import { LibroserviceService } from 'src/app/Service/libroservice.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libros:Libro[];

  constructor(private libroService:LibroserviceService) { }

  ngOnInit() {
    this.libroService.getLibros().subscribe(libros=>this.libros = libros);
  }

  eliminar(libro: Libro): void{
    this.libroService.eliminar(libro.idlibro).subscribe(
      response => {
        this.libros = this.libros.filter(lib => lib !== libro)
      })
  }

}
