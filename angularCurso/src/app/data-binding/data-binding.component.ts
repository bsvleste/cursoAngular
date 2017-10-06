import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url = "http://colisao.com.br";
  
  urlImagem = "http://lorempixel.com/400/200/sports/Dummy-Text/";
  cursoAngular:boolean = true;
  constructor() { }
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
