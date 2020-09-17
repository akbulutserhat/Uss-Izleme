import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.models';
import { environment } from 'src/environments/environment.prod';
import { map, catchError } from 'rxjs/operators';
import { KullaniciListeleSuccess, KullaniciListeleFailure, GrupListeleSuccess, GrupListeleFailure, KullaniciyaGoreGrupListeleSuccess, KullaniciyaGoreGrupListeleFailure, GrubaGoreKullaniciListeleSuccess, GrubaGoreKullaniciListeleFailure, KullaniciEkleSuccess, KullaniciEkleFailure, GrupEkleSuccess, GrupEkleFailure, KullaniciSilSuccess, KullaniciSilFailure, GrupSilSuccess, GrupSilFailure, KullaniciyaGrupEkleSuccess, KullaniciyaGrupEkleFailure, GrubaKullaniciEkleSuccess, GrubaKullaniciEkleFailure, KullanicidanGrupSilSuccess, KullanicidanGrupSilFailure, GruptanKullaniciSilSuccess, GruptanKullaniciSilFailure } from '../store/actions/kullanici.actions';
import { of } from 'rxjs';

const token = localStorage.getItem("token");

const kullaniciListelemeHeader = {
  headers: new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/kullanici/Listele",
    "Access-Token" : token
  })
}

const kullaniciGrupEklemeHeader = {
  headers: new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/kullanici/Ekle",
    "Access-Token" : token
  })
}

const kullaniciyaGoreGrupListelemeHeader = {
  headers: new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/kullanici/KullaniciyaGoreGrup",
    "Access-Token" : token
  })
}

const grubaGoreKullaniciListelemeHeader = {
  headers: new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/kullanici/GrubaGoreKullanici",
    "Access-Token" : token
  })
}

const kullaniciGrupSilmeHeader = {
  headers: new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/kullanici/Sil",
    "Access-Token" : token
  })
}

const kullaniciyaGrupEklemeHeader = {
  headers: new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/kullanici/KullaniciyaGrupEkle",
    "Access-Token" : token
  })
}

const kullanicidanGrupSilmeHeader = {
  headers: new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/kullanici/KullanicidanGrupSil",
    "Access-Token" : token
  })
}

@Injectable({
  providedIn: 'root'
})
export class KullaniciService {

  constructor(private http:HttpClient,private store:Store<AppState>) { }

  KullaniciListele(body:any) {
    console.log('serviste listeleme metoduna girdi!');
    return this.http.post(environment.BACKEND_URL,body,kullaniciListelemeHeader)
    .pipe(   
      map((res:any) => {
        if(res) {
          const payload = res.rows;
          if(body.TIPI == 1) {
            this.store.dispatch(new KullaniciListeleSuccess(payload));
          }else if(body.TIPI == 2){
            this.store.dispatch(new GrupListeleSuccess(payload));
          }
        }
      }),
      catchError(err => of(this.store.dispatch(new KullaniciListeleFailure(err)))),
    );
  }

  KullaniciyaGoreGrupListele(body:any) {
    return this.http.post(environment.BACKEND_URL,body,kullaniciyaGoreGrupListelemeHeader)
    .pipe(
      map((res:any) => {
        if(res) {
          this.store.dispatch(new KullaniciyaGoreGrupListeleSuccess(res.rows));
        }
      }),
      catchError(err => of(this.store.dispatch(new KullaniciyaGoreGrupListeleFailure(err))))
    )
  }

  GrubaGoreKullaniciListele(body:any) {
    return this.http.post(environment.BACKEND_URL,body,grubaGoreKullaniciListelemeHeader)
      .pipe(
        map((res:any) => {
          if(res) {   
            this.store.dispatch(new GrubaGoreKullaniciListeleSuccess(res.rows));
          }
        }),
        catchError(err => of(this.store.dispatch(new GrubaGoreKullaniciListeleFailure(err))))
      )
  }

  kullaniciEkle(body:any) {
    return this.http.post(environment.BACKEND_URL,body,{...kullaniciGrupEklemeHeader,responseType:'text'})
    .pipe(
      map(() => this.store.dispatch(new KullaniciEkleSuccess(body))),
      catchError(err => of(this.store.dispatch(new KullaniciEkleFailure(err))))
    )
  }

  grupEkle(body:any) {
    return this.http.post(environment.BACKEND_URL,body,{...kullaniciGrupEklemeHeader,responseType:'text'})
    .pipe(
      map(() => this.store.dispatch(new GrupEkleSuccess(body))),
      catchError(err => of(this.store.dispatch(new GrupEkleFailure(err))))
    )
  }

  kullaniciSil(id:number) {
    return this.http.post(environment.BACKEND_URL,{ID:id},{...kullaniciGrupSilmeHeader,responseType:'text'})
      .pipe(
        map(()=> this.store.dispatch(new KullaniciSilSuccess(id))),
        catchError(err => of(this.store.dispatch(new KullaniciSilFailure(err))))
      )
  }

  grupSil(id:number) {
    return this.http.post(environment.BACKEND_URL,{ID:id},{...kullaniciGrupSilmeHeader,responseType:'text'})
      .pipe(
        map(()=> this.store.dispatch(new GrupSilSuccess(id))),
        catchError(err => of(this.store.dispatch(new GrupSilFailure(err))))
      )
  }

  kullaniciyaGrupEkle(body:any) {
    return this.http.post(environment.BACKEND_URL,body,{...kullaniciyaGrupEklemeHeader,responseType:'text'})
      .pipe(
        map(() => this.store.dispatch(new KullaniciyaGrupEkleSuccess(body))),
        catchError(err => of(this.store.dispatch(new KullaniciyaGrupEkleFailure(err))))
      )
  }

  grubaKullaniciEkle(body:any) {
    return this.http.post(environment.BACKEND_URL,body,{...kullaniciyaGrupEklemeHeader,responseType:'text'})
    .pipe(
      map(() => this.store.dispatch(new GrubaKullaniciEkleSuccess(body))),
      catchError(err => of(this.store.dispatch(new GrubaKullaniciEkleFailure(err))))
    )
  }

  kullanicidanGrupSil(body:any) {
    return this.http.post(environment.BACKEND_URL,body,{...kullanicidanGrupSilmeHeader,responseType:'text'})
      .pipe(
        map(() => this.store.dispatch(new KullanicidanGrupSilSuccess(body))),
        catchError(err => of(this.store.dispatch(new KullanicidanGrupSilFailure(err))))
      )
  }

  gruptanKullaniciSil(body:any) {
    return this.http.post(environment.BACKEND_URL,body,{...kullanicidanGrupSilmeHeader,responseType:'text'})
      .pipe(
        map(() => this.store.dispatch(new GruptanKullaniciSilSuccess(body))),
        catchError(err => of(this.store.dispatch(new GruptanKullaniciSilFailure(err))))
      );
  }

}
