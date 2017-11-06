import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }
  
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
  aplicaCssError(campo)
  {
    return{
      'has-error': this.verificaCampo(campo)      
    }
  }
}
