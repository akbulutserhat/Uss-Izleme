import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KullaniciService } from 'src/app/services/kullanici.service';
import {  FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.models';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() cancelClicked = new EventEmitter();

  @Input() tipi:number;
  @Input() formTipi:number;
  @Input() kullanici:any;
  @Input() grup:any;

  kullaniciOptions$:Observable<Array<any>>;
  grupOptions$:Observable<Array<any>>;
  
  selectedItems:Array<any>=[];
  selectedItem:any='';

  

  form: FormGroup;
  subForm: FormGroup;

  constructor(private kullaniciServis:KullaniciService,private _snackBar:MatSnackBar,
    private store:Store<AppState>, private _fb: FormBuilder) { }

  filteredOptions: Observable<any[]>;

  ngOnInit(): void {
    this.form = this._create({ tipi: this.tipi});
    this.subForm = this._createSubForm();

    this.kullaniciOptions$ = this.store.pipe(
      select(state => state.kullanici.KullaniciListesi)
    );
    this.grupOptions$ = this.store.pipe(select(state => state.kullanici.GrupListesi)); 
  }

  displayFn(item:any): string {
    return item && item.adi ? item.adi : '';
  }

  addItem() {
    if(this.subForm.get('GRUP').value)
      this.selectedItems.push(this.subForm.get('GRUP').value);

    if(this.subForm.get('KULLANICI').value)
      this.selectedItems.push(this.subForm.get('KULLANICI').value);
  }

  async deleteItem(id: number) {
    const index = await this.selectedItems.findIndex(element => element.id == id);
    await this.selectedItems.splice(index,1);
  }

  onSubmitted() {
    if(this.tipi == 1) { // Kullanıcı ekle
      this.kullaniciServis.kullaniciEkle(this.form.value).subscribe(
        _next => {
          this.kullaniciServis.KullaniciListele({TIPI:1,AKTIF:1}).subscribe(
            _next => {
              this._snackBar.open('Kullanıcı Başarıyla Eklendi','',{
                duration:2000,
                panelClass:['snackbar-class']
              });
              this.vazgecClicked();
            },
            _error => {
              console.log('Kullanıcılar Listelenemedi');
            }
          );
          
        },
        _error => {
          console.log('Kullanıcı Eklenemedi!');
        }
      );
    }else if(this.tipi == 2) { // Grup Ekle
      this.kullaniciServis.grupEkle(this.form.value).subscribe(
        _next => {
          this.kullaniciServis.KullaniciListele({TIPI:2,AKTIF:1}).subscribe(
            _next => {
              this._snackBar.open('Grup Başarıyla Eklendi','',{
                duration:2000,
                panelClass:['snackbar-class']
              });
              this.vazgecClicked();
            },
            _error => {
              console.log('Kullanıcılar Listelenemedi');
            }
          );
          
        },
        _error => {
          console.log('Grup Eklenemedi!');
        }
      );
    }
  }

  kullaniciyaGrupEkle() {
    this.selectedItems.forEach(grup => {
      console.log(grup);
      this.kullaniciServis.kullaniciyaGrupEkle({KULLANICI_ID:this.kullanici.id,GRUP_ID:grup.id})
      .subscribe(
        _next => {
          this._snackBar.open('Kullanıcıya Grup Başarıyla Eklendi','',{
            duration:2000,
            panelClass:['snackbar-class']
          });
          this.vazgecClicked();
        },
        _error => {
          console.log('Kullanıcıya grup eklenemedi');
        }
      )
    })
  }

  grubaKullaniciEkle() {
    this.selectedItems.forEach(kullanici => {
      this.kullaniciServis.grubaKullaniciEkle({KULLANICI_ID:kullanici.id,GRUP_ID:this.grup.id})
      .subscribe(
        _next => {
          this._snackBar.open('Gruba Kullanıcı Başarıyla Eklendi','',{
            duration:2000,
            panelClass:['snackbar-class']
          });
          this.vazgecClicked();
        },
        _error => {
          console.log('Gruba kullanıcı eklenemedi');
        }
      )
    })
  }

  vazgecClicked() {
    this.cancelClicked.emit();
  }

  listeyiTemizle() {
    this.selectedItems.splice(0);
  }

  private _create(values: any = {}): FormGroup {
    return this._fb.group({
      TIPI: new FormControl(values.tipi || 1),
      AKTIF: new FormControl(values.aktif || 1),
      ADI: new FormControl(values.adi),
      CINSIYETI: new FormControl(values.cinsiyet),
      EMAIL: new FormControl(values.email),
      SIFRESI: new FormControl(values.sifre)
    })
  }

  private _createSubForm(values:any = {}):FormGroup {
    return this._fb.group({
      GRUP: new FormControl(values.grup || null),
      KULLANICI: new FormControl(values.kullanici || null)
    })
  }
}
