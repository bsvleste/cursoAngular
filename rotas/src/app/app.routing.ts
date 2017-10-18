import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const APP_ROUTES:Routes = [
    { path:'', component:HomeComponent},
    { path:'login', component:LoginComponent},
    { path:'cursos', component:CursosComponent},
    { path:'home', component:HomeComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
