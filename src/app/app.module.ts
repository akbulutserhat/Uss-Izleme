import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { LoginModule } from './login/login.module';
import { YetkiSayfasiModule } from './yetki-sayfasi/yetki-sayfasi.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { YetkiReducer } from './store/reducers/yetki.reducer';
import { AuthReducer } from './store/reducers/auth.reducer';
import { HelperReducer } from './store/reducers/helper.reducer';

import { MatMenuModule } from '@angular/material/menu';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    YetkiSayfasiModule,
    BrowserAnimationsModule,
    MatMenuModule,

    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      auth : AuthReducer,
      yetki: YetkiReducer,
      helper: HelperReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
