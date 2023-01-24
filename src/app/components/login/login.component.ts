import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    if(authService.isLoggedIn)
      router.navigate(['voitures'])

    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
  ngOnInit() {}
  loginUser() {
    this.authService.login(this.loginForm.value);
    console.log('logged in');
    
  }
}
