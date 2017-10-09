import { Component, OnInit,Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

   @Input('valor')valor:number = 0;

   @Output()mudouValor = new EventEmitter();
   
  constructor() { }

  incrementa()
  {
    this.valor++;
    this.mudouValor.emit('aumentou');
  }
  decrementa()
  {
    this.valor--;
    this.mudouValor.emit('diminuiu');

  }
  ngOnInit() {
  }

}
