import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map, catchError, repeat, tap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.models';
import { KullaniciListelemeSuccess, KullaniciListelemeFailure, YetkiListelemeSuccess, YetkiListelemeFailure, KullaniciYetkiHastaneDetayListelemeSuccess, KullaniciYetkiHizmetDetayListelemeSuccess, KullaniciYetkiHastaneDetayListelemeFailure, YetkiHastaneDetayListelemeSuccess, YetkiHizmetDetayListelemeSuccess, YetkiHastaneDetayListelemeFailure} from '../store/actions/yetki.actions';
import { KullaniciItem } from '../store/models/yetki/kullanici-item.models';
import { YetkiItem } from '../store/models/yetki/yetki-item.models';
import { YetkiHastaneDetayItem } from '../store/models/yetki/yetki-detay/yetki-hastane-detay-item.models';
import { YetkiHizmetDetayItem } from '../store/models/yetki/yetki-detay/yetki-hizmet-detay-item.models';

const token = localStorage.getItem("token");

export interface KullaniciDetayiBody {
  KODU:string,
  KULLANICI_ID:number
}

const kullanıcıListelemeHeader = {
  headers: new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/kullanici/Listele",
    "Access-Token" : token
  })
}

const yetkiListelemeHeader = {
  headers: new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/yetki/Listele",
    "Access-Token" : token
  })
}

const kullaniciYetkiDetayListelemeHeader = {
  headers: new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/kullanici/yetki/Listele",
    "Access-Token" : token
  })
}

const yetkiKaydetHeader = {
  headers:new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/kullanici/yetki/Kaydet",
    "Access-Token" : token
  })
}

const yetkiSilHeader = {
  headers:new HttpHeaders({
    "Content-Type" : "application/eonc+json;charset=utf-8;action=/yonetici/kullanici/yetki/Sil",
    "Access-Token" : token
  })
}


@Injectable({
  providedIn: 'root'
})
export class YetkiService {

  constructor(private http:HttpClient,private store:Store<AppState>) { }

  KullaniciListele(body:any) {
    return this.http.post(environment.BACKEND_URL,body,kullanıcıListelemeHeader)
    .pipe(
      map((res:any) => {
        if(res) {
          const payload:KullaniciItem[] = res.rows;
          this.store.dispatch(new KullaniciListelemeSuccess(payload));
        }
      }),
      catchError(err => of(this.store.dispatch(new KullaniciListelemeFailure(err))))
    );
  }

  YetkiListele() {
    return this.http.post(environment.BACKEND_URL,{},yetkiListelemeHeader)
    .pipe(
      map((res:any) => {
        if(res) {
          const payload:YetkiItem[] = res.rows;
          this.store.dispatch(new YetkiListelemeSuccess(payload));
        }
      }),
      catchError(err => of(this.store.dispatch(new YetkiListelemeFailure(err))))
    );
  }

  YetkiDetayListeleme(body:any) {
    return this.http.post(environment.BACKEND_URL,body,yetkiListelemeHeader)
    .pipe(
      map((res:any) => {
        if(res) {
          if(body.YETKI_KODU == "HASTANE.BINA"){
            const payload:YetkiHastaneDetayItem[] = res.rows;
            this.store.dispatch(new YetkiHastaneDetayListelemeSuccess(payload));
          }else if(body.YETKI_KODU == "HIZMET"){
            const payload:YetkiHizmetDetayItem[] = res.rows;
            this.store.dispatch(new YetkiHizmetDetayListelemeSuccess(payload));
          }
         
        }
      }),
      catchError(err => of(this.store.dispatch(new YetkiHastaneDetayListelemeFailure(err))))
    );
  }


  KullaniciYetkiDetayListeleme(body:any) {
    return this.http.post(environment.BACKEND_URL,body,kullaniciYetkiDetayListelemeHeader)
    .pipe(
      map((res:any) => {
        if(res){
          if(body.KODU == "HASTANE.BINA"){
            const payload:YetkiHastaneDetayItem[] = res;
            this.store.dispatch(new KullaniciYetkiHastaneDetayListelemeSuccess(payload));
          }else if(body.KODU == "HIZMET"){
            const payload:YetkiHizmetDetayItem[] = res;
            this.store.dispatch(new KullaniciYetkiHizmetDetayListelemeSuccess(payload));
          }
        }
      }),
      catchError(err => of(this.store.dispatch(new KullaniciYetkiHastaneDetayListelemeFailure(err))))
    );
  }

  yetkiKaydet(body:any) {
    return this.http.post(environment.BACKEND_URL,body,yetkiKaydetHeader)
    .pipe(
      catchError(err => of(console.log('kaydetme hatalı!')))
    )
  }

  yetkiSil(body:any) {
    return this.http.post(environment.BACKEND_URL,body,yetkiSilHeader)
    .pipe(
      catchError(err => of(console.log('silme hatalı!')))
    )
  }

}
