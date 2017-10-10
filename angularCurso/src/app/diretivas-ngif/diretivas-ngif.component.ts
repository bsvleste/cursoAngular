import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngif',
  templateUrl: './diretivas-ngif.component.html',
  styleUrls: ['./diretivas-ngif.component.css']
})
export class DiretivasNgifComponent implements OnInit {
  cursos:string[] = [];

  mostrarCurso:boolean = false;

  constructor() { }
  
  ngOnInit() {
  }
  mostrarCursos()
  {
    this.mostrarCurso = !this.mostrarCurso;
  }
}
