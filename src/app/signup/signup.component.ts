import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User("","","");

  signupUser(){
    let userForm = new FormData()
    userForm.append('email',this.user.email)
    userForm.append('username',this.user.username)
    userForm.append('password',this.user.password)
    this.accountService.signup(this.user)
  }

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

}
