import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  { path:'dashboard', component: DashboardComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
