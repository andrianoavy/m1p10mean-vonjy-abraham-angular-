import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Garage | Mikara-Car';
  constructor(public authService: AuthService, public router:Router,) { }
  logout() {
    this.authService.doLogout()
  }
  isClient(): any {
    return this.authService.getRole() === "Client"
  }
  isAtelier(): any {
    return this.authService.getRole() === "Atelier"
  }
}
