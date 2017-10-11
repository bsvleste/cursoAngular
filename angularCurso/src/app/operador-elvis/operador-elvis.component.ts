import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefa:any = {
    descricao:'Limpar a casa',
    responsavel : {
      usuario:null,
      nome:"bruno"
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
