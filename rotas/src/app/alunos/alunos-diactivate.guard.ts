import { IFormCanDeactivate } from './../guard/iform-candeactivated-guard';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

@Injectable()
export class AlunosDiactivateGuard implements CanDeactivate<IFormCanDeactivate> {
        
        constructor(){}
        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean 
        {
            
            return component.podeDesativar();
        }
}
