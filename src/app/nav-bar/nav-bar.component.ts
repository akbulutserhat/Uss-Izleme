import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppState } from '../store/models/app-state.models';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() toggleFlag:boolean;
  @Output() navClick = new EventEmitter()
 
  constructor() { 
  }

  ngOnInit(): void {
  }

  navClicked() {
    this.navClick.emit();
  }

}
