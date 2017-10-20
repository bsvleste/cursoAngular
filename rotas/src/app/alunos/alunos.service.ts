import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {
  private alunos:any[] = [
    {id:1,nome:'Bruno de Souza Valeiro', email:'bvaleiro@gmail.com'},
    {id:2,nome:'Mayara de França Valeiro', email:'mama_valeiro@gmail.com'},
    {id:3,nome:'Marina de França Valeiro', email:'marinaValeiro@gmail.com'}
  ];
  getAlunos()
  {
    return this.alunos;
  }
  getAluno(id: number)
  {
    let aluno = this.getAlunos()
    for(let i of aluno)
    {
      let aluno = i;
      if(aluno.id == id)
      {
        return aluno;
      }
    }
    return null;
  } 
  constructor() { }

}
