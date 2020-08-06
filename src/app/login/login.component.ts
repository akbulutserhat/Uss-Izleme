import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../services/auth.service";
import { LoginItem } from '../store/models/login-item.models';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) {
   
   }

  
  ngOnInit(): void {
    (localStorage.getItem("token"))?
    this.router.navigate(['dashboard']):'';
  }

  formItem:LoginItem = { kullanici:'',sifre:''};

  onSubmitted(form:NgForm) {
    this.authService.login(this.formItem).subscribe(
      _next => {
        this.router.navigate(['dashboard']);
      },
      _error => {
        console.log('Giriş yapılamadı.');
      }
    );

    form.reset();
    form.resetForm();

    

  }

}
