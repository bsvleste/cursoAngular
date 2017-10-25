import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  inscricao: Subscription;
  alunos:any;
  private mudaNome:boolean = false;
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
          this.alunos = {};
        }
      }
    );
  }
  ngOnDestroy()
  {
    this.inscricao.unsubscribe();
  }
  onInput()
  {
    this.mudaNome = true;
  }
  mudouForm()
  {
    if(this.mudaNome)
    {
      confirm("Tem certeza que deseja sai da pagina");
    }
    return true;
  }

}
