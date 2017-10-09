import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Angular';
  valorInicial:number = 50;
  deletarCiclo:boolean = false;
  mudarValor()
  {
    
    this.valorInicial ++;
    this.deletarCiclo =false;
  }
  deleteCiclo()
  {
    this.deletarCiclo = true;
  }
}
