import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleComponent } from './single/single.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';
import { HouseComponent } from './house/house.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'signup',
  component:SignupComponent
  },
  {
    path:'login',
  component:LoginComponent
  },
  {
    path:'landing',
  component:LandingComponent
  },
  {
    path:'single',
  component:SingleComponent
  },
  {
    path:'profile',
  component:ProfileComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Navbar2Component,
    LandingComponent,
    SingleComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
