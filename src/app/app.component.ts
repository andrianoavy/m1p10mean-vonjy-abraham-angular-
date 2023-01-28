import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'Garage | Mikara-Car';
  role:string;
  login:Subscription;
  
  constructor(public authService: AuthService, public router:Router,) { }
  ngOnDestroy(): void {
    this.login.unsubscribe()
  }
  ngOnInit(): void {
    this.role = this.authService.getRole()
    let self = this
    this.login = this.authService.loginSubject.subscribe(
      {
        next:(data)=>{
          self.role = data
        }
      }
    )
  }
  logout() {
    this.authService.doLogout()
  }
  isClient(): any {
    return this.role  === "Client"
  }
  isAtelier(): any {
    return this.role  === "Atelier"
  }
  isFinancier():any{
    return this.authService.getRole() === "Finance"
  }
}
