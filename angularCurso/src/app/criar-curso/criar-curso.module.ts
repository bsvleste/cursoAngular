import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReceCursoComponent } from './../rece-curso/rece-curso.component';
import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from './../cursos/cursos.service';

@NgModule({
    declarations:[
        CriarCursoComponent,
        ReceCursoComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[CriarCursoComponent]
})
export class CriarCursoModule{}