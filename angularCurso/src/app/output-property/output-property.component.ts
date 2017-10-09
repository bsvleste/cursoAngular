import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

   @Input('valor')valor:number = 0;

   @Output()mudouValor = new EventEmitter();

   @ViewChild('campoInput')valorInput:ElementRef;
   
  constructor() { }

  incrementa()
  {
    this.valorInput.nativeElement.value++
    this.mudouValor.emit('aumentou' + this.valorInput.nativeElement.value);
  }
  decrementa()
  {
    this.valorInput.nativeElement.value--
    this.mudouValor.emit('diminuiu' + this.valorInput.nativeElement.value);

  }
  ngOnInit() {
  }

}
