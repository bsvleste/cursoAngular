import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id:string[] = ['1','2','3'];
  title = 'app';
  mostrarMenu:boolean = false;
  constructor(private authService:AuthService){}
  ngOnInit()
  {
    this.authService.mostraMenuEmmiter.subscribe(
      mostrar =>this.mostrarMenu = mostrar
    );
  }
}
