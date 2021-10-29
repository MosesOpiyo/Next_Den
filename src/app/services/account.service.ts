import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}login`,credentials).subscribe(response => {
      const holder:any = response
      sessionStorage.setItem('token',holder['token'])
    },error => {
      console.log(error)
    })
  }

  constructor(private http:HttpClient,private route:Router) { }
}
