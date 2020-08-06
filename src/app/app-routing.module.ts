import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginGuard } from './login/login.guard';
import { YetkiSayfasiComponent } from './yetki-sayfasi/yetki-sayfasi.component';
import { KullaniciTanimlamaComponent } from './kullanici-tanimlama/kullanici-tanimlama.component';

const routes: Routes = [
  { path:'',redirectTo:LoginGuard?'dashboard':'login',pathMatch:'full'},
  { path:'login', component:LoginComponent },
  { path:'dashboard', component: DashboardComponent,canActivate:[LoginGuard]},
  { path:'yetki-sayfasi', component: YetkiSayfasiComponent,canActivate:[LoginGuard]},
  { path:'kullanici-tanimlama', component:KullaniciTanimlamaComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
