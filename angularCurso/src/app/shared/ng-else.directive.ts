import { Directive } from '@angular/core';

@Directive({
  selector: '[NgElse]'
})
export class NgElseDirective {
  cursos:string[] = [];
  
  mostrarCurso:boolean = false;
  
  constructor() { }
    
  ngOnInit() {
  }
  mostrarCursos()
  {
    this.mostrarCurso = !this.mostrarCurso;
  }
  
}
