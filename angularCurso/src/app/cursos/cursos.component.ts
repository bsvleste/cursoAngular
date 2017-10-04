import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal:string;
  listaCursos:string[] = ['java','php','c#'];
  constructor() {
    this.nomePortal = "Agora vai";
   }

  ngOnInit() {
  }

}
