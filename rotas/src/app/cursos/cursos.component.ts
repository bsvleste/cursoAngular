import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos:any[];
  paginas:number;
  inscricao:Subscription;
  constructor(private cursosServices:CursoService,
              private route:ActivatedRoute,
            private router:Router) { }

  ngOnInit() 
  {
    this.cursos = this.cursosServices.getCursos();
    
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams:any)=>{
        this.paginas = queryParams['pagina'];
      }
    );
  }
  ngOnDestroy()
  {
    this.inscricao.unsubscribe();
  }
  paginasAdd()
  {
    this.router.navigate(['/cursos'],
    {queryParams:{'pagina': ++this.paginas}}
  )
  }

}
