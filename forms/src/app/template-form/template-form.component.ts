import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private http:Http) { }
  
    onSubmit(form)
    {
      console.log(form);
    }

  ngOnInit() {
  }
  verificaCampo(campo)
  {
    return !campo.valid && campo.touched ;
  }
  pesquizaCEP(cep)
  {
    //variavel nova do cep somente com numeros
    cep = cep.replace(/\D/g, '');
    //verifica se o campo cep possi valor informado
    if(cep != "")
    {
      //expressao regular para validar o cep
      var validacep = /^[0-9]{8}$/;
      //valida o formato do cep
      if(validacep.test(cep))
      {
        this.http.get(`//viacep.com.br/ws/${cep}/json`).map(dados=>dados.json()).subscribe(dados=>console.log(dados));
      }
    }
  }
  aplicaCssError(campo)
  {
    return{
      'has-error': this.verificaCampo(campo)      
    }
  }
}
