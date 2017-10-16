import { Component, OnInit } from '@angular/core'; 
import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers:[CursosService]
})
export class CursosComponent implements OnInit {
  
  cursos: string[];
  
  nomePortal:string;
  //listaCursos:string[] = ['java','php','c#'];
  constructor(private cursosService:CursosService) {
   // this.cursos = this.cursosService.getCursos();
    //this.nomePortal = "Agora vai";
   }

  ngOnInit() 
  {
    this.cursos = this.cursosService.getCursos();

    CursosService.novoCursoCriado.subscribe(
      curso=>this.cursos.push(curso)      
    );
  }

}
