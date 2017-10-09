import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url = "http://colisao.com.br";
  valorString = "";
  valorStringSalva ="";
  urlImagem = "http://lorempixel.com/400/200/sports/Dummy-Text/";
  cursoAngular:boolean = true;
  inMouseOver:boolean = false;
  constructor() { }
  
  onMouseOverOut()
  {
    this.inMouseOver = !this.inMouseOver;
  }
  salvaString(valor)
  {
    this.valorStringSalva = valor;
  }
  onKeyUp(evento: KeyboardEvent)
  {
    this.valorString = (<HTMLInputElement>evento.target).value;
    
  }
  getButtonCLick()
  {
    alert("Botao Clicado");
  }
  getValor()
  {
    return 1 ;
  }
  getCurtirCurso()
  {
    return true;
  }
  ngOnInit() {
  }

}
