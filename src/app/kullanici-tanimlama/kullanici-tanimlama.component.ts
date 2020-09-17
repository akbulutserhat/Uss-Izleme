import { Component, OnInit, ɵConsole } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/models/app-state.models';
import { KullaniciService } from '../services/kullanici.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-kullanici-tanimlama',
  templateUrl: './kullanici-tanimlama.component.html',
  styleUrls: ['./kullanici-tanimlama.component.scss']
})
export class KullaniciTanimlamaComponent implements OnInit {

  kullaniciListe$:Observable<Array<any>>;
  grupListesi$:Observable<Array<any>>;
  grubaGoreKullaniciListesi$:Observable<Array<any>>;
  kullaniciyaGoreGrupListesi$:Observable<Array<any>>;

  searchUserText:string;
  searchGroupText:string
  kullanici:any;
  grup:any;

  ayniKullaniciMi:boolean = false;
  ayniGrupMu:boolean = false;

  kullaniciFormunuAc:boolean = false;
  grupFormunuAc:boolean = false;

  kullaniciyaGrupEkleFormunuAc:boolean = false;
  grubaKullaniciEkleFormunuAc:boolean = false;

  formTipi:number = 1; // 1 => kullanıcı Formu , 2 => kullanıcıya grup ekle formu

  isKullaniciButtonClicked:Array<Boolean>=[];
  isGrupButtonClicked:Array<Boolean>=[];

  constructor(private store:Store<AppState>,private kullaniciService:KullaniciService,
    public dialog: MatDialog,private _snackBar:MatSnackBar,private _dialog:MatDialog) { 
    //this.grubaGoreKullaniciListesi$ = this.store.pipe(select(state => state.kullanici.GrubaGoreKullaniciListesi));
    //this.kullaniciyaGoreGrupListesi$ = this.store.pipe(select(state => state.kullanici.KullaniciyaGoreGrupListesi));
  }

  ngOnInit(): void {
    this.kullaniciService.KullaniciListele({TIPI:1,AKTIF:1}).subscribe(
      _next => {
        this.kullaniciListe$ = this.store.pipe(select(state => state.kullanici?.KullaniciListesi));
        this.kullaniciListe$?.forEach(array => {
          for (let index = 0; index < array?.length; index++) {
            this.isKullaniciButtonClicked[index]=false;     
          }
        })
      },
      _error => {
        console.log('Kullanıcılar Listelenemedi');
      }
    );
    this.kullaniciService.KullaniciListele({TIPI:2,AKTIF:1}).subscribe(
      _next => {
        this.grupListesi$ = this.store.pipe(select(state => state.kullanici?.GrupListesi));
        this.grupListesi$?.forEach(array => {
          for (let index = 0; index < array?.length; index++) {
            this.isGrupButtonClicked[index]=false;     
          }
        })
      },
      _error => {
        console.log('Gruplar Listelenemedi');
      }
    );
  }
  arrayTemizle(array:Array<Boolean>) { // Boolean array türlerinin içinin tamamını false yapar.
    for (let index = 0; index < array.length; index++) {
      array[index] = false;
    }
  }

  goGrupList() {
     let userListHeight = document.getElementById('user-list-section').scrollHeight;

     window.scroll(0,userListHeight);
  }

  goUserList() {
    window.scroll(0,0);
  }

  kullaniciClicked(kullanici:any) {
    if(this.kullanici) {
      if(this.kullanici.id != kullanici.id){
        this.kullanici=kullanici;
        this.ayniKullaniciMi = false;
      }else { // aynı kişiye tıklanmıştır
        this.ayniKullaniciMi = !this.ayniKullaniciMi;
      }
    }else {
      this.kullanici=kullanici;
    }

    this.arrayTemizle(this.isKullaniciButtonClicked);
    this.arrayTemizle(this.isGrupButtonClicked);

    this.kullaniciService.KullaniciyaGoreGrupListele({KULLANICI_ID:kullanici.id})
    .subscribe(
      _next => {
        this.kullaniciyaGoreGrupListesi$ = this.store.pipe(select
          (state => state.kullanici.KullaniciyaGoreGrupListesi));
      },
      _error => {
        console.log('Kullanıcıya Göre Gruplar Listelenemedi');
      }
    )

   
  }

