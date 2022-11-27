import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  
  model: any = {}

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }

  register()
  {
    console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next : (resp) => 
      { 
        // console.log(resp) // not required(undefined : message)
        this.cancel();
      },
      error : (err) => console.log(err),
      complete : () => console.log('register method call completed.')
    })
  }

  cancel ()
  {
    console.log('cancelled.');
    this.cancelRegister.emit(false);
  }

}
