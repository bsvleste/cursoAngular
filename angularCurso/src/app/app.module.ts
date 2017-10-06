import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{CursosModule} from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import {CursosService} from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
