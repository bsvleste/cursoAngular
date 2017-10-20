import { Router, ActivatedRoute } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit {
  
  inscricao: Subscription;
  alunos:any;

  constructor(private route:ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router ) { }

   ngOnInit() 
  {
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        let id = params['id'];
        this.alunos = this.alunosService.getAluno(id);
        if(this.alunos == null)
        {
          this.router.navigate(['/404']);   
        }
      }
    );
  }
  editarAlunos()
  {
    this.router.navigate(['/alunos',this.alunos.id,'edit']);
  }
  ngOnDestroy()
  {
    this.inscricao.unsubscribe();
  }

}
