import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private accountService : AccountService,
                private toastr : ToastrService) {}

  canActivate(): Observable<boolean>  {
    
    return this.accountService.currentUser$.pipe(
        map( (user) => {
            
            if(user) {
                // this.toastr.info('Authenticated to view this component', 'Auth guard message');
                return true;
            } 
            else
            {
                this.toastr.error('You shall not pass - Auth guard message');
                return false;
                
            }
        }
    )
    )
    }
}