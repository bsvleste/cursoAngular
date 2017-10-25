import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

@Injectable()
export class AlunosDiactivateGuard implements CanDeactivate<AlunosFormComponent> {
        
        constructor(){}
        canDeactivate(
            component: AlunosFormComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean 
        {
            
            return component.mudouForm();
        }
}
