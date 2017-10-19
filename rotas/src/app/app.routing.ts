import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const APP_ROUTES:Routes = [
    { path:'', component:HomeComponent},
    { path:'login', component:LoginComponent},
    { path:'home', component:HomeComponent},
    { path:'cursos', component:CursosComponent},
    { path:'404', component:CursoNaoEncontradoComponent},
    { path:'curso/:id', component:CursoDetalheComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
