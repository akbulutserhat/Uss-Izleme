import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/models/app-state.models';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  toggleFlag$:Observable<boolean>;

  constructor(private store:Store<AppState>) { 
    this.toggleFlag$ = this.store.pipe(select(state => state.helper.toggleFlag));
  }

  ngOnInit(): void {}

}
