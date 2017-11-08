import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
 
  formulario:FormGroup;
  

  constructor(
    private formBuilder:FormBuilder,
    private http:Http
  ) { }

  ngOnInit()
  {
    /*this.formulario = new FormGroup({
      nome:  new FormControl(null),
      email: new FormControl(null)
    });*/
    /*email:form.value.email,
    nome:form.value.nome,
    endereco: {
      cep: dados.cep,
      num:'' ,
      complemento:dados.complemento,
      rua: dados.logradouro,
      bairro:dados.bairro ,
      cidade:dados.localidade,
      estado: dados.uf*/
   
      this.formulario = this.formBuilder.group({
      nome:[null,Validators.required],
      email:[null, [Validators.required, Validators.email]],
      
      endereco:this.formBuilder.group({
        cep: [null,Validators.required],
        num:[null, Validators.required] ,
        complemento:[null],
        rua: [null,Validators.required],
        bairro:[null,Validators.required] ,
        cidade:[null,Validators.required],
        estado: [null,Validators.required]
      })
    });
  }
  onSubmit()
  {
   if(this.formulario.valid){

     this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
              .map(res=>res)
              .subscribe(dados=>{
       console.log(dados);
       //reseta o form
       this.resetar();
      },
      (error:any)=>alert('errro')
    );      
  }else{
    this.verificaValidacoes(this.formulario);
   
  }
}

  verificaValidacoes(formGroup: FormGroup)
  {
    Object.keys(formGroup.controls).forEach(campo =>{
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if(controle instanceof FormGroup){
        this.verificaValidacoes(controle);
      }
    });
  }

  resetar()
  {
    this.formulario.reset();
  }
  verificaEmailValido()
  {
    const campoEmail = this.formulario.get('email');
    if(campoEmail.errors){
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }
  verificaCampo(campo:string)
  {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
    
  }
  aplicaCssError(campo:string)
  {
    return{'has-error': this.verificaCampo(campo)};
  }

  consultaCEP()
  {
    let cep = this.formulario.get('endereco.cep').value;
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
        this.http.get(`//viacep.com.br/ws/${cep}/json`).map(dados=>dados.json()).subscribe(dados=>this.aplicaDadosForm(dados));
      }
    }
  }

  aplicaDadosForm(dados)
  {
   /*
    form.setValue({
      email:form.value.email,
      nome:form.value.nome,
      endereco: {
        cep: dados.cep,
        num:'' ,
        complemento:dados.complemento,
        rua: dados.logradouro,
        bairro:dados.bairro ,
        cidade:dados.localidade,
        estado: dados.uf
      }  
    });*/
    this.formulario.patchValue({
      endereco: {
        complemento:dados.complemento,
        rua: dados.logradouro,
        bairro:dados.bairro ,
        cidade:dados.localidade,
        estado: dados.uf
      }
    });
  }
}
