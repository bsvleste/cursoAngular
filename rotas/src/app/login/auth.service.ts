import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {
  private usuarioAutenticado :boolean = false;

  mostraMenuEmmiter = new EventEmitter<boolean>();
  constructor(private router:Router) { }
  fazerLogin(usuario:Usuario)
  { 
    if(usuario.nome === "bvaleiro@gmail.com" && usuario.senha ==="aeioub")
    {
      this.usuarioAutenticado = true;
      this.mostraMenuEmmiter.emit(true);
      this.router.navigate(['/']);
    }else
    {
      this.usuarioAutenticado = false;
      this.mostraMenuEmmiter.emit(false);
      console.log("usuario ou senha errados");
    }
  }
}
