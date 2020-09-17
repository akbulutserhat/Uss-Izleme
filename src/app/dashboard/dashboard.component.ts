import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import data from './items.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  hospitalItems = data;

  searchText:string;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {}

}
