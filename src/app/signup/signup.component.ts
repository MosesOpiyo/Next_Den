import { Component, OnInit } from '@angular/core';
import { HouseService } from '../services/house.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  user= new User("","","")

  constructor(private service:HouseService) { }

  
  registerUser(){
    this.service.userPost(this.user).subscribe((result:any)=>{
      this.user = result;
      console.log(this.user)
      
    },error=>{
      alert("There was a problem with the signing up",)
    })
  }
  ngOnInit(): void {
  }
}
