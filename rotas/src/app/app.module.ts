import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoService } from './cursos/curso.service';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    HomeComponent,
    LoginComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing    
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
