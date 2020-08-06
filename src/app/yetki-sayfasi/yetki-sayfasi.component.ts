import { Component, OnInit } from '@angular/core';
import { YetkiService,KullaniciDetayiBody } from '../services/yetki.service';
import { KullaniciItem } from '../store/models/yetki/kullanici-item.models';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/models/app-state.models';
import { YetkiItem } from '../store/models/yetki/yetki-item.models';
import { YetkiHastaneDetayItem } from '../store/models/yetki/yetki-detay/yetki-hastane-detay-item.models';
import { YetkiHizmetDetayItem } from '../store/models/yetki/yetki-detay/yetki-hizmet-detay-item.models';
import { ButunListeleriTemizle, KullaniciHaricListeleriTemizle } from '../store/actions/yetki.actions';

@Component({
  selector: 'app-yetki-sayfasi',
  templateUrl: './yetki-sayfasi.component.html',
  styleUrls: ['./yetki-sayfasi.component.scss']
})
export class YetkiSayfasiComponent implements OnInit {

  kullaniciListesi$:Observable<Array<KullaniciItem>>;
  yetkiListesi$:Observable<Array<YetkiItem>>;
  yetkiHastaneDetayListesi$:Observable<Array<YetkiHastaneDetayItem>>;
  yetkiHizmetDetayListesi$:Observable<Array<YetkiHizmetDetayItem>>;
  kullaniciHastaneYetkiDetayListesi:Observable<Array<YetkiHastaneDetayItem>>;
  kullaniciHizmetYetkiDetayListesi:Observable<Array<YetkiHizmetDetayItem>>;


  kullaniciId:number=-1;
  yetkiId:number = -1;
  
  yetkiDetay:any;

  tip1ButtonClicked:boolean = false;
  tip2ButtonClicked:boolean = false;

  isButtonClicked:Array<Boolean>=[];

  sahiplikFlagi:Array<Boolean>=[];

  constructor(private yetkiServis:YetkiService,private store:Store<AppState>) { 
      this.kullaniciListesi$=this.store.pipe(select(state => state.yetki.kullaniciListesi));
      this.yetkiListesi$ = this.store.pipe(select(state => state.yetki.yetkiListesi));
      this.yetkiHastaneDetayListesi$ = this.store.pipe(
                    select(state => state.yetki.yetkiHastaneDetayListesi));
      this.yetkiHizmetDetayListesi$ = this.store.pipe(
        select(state => state.yetki.yetkiHizmetDetayListesi));
      this.kullaniciHastaneYetkiDetayListesi=this.store.pipe
                    (select(state => state.yetki.kullaniciYetkiHastaneDetayListesi));
      this.kullaniciHizmetYetkiDetayListesi=this.store.pipe
                    (select(state => state.yetki.kullaniciYetkiHizmetDetayListesi));
  } 

  ngOnInit(): void {
    this.store.dispatch(new KullaniciHaricListeleriTemizle());
  }

  Tip1ButtonClicked() {
    this.tip1ButtonClicked = !this.tip1ButtonClicked;
    this.tip2ButtonClicked = false;
    if(this.tip1ButtonClicked) {
      this.yetkiServis.KullaniciListele({TIPI:1,AKTIF:1}).subscribe(
        _next => {
          console.log('Kullanıcı Listelendi');
        },
        _error => {
          console.log('Kullanıcı Listelenemedi');
        }
      );
    }else {
      this.store.dispatch(new ButunListeleriTemizle());
    }
   
  }

  Tip2ButtonClicked() {
    this.tip2ButtonClicked = !this.tip2ButtonClicked;
    this.tip1ButtonClicked = false;
    if(this.tip2ButtonClicked) {
      this.yetkiServis.KullaniciListele({TIPI:2,AKTIF:1}).subscribe(
        _next => {
          console.log('Kullanıcı Listelendi');
        },
        _error => {
          console.log('Kullanıcı Listelenemedi');
        }
      );
    }else {
      this.store.dispatch(new ButunListeleriTemizle());
    }
   
  }

  kullaniciClicked(id:number) {
    this.kullaniciListesi$.forEach(array => {
      for (let index = 0; index < array.length; index++) {
        this.isButtonClicked[index]=false;     
      }
    })
    this.kullaniciId = id;
    this.yetkiServis.YetkiListele().subscribe(
      _next => {
        console.log('Yetki Listelendi');
      },
      _error => {
        console.log('Yetki Listelenemedi');
      }
    );
    window.scroll(0,0);
    this.store.dispatch(new KullaniciHaricListeleriTemizle());
  }



  yetkiClicked(yetki:YetkiItem) {
    this.yetkiId = yetki.id;
     this.yetkiServis.YetkiDetayListeleme({YETKI_KODU:yetki.kodu}).subscribe(
      _next => {
        const body:KullaniciDetayiBody = {KODU:yetki.kodu,KULLANICI_ID:this.kullaniciId};
        this.yetkiServis.KullaniciYetkiDetayListeleme(body).subscribe(
          _next => {
            if(yetki.kodu == "HASTANE.BINA"){
              this.kullaniciHastaneYetkiDetayinaSahipmi();}
            else if(yetki.kodu == "HIZMET"){
              this.kullaniciHizmetYetkiDetayinaSahipmi();
            }
          },
          _error => {
            console.log('Kullanıcı Yetki Detayları Listelenemedi');
          }
        )
      },
      _error => {
        console.log('Yetki Detayları Listelenemedi');
      }
    )
  }

  kullaniciHastaneYetkiDetayinaSahipmi() {
    this.sahiplikFlagi = [];
    this.kullaniciHastaneYetkiDetayListesi.forEach(elements => {
       elements.forEach(element=> {
            this.yetkiHastaneDetayListesi$.forEach(datas => {
              const index = datas.findIndex(data => data.id == element.id);
              if(index >=0) {
                this.sahiplikFlagi[index] = true;
              }else {
                this.sahiplikFlagi[index] = false;
              }
          })
       })
    })
  }

  kullaniciHizmetYetkiDetayinaSahipmi() {
    this.sahiplikFlagi = [];
    this.kullaniciHizmetYetkiDetayListesi.forEach(elements => {
       elements.forEach((element,index) => {
          if(element.deger == 1) {
            this.sahiplikFlagi[index]=true;
          }else {
            this.sahiplikFlagi[index] = false;
          }
       })
    })
  }

  changeCheckBox(event) {
    if(event.checked) { // Yetki kaydetme işlemi yapılır
      console.log('YETKI_ID:'+this.yetkiId,'KULLANICI_ID:',this.kullaniciId,'KEY:'+this.yetkiDetay.id)
      this.yetkiServis.yetkiKaydet({
        YETKI_ID:this.yetkiId,
        KULLANICI_ID:this.kullaniciId,
        LOOKUP_KEY:this.yetkiDetay.id,
        DEGER:1
      }).subscribe();
    }else { // Yetki silme işlemi yapılır
      this.yetkiServis.yetkiSil({
        YETKI_ID:this.yetkiId,
        KULLANICI_ID:this.kullaniciId,
        KEY:this.yetkiDetay.id,
      }).subscribe();
    }
  }

}
