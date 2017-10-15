import { Directive, HostBinding,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {
  @HostBinding('style.background-color') backgroundColor:string;
  
    @HostListener ('mouseenter') onmouseenter()
    {
      this.backgroundColor = this.highlightColor;
    }
    @HostListener ('mouseleave') onmouseover()
    {
      this.backgroundColor = this.defaultColor;
    }

   @Input() defaultColor:string = "white";
   @Input() highlightColor:string = "yellow";
  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
