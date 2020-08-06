import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YetkiSayfasiComponent } from './yetki-sayfasi.component';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [YetkiSayfasiComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class YetkiSayfasiModule { }
