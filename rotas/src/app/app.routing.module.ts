import { NgModule } from '@angular/core';import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

const appRoutes:Routes = [
    { path:'', component:HomeComponent},
    { path:'login', component:LoginComponent},
    { path:'home', component:HomeComponent},
    { path:'cursos', component:CursosComponent},
    { path:'404', component:CursoNaoEncontradoComponent},
    { path:'curso/:id', component:CursoDetalheComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }