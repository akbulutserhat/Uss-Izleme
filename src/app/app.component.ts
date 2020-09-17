import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/models/app-state.models';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uss-izleme';
  toggleFlag:boolean = true;
  isLogin$:Observable<Boolean>;

  searchText:string;

  pageTitle:string = '';

  constructor(private authService:AuthService,private store:Store<AppState>,
    private router:Router){
    this.isLogin$ = this.store.pipe(select(state => state.auth.isLogin));
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          if(event.url == '/dashboard') {
            this.pageTitle = 'Anasayfa';
          }else if(event.url == '/yetki-sayfasi') {
            this.pageTitle = 'Yetki Sayfası';
          }else if(event.url == '/kullanici-tanimlama') {
            this.pageTitle = 'Kullanıcılar';
          }
      }
  })
}

  ngOnInit(){
    this.authService.loggedIn();
  }
}
