import { AlunosComponent } from './alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { NgModule } from '@angular/core';import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const alunosRoutes:Routes = [
    //adicionando rotas filhas
        { path:'', component:AlunosComponent, children:[
        { path:'novo', component:AlunosFormComponent},
        { path:':id', component:AlunosDetalheComponent},
        { path:':id/edit', component:AlunosFormComponent}
    ]},
];

@NgModule({
    imports:[RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule]
})
export class AlunosRoutingModules{}