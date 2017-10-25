import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class AlunosDiactivateGuard implements CanDeactivate<TeamComponent> {
        
        
        canDeactivate(
            component: TeamComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            return this.permissions.canDeactivate(this.currentUser, route.params.id);
    }
}
