import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private accountService:AccountService) { }
  email:string = "";
  password: string = "";
  loginUser(){
    let credentials = new FormData()
    credentials.append('username',this.email)
    credentials.append('password',this.password)
    this.accountService.login(credentials)
  }
  ngOnInit(): void {
  }

}
