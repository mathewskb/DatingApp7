import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  
  model: any = {}

  constructor(private accountService : AccountService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  register()
  {
    console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next : (resp) => 
      { 
        // console.log(resp) // not required(undefined : message)
        // this.toastr.info('Register success','Register');
        this.cancel();
      },
      error : (err) =>  {
        console.log(err);
        this.toastr.error(err.error);
      },
      complete : () => console.log('register method call completed.')
    })
  }

  cancel ()
  {
    console.log('cancelled.');
    this.cancelRegister.emit(false);
  }

}
