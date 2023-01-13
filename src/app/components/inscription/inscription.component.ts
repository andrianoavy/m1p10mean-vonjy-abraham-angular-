import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  inscriptionForm: FormGroup;
  
  constructor(
    public formBuilder:FormBuilder,
    public authService:AuthService,
    public router:Router
  ) {
    this.inscriptionForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:['']
    })
  }
  
  ngOnInit(){}
  registerUser(){
    this.authService.inscription(this.inscriptionForm.value).subscribe((res) => {
      console.log(res);      
      if (res.acknowledged) {
        this.inscriptionForm.reset();
        this.router.navigate(['login']);
      }
    });
  }

}
