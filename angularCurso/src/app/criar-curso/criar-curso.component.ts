import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos:string [] = [];

  constructor(private cursosService:CursosService) 
  {

    this.cursos = this.cursosService.getCursos();
  }
    ngOnInit() {
  }
  criarCurso( curso: string)
  {
    this.cursosService.addCurso(curso);
  }
}
