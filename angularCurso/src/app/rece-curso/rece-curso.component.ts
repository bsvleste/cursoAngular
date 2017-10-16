import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rece-curso',
  templateUrl: './rece-curso.component.html',
  styleUrls: ['./rece-curso.component.css']
})
export class ReceCursoComponent implements OnInit {

  curso:string;
  constructor(private cursosService:CursosService) { }

  ngOnInit() 
  {
    this.cursosService.emitirCursoCriado.subscribe(
      emitirCursoCriado=> this.curso = emitirCursoCriado
    );
  }

}
