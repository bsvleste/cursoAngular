import { AlunosDetalheResolver } from './guard/alunos-detalhe.resolver';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModules } from './alunos.routing.modules';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosDiactivateGuard } from './alunos-diactivate.guard';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
        AlunosRoutingModules
    ],
    exports:[],
    declarations:[
        AlunosComponent,
        AlunosFormComponent,
        AlunosDetalheComponent
    ],
    providers:[
        AlunosService,
        AlunosDiactivateGuard,
        AlunosDetalheResolver
    ]
})
export class AlunosModule{}