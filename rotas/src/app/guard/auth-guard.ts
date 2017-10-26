import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(
    private authService:AuthService,
    private router:Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | boolean
    {
      if(this.authService.usuarioLogado())
      {
          return true; 
      }
      this.router.navigate(['/login']);
      return false;
    }
    private  verificaAcesso(){
      if(this.authService.usuarioLogado())
      {
          return true; 
      }
      this.router.navigate(['/login']);
      return false;
    }
  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log("verificando usuario");
        return this.verificaAcesso();
      }
}
