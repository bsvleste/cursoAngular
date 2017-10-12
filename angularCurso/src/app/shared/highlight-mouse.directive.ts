import { Directive, HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostBinding('style.background-color') backgroundColor:string;

  @HostListener ('mouseenter') onmouseenter()
  {
    this.backgroundColor = 'yellow';
  }
  @HostListener ('mouseleave') onmouseover()
  {
    this.backgroundColor = 'white';
  }
  constructor() { }

}
