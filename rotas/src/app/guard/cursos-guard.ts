import { Observable } from 'rxjs/Observable';
import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

export class CursoGuard implements CanActivateChild{
    canActivateChild(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>
    {
        console.log('Guarda Curso');
        return true;
    }
}