  grupClicked(grup:any) {
    if(this.grup) {
      if(this.grup.id != grup.id){
        this.grup=grup;
        this.ayniGrupMu = false;
      }else { // aynı gruba tıklanmıştır
        this.ayniGrupMu = !this.ayniGrupMu;
      }
    }else {
      this.grup=grup;
    }
    this.arrayTemizle(this.isGrupButtonClicked);
    this.arrayTemizle(this.isKullaniciButtonClicked);
   this.kullaniciService.GrubaGoreKullaniciListele({GRUP_ID:grup.id})
   .subscribe(
    _next => {
      this.grubaGoreKullaniciListesi$ = this.store.pipe(select
        (state => state.kullanici.GrubaGoreKullaniciListesi));
    },
    _error => {
      console.log('Kullanıcıya Göre Gruplar Listelenemedi');
    }
   )
  }

  kullaniciSil(id:number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){ // Silme Onaylandı
        this.kullaniciService.kullaniciSil(id).subscribe(
          _next => {
            this.kullaniciService.KullaniciListele({TIPI:1,AKTIF:1}).subscribe(
              _next => {
                this._snackBar.open('Kullanıcı Silindi','',{
                  duration:2000,
                  panelClass:['snackbar-class']
                });
              },
              _error => {
              }
            )
          },
          _error => {
            console.log('Kullanıcı Silinemedi!');
          }
        )
      }
    });
    
  }

  grupSil(id:number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){ // Silme Onaylandı
        this.kullaniciService.grupSil(id).subscribe(
          _next => {
            this.kullaniciService.KullaniciListele({TIPI:2,AKTIF:1}).subscribe(
              _next => {
                this._snackBar.open('Grup Silindi','',{
                  duration:2000,
                  panelClass:['snackbar-class']
                });
              },
              _error => {
              }
            )
          },
          _error => {
            console.log('Grup Silinemedi!');
          }
        )
      }
    });
  }

  kullanicidanGrupSil(body:any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){ // Silme Onaylandı
        this.kullaniciService.kullanicidanGrupSil(body).subscribe(
          _next => {
            this.kullaniciService.KullaniciyaGoreGrupListele({KULLANICI_ID:body.KULLANICI_ID})
            this._snackBar.open('Kullanıcıdan Grup Silindi','',{
              duration:2000,
              panelClass:['snackbar-class']
            });
          },
          _error => {
          }
       
        )
      }
    });
  }

  gruptanKullaniciSil(body:any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){ // Silme Onaylandı
        this.kullaniciService.gruptanKullaniciSil(body).subscribe(
          _next => {
            this._snackBar.open('Gruptan Kullanıcı Silindi','',{
              duration:2000,
              panelClass:['snackbar-class']
            });
          },
          _error => {
          }
       
        )
      }
    });
  }

  kullaniciEklemeClicked() {
    this.kullaniciFormunuAc=!this.kullaniciFormunuAc;
    this.formTipi = 1;
    this.kullaniciyaGrupEkleFormunuAc=false;
  }

  grupEklemeClicked() {
    this.grupFormunuAc=!this.grupFormunuAc;
    this.formTipi = 1;
    this.grubaKullaniciEkleFormunuAc=false;
  }

  kullaniciyaGrupEkleClicked() {
    this.kullaniciyaGrupEkleFormunuAc = true;
    this.formTipi = 2;
  }

  grubaKullaniciEkleClicked() {
    this.grubaKullaniciEkleFormunuAc = true;
    this.formTipi = 2;
  }

  cancelForm() {
    this.kullaniciFormunuAc = false;
    this.grupFormunuAc = false;
    this.kullaniciyaGrupEkleFormunuAc = false;
    this.grubaKullaniciEkleFormunuAc = false;
  }
}
