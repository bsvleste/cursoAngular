import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef ) {
    this._elementRef.nativeElement.style.backgroundColor ='yellow'; 
    console.log(this._elementRef);
   }
}
