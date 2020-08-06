import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/models/app-state.models';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uss-izleme';

  isLogin$:Observable<Boolean>

  constructor(private authService:AuthService,private store:Store<AppState>){
    this.isLogin$ = this.store.pipe(select(state => state.auth.isLogin));
  } 

  ngOnInit(){
    this.authService.loggedIn();
    this.store.pipe(select(state => state.helper.toggleFlag));
  }
}
