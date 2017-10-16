import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static novoCursoCriado = new EventEmitter<string>();

  private cursos:string [] = ["Java","Angular"];
  constructor() {}
  getCursos()
  {
    return  this.cursos;
  }
  addCurso(curso:string)
  {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.novoCursoCriado.emit(curso);
  }
}
