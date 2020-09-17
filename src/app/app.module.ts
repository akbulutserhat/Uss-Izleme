import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { LoginModule } from './login/login.module';
import { YetkiSayfasiModule } from './yetki-sayfasi/yetki-sayfasi.module';
import { KullaniciTanimlamaModule } from './kullanici-tanimlama/kullanici-tanimlama.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SearchOptionsModule } from './search-options/search-options.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { YetkiReducer } from './store/reducers/yetki.reducer';
import { AuthReducer } from './store/reducers/auth.reducer';
import { KullaniciReducer } from './store/reducers/kullanici.reducer';

import { MatMenuModule } from '@angular/material/menu';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    YetkiSayfasiModule,
    BrowserAnimationsModule,
    SearchOptionsModule,
    MatMenuModule,
    KullaniciTanimlamaModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      auth : AuthReducer,
      kullanici:KullaniciReducer,
      yetki: YetkiReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
