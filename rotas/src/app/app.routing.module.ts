import { NgModule } from '@angular/core';import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth-guard';
import { CursoGuard } from './guard/cursos-guard';
import { AlunosGuard } from './guard/alunos-guard';

const appRoutes:Routes = [
    {path:'cursos',
        loadChildren:'app/cursos/cursos.module#CursosModule',
        canActivate:[AuthGuard],
        canActivateChild:[CursoGuard],
        canLoad:[AuthGuard]
    },
    {path:'alunos',
        loadChildren:'app/alunos/alunos.module#AlunosModule',
        canActivate:[AuthGuard],
        canActivateChild:[AlunosGuard],
        canLoad:[AuthGuard]
    },
    { path:'', component:HomeComponent, canActivate:[AuthGuard]},
    { path:'home', component:HomeComponent,canActivate:[AuthGuard]},
    { path:'login', component:LoginComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }