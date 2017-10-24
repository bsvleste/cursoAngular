
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  
  id:number;
  inscricao: Subscription;
  cursos:any;
  constructor( private route:ActivatedRoute,
               private cursosSercice: CursoService,
               private router: Router) 
  {
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() 
  {
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
        this.cursos = this.cursosSercice.getCurso(this.id);
        if(this.cursos ==null)
        {
          this.router.navigate(['/cursos/404']);   
        }
      }
    );
  }
  ngOnDestroy()
  {
    this.inscricao.unsubscribe();
  }

}
