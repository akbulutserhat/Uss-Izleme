import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/models/app-state.models';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() changeToggle = new EventEmitter() 

  constructor(private authService:AuthService,private router:Router
    ) {
     
     }

  ngOnInit(): void {
  }

  changeToggleState() {
    this.changeToggle.emit();
  }

  LogoutClicked() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }
}
