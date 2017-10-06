import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[CursosComponent,CursosDetalheComponent],
    exports:[CursosComponent]
})
export class CursosModule{}