import { NgModule } from '@angular/core';import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const appRoutes:Routes = [
    { path:'cursos', component:CursosComponent},
    { path:'404', component:CursoNaoEncontradoComponent},
    { path:'curso/:id', component:CursoDetalheComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class CursosRoutingModule{ }