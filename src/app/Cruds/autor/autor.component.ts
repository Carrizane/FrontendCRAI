import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorServiceService } from '../../Service/autor-service.service';
import { Autor } from './autor';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  autores: Autor[];

  constructor(private service:AutorServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getAutores().subscribe(autores=>this.autores = autores);
  }

  eliminar(autor: Autor): void{
    this.service.eliminar(autor.idautor).subscribe(
      response => {
        this.autores = this.autores.filter(aut => aut !== autor)
      })
  }

}
