import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { auditTime, map, catchError } from 'rxjs/operators';
import { LoginItem } from '../store/models/login-item.models';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.models';
import { LogOutAction, LoginActionSuccess, LoginActionFailure } from '../store/actions/auth.actions';
import { UserItem } from '../store/models/user-item-models';
import { of, Observable } from 'rxjs';

const LoginOptions = {
  headers: new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/oturum/Ac.jse"
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private store:Store<AppState>) { }

  login(body: LoginItem) {
    return this.http.post(environment.BACKEND_URL,body,LoginOptions).pipe(
      map((res:UserItem) =>{
        if(res) {
          this.store.dispatch(new LoginActionSuccess(res));
        }
      }),
      catchError(err => of(this.store.dispatch(new LoginActionFailure(err))))
    ); 
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return (token)? true:false;
    
  }

  logOut() {
    return this.store.dispatch(new LogOutAction());
  }
}
