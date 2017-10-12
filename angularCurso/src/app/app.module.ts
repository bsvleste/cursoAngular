import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import {CursosService} from './cursos/cursos.service';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { InputProComponent } from './input-pro/input-pro.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivasNgifComponent } from './diretivas-ngif/diretivas-ngif.component';
import { DiretivasNgswitchComponent } from './diretivas-ngswitch/diretivas-ngswitch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgComponentComponent } from './ng-component/ng-component.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivaComponent } from './diretiva/diretiva.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    InputPropertyComponent,
    InputProComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivasNgifComponent,
    DiretivasNgswitchComponent,
    NgForComponent,
    DiretivaNgClassComponent,
    OperadorElvisComponent,
    NgComponentComponent,
    FundoAmareloDirective,
    DiretivaComponent,
    HighlightMouseDirective
  ],
  imports: [
    BrowserModule,
    CursosModule,
    FormsModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
