import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Garage | Mikara-Car';
  role:string;
  constructor(public authService: AuthService, public router:Router,) { }
  ngOnInit(): void {
    this.role = this.authService.getRole()
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
}
