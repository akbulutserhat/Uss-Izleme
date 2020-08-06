import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/models/app-state.models';
import { ChangeToggleStateAction } from '../store/actions/helper.actions';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router
    ,private store:Store<AppState>) {
     
     }

  ngOnInit(): void {
  }

  changeToggleState() {
    this.store.dispatch(new ChangeToggleStateAction());
  }

  LogoutClicked() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }
}
