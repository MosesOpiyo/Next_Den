import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user'; 

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  
  constructor(private http:HttpClient) { }
  userPost(user:User){
    return this.http.post(environment.API_URL,user)
  }
  getUser(){
    return this.http.get(environment.API_URL)
  }
}
