import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  // currentUser$ : Observable<User | null> = of(null);

  constructor(public accountService: AccountService, 
              private router : Router, 
              private toastr : ToastrService) { }

  ngOnInit(): void {
        // this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);  
        this.router.navigateByUrl('/members');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.error);
      },
      complete: () => {
        console.log('login request completed');
      }
    })
  }

  logout() {
    
    this.accountService.logout();
    console.log('logged out..');
    this.router.navigateByUrl('/');
  }

}
