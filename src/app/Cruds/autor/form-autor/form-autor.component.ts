import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor';
import { AutorServiceService } from 'src/app/Service/autor-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-autor',
  templateUrl: './form-autor.component.html',
  styleUrls: ['./form-autor.component.css']
})
export class FormAutorComponent implements OnInit {

  private autor: Autor = new Autor();

  constructor(private autorService:AutorServiceService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarAutor()
  }

  public  create(): void{
    this.autorService.create(this.autor).subscribe(
      response => this.router.navigate(['/autores'])
    )
  }

  cargarAutor(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.autorService.getAutor(id).subscribe((autor)=>this.autor=autor
      )}
    })
  }

  actualizar(): void{
    this.autorService.actualizar(this.autor).subscribe(autor => {
      this.router.navigate(['/autores'])
    })
  }

}
